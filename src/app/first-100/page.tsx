import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function First100() {
    return (
        <div className="bg-[var(--color-background-light)] text-[var(--color-navy-footer)] dark:bg-[var(--color-background-dark)] dark:text-slate-100 selection:bg-[var(--color-primary)]/30 min-h-screen">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="People collaborating"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj5M1kHg34NVOlByjfdSLPh7P3c0B5K2VG8rJzdv98PgZIJqvukG_i25d8IdouhLntuosv3PkXrXV_gk1h4yCbrhBzvhRrLPGcPVLnrUjLr4JfjM_z2FNJA1Unti72NSP4wmvTNqppExbceLsxd0BM5fP1K2BPgzOH56FXKb2RcI_yr3JrjBbv4mt2mAOl8yf5Uc3_KOZOxtH0li-db2OjMsIRWkZO_T_f-HAQ4b87ltqtQy1qzJ5kwy_kvvg1APm9dGh6H8rdm5E"
                        />
                        <div className="absolute inset-0 bg-[var(--color-navy-footer)]/40 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-light)] dark:from-[var(--color-background-dark)] via-transparent to-transparent"></div>
                    </div>

                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto hero-text-animate">
                        <h1 className="text-5xl md:text-7xl text-white leading-tight mb-6 font-serif">
                            Join our <i className="italic font-serif">First 100</i>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mx-auto mb-10">
                            The founding community shaping Trust Exchange.
                        </p>
                        <Link href="/contact" className="inline-block bg-[var(--color-navy-footer)] text-[var(--color-background-light)] px-10 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform shadow-xl">
                            Join the First 100
                        </Link>
                    </div>
                </section>

                {/* Manifesto & Description Section */}
                <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl leading-tight text-[var(--color-navy-footer)] dark:text-white font-serif">
                                Our <i className="italic">Manifesto</i>
                            </h2>
                            <p className="text-xl leading-relaxed text-[var(--color-navy-footer)]/80 dark:text-slate-300">
                                The most powerful change happens when you meet the right people at the right time. Trust Exchange is built on the belief that collaboration is essential to reshape and rebuild a better world. That world starts with us as individuals.
                            </p>
                            <Link href="/contact" className="hidden md:inline-block bg-[var(--color-navy-footer)] text-[var(--color-background-light)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--color-navy-footer)]/90 text-center">
                                Join the First 100
                            </Link>
                        </div>

                        <div className="bg-[var(--color-primary)]/5 p-8 md:p-12 rounded-2xl border border-[var(--color-primary)]/10">
                            <h3 className="text-2xl font-bold mb-8 text-[var(--color-primary)] font-serif">If you are...</h3>
                            <ul className="space-y-8">
                                <li className="flex gap-4">
                                    <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">rocket_launch</span>
                                    <div>
                                        <p className="text-lg font-medium">Creating or starting something of your own but don’t hold all the cards yet.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">alt_route</span>
                                    <div>
                                        <p className="text-lg font-medium">In the midst of a transition, whether professional or personal.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">public</span>
                                    <div>
                                        <p className="text-lg font-medium">Seeking a community built for impact and a better tomorrow.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="bg-[var(--color-navy-footer)] py-24 px-6 md:px-20">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl text-[var(--color-background-light)] mb-6 font-serif">The <i className="italic text-[var(--color-primary)]">Experience</i></h2>
                        <p className="text-[var(--color-background-light)]/70 max-w-2xl mx-auto">Exclusive benefits designed for the architects of our future community.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[var(--color-primary)] transition-colors group">
                            <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-4 group-hover:scale-110 transition-transform">diversity_3</span>
                            <h4 className="text-[var(--color-background-light)] text-xl font-bold mb-3 font-serif">Monthly Sessions</h4>
                            <p className="text-[var(--color-background-light)]/60 text-sm leading-relaxed">Including 1‑on‑1 matchmaking with someone who can support your goals.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[var(--color-primary)] transition-colors group">
                            <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-4 group-hover:scale-110 transition-transform">confirmation_number</span>
                            <h4 className="text-[var(--color-background-light)] text-xl font-bold mb-3 font-serif">Priority Access</h4>
                            <p className="text-[var(--color-background-light)]/60 text-sm leading-relaxed">VIP entry and early registration for all Trust Exchange events worldwide.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[var(--color-primary)] transition-colors group">
                            <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-4 group-hover:scale-110 transition-transform">all_inclusive</span>
                            <h4 className="text-[var(--color-background-light)] text-xl font-bold mb-3 font-serif">Lifetime Access</h4>
                            <p className="text-[var(--color-background-light)]/60 text-sm leading-relaxed">Full access to the Trust Exchange platform and growing global community.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[var(--color-primary)] transition-colors group">
                            <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-4 group-hover:scale-110 transition-transform">auto_fix_high</span>
                            <h4 className="text-[var(--color-background-light)] text-xl font-bold mb-3 font-serif">Co‑dreamer Role</h4>
                            <p className="text-[var(--color-background-light)]/60 text-sm leading-relaxed">Help shape the vision, culture, and roadmap of what this grows into.</p>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[var(--color-primary)]/90 transition-all">
                            Join the First 100
                        </Link>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-24 px-6 md:px-20 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl text-center mb-16 italic font-serif">Voices of the Founding 100</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Testimonial 1 */}
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-[var(--color-navy-footer)]/5 flex flex-col justify-between">
                                <p className="italic mb-8 leading-relaxed">&quot;Being part of the First 100 has completely shifted my perspective on what collective impact looks like. The matchmaking alone is worth it.&quot;</p>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-[var(--color-navy-footer)]/10 dark:bg-white/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[var(--color-navy-footer)] dark:text-white">person</span>
                                    </div>
                                    <div>
                                        <p className="font-bold">Sarah Chen</p>
                                        <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest font-bold">Social Entrepreneur</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-[var(--color-navy-footer)]/5 flex flex-col justify-between">
                                <p className="italic mb-8 leading-relaxed">&quot;The level of intentionality in this community is unmatched. I&apos;ve found collaborators here that I couldn&apos;t find anywhere else.&quot;</p>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-[var(--color-navy-footer)]/10 dark:bg-white/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[var(--color-navy-footer)] dark:text-white">person</span>
                                    </div>
                                    <div>
                                        <p className="font-bold">Marcus Thorne</p>
                                        <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest font-bold">Creative Director</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-[var(--color-navy-footer)]/5 flex flex-col justify-between">
                                <p className="italic mb-8 leading-relaxed">&quot;Trust Exchange isn&apos;t just a network; it&apos;s a movement. Being a co-dreamer means I&apos;m helping build the table, not just sitting at it.&quot;</p>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-[var(--color-navy-footer)]/10 dark:bg-white/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[var(--color-navy-footer)] dark:text-white">person</span>
                                    </div>
                                    <div>
                                        <p className="font-bold">Aisha Morrow</p>
                                        <p className="text-xs text-[var(--color-primary)] uppercase tracking-widest font-bold">Impact Investor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 px-6 bg-[var(--color-primary)] text-white text-center">
                    <h2 className="text-4xl md:text-6xl mb-8 leading-tight max-w-3xl mx-auto font-serif">Are you ready to shape the <i className="italic">future</i>?</h2>
                    <Link href="/contact" className="inline-block bg-[var(--color-navy-footer)] text-white px-12 py-5 rounded-lg text-xl font-bold hover:scale-105 transition-transform">
                        Join the First 100
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    );
}
