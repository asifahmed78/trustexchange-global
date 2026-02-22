import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPosts, getEvents } from '@/app/actions';
import { Post, Event } from '@prisma/client';
import Link from 'next/link';

export default async function Updates(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const searchParams = await props.searchParams;
    const page = parseInt(searchParams.page as string || '1', 10);
    const postsPerPage = 4;

    const posts = await getPosts();
    const events = await getEvents();

    // Only show published posts publicly
    const publishedPosts = posts.filter((p: Post) => p.published);

    const totalPages = Math.ceil(publishedPosts.length / postsPerPage);
    const paginatedPosts = publishedPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

    return (
        <div className="bg-[var(--color-background-light)] text-[var(--color-navy-footer)] dark:bg-[var(--color-background-dark)] dark:text-slate-100 antialiased min-h-screen flex flex-col">
            <Header />

            {/* Header Section */}
            <header className="pt-20 pb-12 px-6 lg:px-20 max-w-7xl mx-auto w-full">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
                        Our <span className="italic font-serif text-[var(--color-primary)]">Updates</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed opacity-90 font-medium">
                        Trust Exchange is not a fixed product. Our journey is being molded every day and we want to share that with our community. Read up on our latest news and join upcoming events!
                    </p>
                </div>
            </header>

            <main className="px-6 lg:px-20 max-w-7xl mx-auto pb-24 w-full flex-1">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main News Grid */}
                    <div className="lg:w-2/3">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-[var(--color-primary)]">article</span>
                                Latest <span className="italic font-serif">News &amp; Stories</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {paginatedPosts.length > 0 ? paginatedPosts.map((post: Post, i: number) => {
                                // Use a placeholder image rotating through 4 default images
                                const fallbackImages = [
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAq5KELMb8TK3ZyR7sA6RnVqxaKRE4-QHX06xgsifdooWcqI0hsA1mX3irAY66KrofX2-uCWBuNBHclOrLq4qtD_P3TJAiu9BX1F-AJIPhQJ7xfFF-el5Gcm8qFPPfCrSWcdxLl5z3xceF1nnhnUkbfXccK5g07WuCPDX2cWJ4S21-SOkJNMwOcLB7RM2aRH-a-knknObX9Z8p1YAJZ50pjxo5zXzAo9X4tGHMawHbVltrDkTL_UgSgoXE1JDP12TdRHu_wGcfE4ww",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDiMVyKnR24Prr7dfqXRKigJF0DGFW3Su9iUa_DiC6_kxlfUepBFlUY_ISXg5OShUeU6OFbk_NZOrRFg_zUS17r9ZfkKBLBfa0v2S5sn5I_K_3QriDsC70xE2VNmLsGBD_b3J4rWiVxvN2tI69hKHizNXC4ghl0RnqvDBTjTB-C_Duqz-1PVsJXreh6uHlbLbw8-8U_Abu1bkkkbYkHJNCAzPrrmOcR1XomqNsni2KXVO-oEfbMHHT7Z0BOMOh-a_dvMPzhXAMI6Dk",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ArKj6lCpedPzGYs1iyeGtcIxB3OuE26nF00RKVj2rRBmS1cS-bXiEHs81ks7sawBQ3RW_3glyX53-SR98z6HZ7-LKG3DrPTSdfS_cK4WoS-BKIuF4pnK8f39YhLFvGJRoj4fZP2Fyoum4UWgpmmrMpKrfYyyGlMF_CJLWvxw0tNJiPlHyk1FAHOL6mCIr-jEC6VMYQYNHQsIBSQA5pyyVlB1yT_gnNbewUwYCstHy0S0fZNvo6B-GRyZoXBJ6lqIAsm_89Xo3HE",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3Egg2G87Sz-cyaSCxlGPC9BDhfTmbswEUR1DHV8AHJqjPHQBBndaUOks95FJyJROtWwJhMmAGhjaA8uCYLpjpTM6nuoqW5HAJ1uiycd2YgsbucJpglkyZPlSfTgBXDkVImfYI--AL4eDCxnyilbjcYTSZGDLtqu6ZQHO8DKMl1InNfDCnjZwPQtZt1bDiUfDIBn_00UEXPpQMf4ExsWUguOWY21NxZl1JXvDMAEns9c8YyaYcqQ29ulRCMYFXphGyif4N1yFwk"
                                ];

                                return (
                                    <Link href={post.externalUrl || `/updates/${post.slug}`} target={post.externalUrl ? "_blank" : undefined} key={post.id} className="group cursor-pointer bg-white/40 dark:bg-slate-800/40 border border-black/10 dark:border-white/10 rounded-xl overflow-hidden hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all shadow-sm hover:shadow-md">
                                        <div className="aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} src={post.imageUrl || fallbackImages[i % 4]} />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-blue-300 rounded">News</span>
                                                <span className="text-xs font-medium opacity-60">
                                                    {new Date(post.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug">{post.title}</h3>
                                            <p className="text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">{post.excerpt}</p>
                                            <span className="text-sm font-bold flex items-center gap-1 text-[var(--color-primary)] dark:text-blue-300 group-hover:translate-x-1 transition-transform">
                                                Read More <span className="material-symbols-outlined text-sm">{post.externalUrl ? 'open_in_new' : 'arrow_forward'}</span>
                                            </span>
                                        </div>
                                    </Link>
                                );
                            }) : (
                                <div className="col-span-1 md:col-span-2 text-center py-12 text-slate-500 bg-white/40 dark:bg-slate-800/40 border border-black/10 dark:border-white/10 rounded-xl">
                                    No updates currently available. Please check back later!
                                </div>
                            )}
                        </div>

                        {totalPages > 1 && (
                            <div className="mt-12 flex items-center justify-center gap-4">
                                {page > 1 ? (
                                    <Link href={`/updates?page=${page - 1}`} className="px-6 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] dark:text-blue-300 dark:border-blue-300 font-bold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all">
                                        Previous
                                    </Link>
                                ) : (
                                    <div className="px-6 py-2 border opacity-50 cursor-not-allowed border-slate-300 text-slate-400 font-bold rounded-lg">
                                        Previous
                                    </div>
                                )}
                                <span className="font-semibold text-sm">Page {page} of {totalPages}</span>
                                {page < totalPages ? (
                                    <Link href={`/updates?page=${page + 1}`} className="px-6 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] dark:text-blue-300 dark:border-blue-300 font-bold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all">
                                        Next
                                    </Link>
                                ) : (
                                    <div className="px-6 py-2 border opacity-50 cursor-not-allowed border-slate-300 text-slate-400 font-bold rounded-lg">
                                        Next
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Events Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="bg-[var(--color-navy-footer)] text-white rounded-2xl p-8 sticky top-28">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold">Upcoming <span className="italic font-serif text-[var(--color-primary)]">Events</span></h2>
                                <span className="material-symbols-outlined text-[var(--color-primary)]/50">calendar_today</span>
                            </div>

                            <div className="space-y-6">
                                {events.slice(0, 3).map((event: Event) => {
                                    const dateObj = new Date(event.date);
                                    const month = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
                                    const day = dateObj.getDate().toString().padStart(2, '0');
                                    const time = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

                                    return (
                                        <div key={event.id} className="border-b border-white/10 pb-6 group">
                                            {event.featuredImage && (
                                                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden shrink-0">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={event.featuredImage} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                            )}
                                            <div className="flex gap-4">
                                                <div className="flex flex-col items-center justify-center min-w-[50px] h-[60px] bg-white/10 rounded-lg shrink-0">
                                                    <span className="text-[10px] font-bold uppercase tracking-tighter">{month}</span>
                                                    <span className="text-xl font-black">{day}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg leading-tight group-hover:text-[var(--color-primary)] transition-colors">{event.title}</h4>
                                                    <p className="text-xs opacity-60 mt-1 flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[14px]">{event.type}</span> {time} • {event.location}
                                                    </p>
                                                    {event.link ? (
                                                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs font-bold py-2 px-4 rounded bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/80 transition-all text-center">{event.label}</a>
                                                    ) : (
                                                        <button className="mt-4 text-xs font-bold py-2 px-4 rounded bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/80 transition-all">{event.label}</button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {events.length === 0 && (
                                    <div className="text-center py-8 text-white/50 bg-white/5 rounded-lg border border-white/10">
                                        No upcoming events. Check back soon.
                                    </div>
                                )}

                                <div className="mt-6">
                                    <a href="https://luma.com/trust-exchange" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white text-[var(--color-navy-footer)] text-center font-bold rounded-lg hover:bg-slate-200 transition-all">
                                        See All Events
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <div className="bg-[var(--color-primary)]/20 rounded-xl p-4 flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">mail</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold">Never miss an update</p>
                                        <a className="text-xs text-[var(--color-primary)] underline font-medium" href="mailto:hello@trustexchange.com">Subscribe to newsletter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
}
