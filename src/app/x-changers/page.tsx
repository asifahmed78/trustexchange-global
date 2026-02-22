import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function XChangers() {
    return (
        <div className="bg-[var(--color-background-light)] text-[var(--color-navy-footer)] dark:bg-[var(--color-background-dark)] dark:text-slate-100 min-h-screen">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="px-6 md:px-20 py-20 lg:py-32 flex flex-col items-center text-center">
                    <div className="max-w-[840px] space-y-8">
                        <h1 className="font-serif text-[var(--color-navy-footer)] dark:text-white text-5xl md:text-7xl font-normal leading-[1.1]">
                            Partner with <span className="italic">Trust Exchange</span>
                        </h1>
                        <p className="text-[var(--color-navy-footer)]/80 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
                            Organisations are navigating unprecedented change. Whether you&apos;re a company, foundation or network, Trust Exchange offers frameworks and programmes that place
                            <span className="text-[var(--color-primary)] underline decoration-[var(--color-accent-sage)] underline-offset-4"> collaboration and trust</span> at the heart of your work.
                        </p>
                        <div className="pt-4">
                            <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Our Offerings Section */}
                <section className="px-6 md:px-20 py-20 bg-[var(--color-accent-sage)]/10 dark:bg-slate-800/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-16">
                            <h2 className="font-serif text-4xl text-[var(--color-navy-footer)] dark:text-white">Our <span className="italic text-[var(--color-accent-sage)]">Offerings</span></h2>
                            <div className="h-[1px] flex-1 bg-[var(--color-accent-sage)]/30 ml-8 hidden md:block"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Workshops */}
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border-t-4 border-[var(--color-accent-sage)] shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-[var(--color-accent-sage)]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[var(--color-accent-sage)] text-3xl">groups</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">Workshops</h3>
                                <p className="text-[var(--color-navy-footer)]/70 dark:text-slate-400 leading-relaxed">
                                    Facilitate deep collaboration within your internal teams or partners. We move from conversation to action by designing participatory workshops that build trust and unlock collective intelligence.
                                </p>
                            </div>

                            {/* Symposiums */}
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border-t-4 border-[var(--color-accent-sage)] shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-[var(--color-accent-sage)]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[var(--color-accent-sage)] text-3xl">hub</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">Symposiums &amp; systems design</h3>
                                <p className="text-[var(--color-navy-footer)]/70 dark:text-slate-400 leading-relaxed">
                                    Working at the intersection of finance and nature, we curate working groups on a mandate basis to design regenerative systems and align incentives for impact.
                                </p>
                            </div>

                            {/* Events */}
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border-t-4 border-[var(--color-accent-sage)] shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-[var(--color-accent-sage)]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[var(--color-accent-sage)] text-3xl">record_voice_over</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">Events &amp; speaking</h3>
                                <p className="text-[var(--color-navy-footer)]/70 dark:text-slate-400 leading-relaxed">
                                    From keynotes on the role of trust in the age of AI to co-designing participatory events, we help democratise your gatherings so that collaboration and action can take root.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Collaborate Section */}
                <section className="px-6 md:px-20 py-24 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)]">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <h2 className="font-serif text-5xl text-[var(--color-navy-footer)] dark:text-white mb-6 leading-tight">
                                Why collaborate <br /><span className="italic">with us?</span>
                            </h2>
                            <p className="text-lg text-[var(--color-navy-footer)]/80 dark:text-slate-300 max-w-md">Unlock the potential of collective action and regenerative design with our proven frameworks.</p>

                            <div className="mt-12 overflow-hidden rounded-2xl aspect-[4/3] bg-[var(--color-primary)]/10">
                                <div className="w-full h-full bg-cover bg-center transition-transform hover:scale-105" data-alt="People collaborating around a table in a modern bright office space" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAus2HH60cbsp_Xxb4yvpMvFT8vQgcZtMekor9W7UZWcLz62_QyVKRVjSm_sG-rlvnKUDQl2onJ-hInDNxlMffM0gXH6PvpZhKMNF_5QjU4wA6ntGMyf8gchHZauCWkIhQRDyvhIZH19w5IyaDeFXeGJyJukcnzpSNCGVYcjaebfNrxWzn6sIiBkKzsLMQlum5eXaz2aNeDX9nDqRDzFFmzj5gquis2hGAM0EKuraKDC315KF8YsBh3Q-W4XUjfm5DGsOp9wwK9qU8")' }}>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                            <div className="flex gap-6 p-6 rounded-xl border border-[var(--color-accent-sage)]/30 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-[var(--color-accent-sage)] font-bold text-3xl">diversity_2</span>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Break down silos</h4>
                                    <p className="text-[var(--color-navy-footer)]/70 dark:text-slate-400">Build shared purpose across teams and partners by bridging gaps in communication and vision.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-6 rounded-xl border border-[var(--color-accent-sage)]/30 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-[var(--color-accent-sage)] font-bold text-3xl">schema</span>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Prototype models</h4>
                                    <p className="text-[var(--color-navy-footer)]/70 dark:text-slate-400">Implement regenerative models aligned with your mission using our iterative design process.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-6 rounded-xl border border-[var(--color-accent-sage)]/30 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-[var(--color-accent-sage)] font-bold text-3xl">handshake</span>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Engage stakeholders</h4>
                                    <p className="text-[var(--color-navy-footer)]/70 dark:text-slate-400">Connect authentically and inclusively with all stakeholders to ensure long-term sustainability.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-6 rounded-xl border border-[var(--color-accent-sage)]/30 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-[var(--color-accent-sage)] font-bold text-3xl">auto_awesome</span>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Transform events</h4>
                                    <p className="text-[var(--color-navy-footer)]/70 dark:text-slate-400">Turn standard gatherings into meaningful catalysts for genuine organisational change.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="px-6 md:px-20 py-24 bg-[var(--color-navy-footer)] text-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-serif text-4xl mb-16 text-center italic">Voices from the <span className="text-[var(--color-accent-sage)]">Exchange</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="bg-white/5 dark:bg-slate-800/50 p-8 rounded-xl border border-white/10 dark:border-white/5 italic">
                                <p className="text-lg leading-relaxed mb-8">&quot;The Trust Exchange framework allowed us to bridge gaps between departments we didn&apos;t even know existed. A truly transformative experience.&quot;</p>
                                <div className="flex items-center gap-4 not-italic">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-sage)]/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined">corporate_fare</span>
                                    </div>
                                    <div>
                                        <p className="font-bold">Director of Innovation</p>
                                        <p className="text-sm text-white/60">Global Foundation</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 dark:bg-slate-800/50 p-8 rounded-xl border border-white/10 dark:border-white/5 italic">
                                <p className="text-lg leading-relaxed mb-8">&quot;Working at the intersection of finance and nature requires trust. Trust Exchange provided the neutral ground we needed.&quot;</p>
                                <div className="flex items-center gap-4 not-italic">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-sage)]/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined">eco</span>
                                    </div>
                                    <div>
                                        <p className="font-bold">Sustainability Lead</p>
                                        <p className="text-sm text-white/60">Investment Network</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 dark:bg-slate-800/50 p-8 rounded-xl border border-white/10 dark:border-white/5 italic">
                                <p className="text-lg leading-relaxed mb-8">&quot;Their participatory workshops transformed our team&apos;s collective intelligence into a tangible strategic roadmap for the year ahead.&quot;</p>
                                <div className="flex items-center gap-4 not-italic">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-sage)]/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </div>
                                    <div>
                                        <p className="font-bold">CEO</p>
                                        <p className="text-sm text-white/60">Emerging Tech Org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="px-6 md:px-20 py-32 text-center bg-[var(--color-accent-sage)]">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="font-serif text-white text-5xl leading-tight">Ready to transform the way <br /><span className="italic">you work?</span></h2>
                        <p className="text-white/90 text-xl font-medium">Contact us to explore how we can collaborate and bring trust back to your core operations.</p>
                        <div className="pt-6">
                            <Link className="inline-block bg-[var(--color-navy-footer)] text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-[var(--color-navy-footer)]/90 shadow-2xl transition-all transform hover:scale-105" href="/contact">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
