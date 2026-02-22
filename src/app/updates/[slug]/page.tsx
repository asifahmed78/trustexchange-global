import { PrismaClient } from '@prisma/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function generateStaticParams() {
    const posts = await prisma.post.findMany({ select: { slug: true } });
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function SinglePost({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;

    const post = await prisma.post.findUnique({
        where: { slug: resolvedParams.slug },
    });

    if (!post) {
        notFound();
    }

    if (post.externalUrl) {
        // Just in case someone manually routes here even when it's an external URL
        // A link to go out
        return (
            <div className="bg-[var(--color-background-light)] text-[var(--color-navy-footer)] dark:bg-[var(--color-background-dark)] dark:text-slate-100 antialiased min-h-screen flex flex-col">
                <Header />
                <main className="max-w-4xl mx-auto px-6 py-24 flex-1 w-full text-center">
                    <h1 className="text-4xl font-black mb-6">{post.title}</h1>
                    <p className="mb-8">This post is hosted on an external website.</p>
                    <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-bold">
                        Read on External Site
                    </a>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-[var(--color-background-light)] text-[var(--color-navy-footer)] dark:bg-[var(--color-background-dark)] dark:text-slate-100 antialiased min-h-screen flex flex-col">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 flex-1 w-full">
                <Link href="/updates" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:-translate-x-1 transition-transform mb-12">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Updates
                </Link>

                <article>
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-blue-300 rounded">News</span>
                            <span className="text-sm font-medium opacity-60">
                                {new Date(post.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>
                        {post.excerpt && (
                            <p className="text-xl md:text-2xl leading-relaxed opacity-80 font-serif italic border-l-4 border-[var(--color-primary)] pl-6 py-2">
                                {post.excerpt}
                            </p>
                        )}
                        {post.imageUrl && (
                            <div className="mt-8 mb-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-xl object-cover shadow-lg max-h-[500px]" />
                            </div>
                        )}
                    </header>

                    <div className="prose prose-lg dark:prose-invert max-w-none font-sans leading-loose text-slate-800 dark:text-slate-300 whitespace-pre-line">
                        {post.content}
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
