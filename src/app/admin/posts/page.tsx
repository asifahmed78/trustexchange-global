import { getPosts, createPost, deletePost } from '@/app/actions';
import { Post } from '@prisma/client';
import Link from 'next/link';

export default async function AdminPosts() {
    const posts = await getPosts();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-extrabold tracking-tight">Manage Posts</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Create Post Form */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-bold mb-6">Create New Post</h2>
                    <form action={createPost} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-bold mb-2">Title</label>
                            <input type="text" id="title" name="title" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="slug" className="block text-sm font-bold mb-2">Slug</label>
                            <input type="text" id="slug" name="slug" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="excerpt" className="block text-sm font-bold mb-2">Excerpt</label>
                            <textarea id="excerpt" name="excerpt" rows={2} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all resize-none"></textarea>
                        </div>
                        <div>
                            <label htmlFor="externalUrl" className="block text-sm font-bold mb-2">External URL (Optional)</label>
                            <input type="url" id="externalUrl" name="externalUrl" placeholder="https://..." className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-bold mb-2">Content (Ignored if External URL is provided)</label>
                            <textarea id="content" name="content" rows={5} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all resize-none"></textarea>
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-bold mb-2">Cover Image (Optional)</label>
                            <input type="file" id="image" name="image" accept="image/*" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-primary)] file:text-white hover:file:bg-[var(--color-primary)]/90" />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="published" name="published" value="true" className="w-4 h-4 text-[var(--color-primary)] rounded focus:ring-[var(--color-primary)]" defaultChecked />
                            <label htmlFor="published" className="text-sm font-bold">Published</label>
                        </div>
                        <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-3 rounded-lg hover:bg-[var(--color-primary)]/90 transition-all">
                            Publish Post
                        </button>
                    </form>
                </div>

                {/* Posts List */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold mb-6">Existing Posts ({posts.length})</h2>
                    {posts.length === 0 ? (
                        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center text-slate-500">
                            No posts found. Create one to get started.
                        </div>
                    ) : (
                        posts.map((post: Post) => (
                            <div key={post.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-lg">{post.title} {post.externalUrl && <span className="material-symbols-outlined text-[14px] ml-1 text-slate-400">open_in_new</span>}</h3>
                                    <p className="text-sm text-slate-500 mb-2">/{post.slug}</p>
                                    <p className="text-sm mb-3 opacity-80">{post.excerpt}</p>
                                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                                        <span className={post.published ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}>
                                            {post.published ? 'Published' : 'Draft'}
                                        </span>
                                        <span className="opacity-50">• {new Date(post.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                                    <Link href={`/admin/posts/${post.id}`} className="text-slate-500 hover:text-[var(--color-primary)] transition-colors bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded p-2 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm">edit</span>
                                    </Link>
                                    <form action={async () => {
                                        'use server';
                                        await deletePost(post.id);
                                    }}>
                                        <button type="submit" className="text-slate-500 hover:text-[var(--color-accent-red)] transition-colors bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded p-2 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
