import { getPosts, updatePost } from '@/app/actions';
import { notFound, redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id, 10);

    if (isNaN(id)) {
        notFound();
    }

    const post = await prisma.post.findUnique({
        where: { id },
    });

    if (!post) {
        notFound();
    }

    // Wrap the action so we can handle redirecting securely
    async function updateAction(formData: FormData) {
        'use server';
        await updatePost(id, formData);
        redirect('/admin/posts');
    }

    return (
        <div className="space-y-8 max-w-4xl">
            <div className="flex items-center gap-4">
                <Link href="/admin/posts" className="text-slate-500 hover:text-[var(--color-primary)] transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-3xl font-extrabold tracking-tight">Edit Post</h1>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <form action={updateAction} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-bold mb-2">Title</label>
                            <input type="text" id="title" name="title" defaultValue={post.title} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="slug" className="block text-sm font-bold mb-2">Slug</label>
                            <input type="text" id="slug" name="slug" defaultValue={post.slug} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="excerpt" className="block text-sm font-bold mb-2">Excerpt</label>
                        <textarea id="excerpt" name="excerpt" defaultValue={post.excerpt || ""} rows={2} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all resize-none"></textarea>
                    </div>

                    <div>
                        <label htmlFor="externalUrl" className="block text-sm font-bold mb-2">External URL (Optional)</label>
                        <input type="url" id="externalUrl" name="externalUrl" defaultValue={post.externalUrl || ""} placeholder="https://..." className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-bold mb-2">Content (Ignored if External URL is provided)</label>
                        <textarea id="content" name="content" defaultValue={post.content} rows={8} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all resize-none"></textarea>
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-bold mb-2">Update Cover Image (Optional)</label>
                        {post.imageUrl && (
                            <div className="mb-3 text-sm flex items-center gap-2">
                                <span className="text-slate-500">Current image:</span>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={post.imageUrl} alt="Current cover" className="h-10 w-auto rounded object-cover border border-slate-200 dark:border-slate-700" />
                            </div>
                        )}
                        <input type="file" id="image" name="image" accept="image/*" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-primary)] file:text-white hover:file:bg-[var(--color-primary)]/90" />
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                        <input type="checkbox" id="published" name="published" value="true" defaultChecked={post.published} className="w-5 h-5 text-[var(--color-primary)] rounded focus:ring-[var(--color-primary)]" />
                        <label htmlFor="published" className="text-sm font-bold cursor-pointer select-none">Make this post public (Published)</label>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <button type="submit" className="flex-1 bg-[var(--color-primary)] text-white font-bold py-3.5 rounded-lg hover:bg-[var(--color-primary)]/90 transition-all shadow-md active:scale-[0.98]">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
