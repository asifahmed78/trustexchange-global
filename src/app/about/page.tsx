import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUs() {
    return (
        <div className="bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] text-[var(--color-navy-footer)] dark:text-slate-100 selection:bg-[var(--color-primary)]/30 min-h-screen">
            <Header />

            {/* Header Section */}
            <header className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
                <h1 className="text-5xl md:text-7xl leading-tight max-w-4xl mx-auto font-serif">
                    A community <span className="italic-accent">today</span>. A trust-based infrastructure for <span className="italic-accent">tomorrow</span>.
                </h1>
            </header>

            {/* Story Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[var(--color-navy-footer)]/5">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl font-display italic-accent mb-6">Our Story</h2>
                        <div className="w-16 h-1 bg-[var(--color-accent-sage)]"></div>
                    </div>
                    <div className="lg:col-span-8 space-y-8 text-lg md:text-xl leading-relaxed opacity-90">
                        <p>
                            Trust Exchange was born from a simple observation: in our hyper-connected world, we are losing the spaces that truly matter. We&apos;ve built tools to connect with everyone, yet we&apos;ve never felt more isolated from genuine human collaboration.
                        </p>
                        <p>
                            We believe in building a trust-based infrastructure where skills and knowledge are traded freely, without the barriers of status or finance. It&apos;s about returning to a warm, human way of interacting—where a helping hand isn&apos;t a transaction, but an investment in community.
                        </p>
                        <p>
                            Whether you&apos;re a seasoned expert or a curious learner, this is a space where your value isn&apos;t measured by a bank account, but by the authenticity of your contribution and the trust you build with others.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-[var(--color-accent-sage)]/10 dark:bg-slate-800/50 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display mb-4 font-serif">Our <span className="italic-accent">Values</span></h2>
                        <p className="max-w-2xl mx-auto opacity-70">The pillars that define every exchange within our ecosystem.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white/50 dark:bg-slate-800 p-10 rounded-xl text-center border border-white/20">
                            <div className="w-16 h-16 bg-[var(--color-accent-sage)]/20 text-[var(--color-accent-sage)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-4xl">sync_alt</span>
                            </div>
                            <h3 className="text-2xl font-display mb-3">Reciprocity</h3>
                            <p className="opacity-80">A circular flow of value where giving and receiving find a natural, effortless balance.</p>
                        </div>

                        <div className="bg-white/50 dark:bg-slate-800 p-10 rounded-xl text-center border border-white/20">
                            <div className="w-16 h-16 bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-4xl">fingerprint</span>
                            </div>
                            <h3 className="text-2xl font-display mb-3">Authenticity</h3>
                            <p className="opacity-80">Showing up as your true self, trading real expertise for real needs without the corporate mask.</p>
                        </div>

                        <div className="bg-white/50 dark:bg-slate-800 p-10 rounded-xl text-center border border-white/20">
                            <div className="w-16 h-16 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-4xl">verified_user</span>
                            </div>
                            <h3 className="text-2xl font-display mb-3">Trust</h3>
                            <p className="opacity-80">The foundation of every interaction. We build systems that protect and amplify human integrity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[var(--color-accent-sage)] rounded-xl rotate-3 group-hover:rotate-0 transition-transform"></div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Camille Accolas"
                            className="relative z-10 w-full aspect-square object-cover rounded-xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPEbLMtesCYiGS2jI32CXdIDqFXNC2S5zDRtFZC_mRnoykBRY0hIUzQ5GVKyyfrDN5xlCblmLd11NQbgQP4Xa7bljWNAN3pBqe29RKQm2rhqAy-Z6C-6cTZgqDHJ0MEDga9ymY4Faph7UkdL27R_ANC6JvGDSOJe4pAzwMQycHVnPWWCIGbW1mZuezyDVDjh6RdN8nqP5gJotrG0Ryf8usX2OY4WIRgM5VU8aqF_merQxVt8dA9GmbK9tvMiNacZrZFGon26UvVAQ"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-display mb-2 font-serif">Camille <span className="italic-accent">Accolas</span></h2>
                        <p className="text-[var(--color-primary)] font-bold tracking-widest text-xs uppercase mb-8">Founder &amp; CEO</p>

                        <div className="space-y-6 text-lg opacity-90 leading-relaxed">
                            <p>
                                An ecosystem builder and super connector, Camille works at the intersection of trust, entrepreneurship and regenerative collaboration.
                            </p>
                            <p>
                                After years of observing how traditional networks often fail the individuals within them, she realized the world didn&apos;t need another social platform—it needed a new way to value human contribution. Trust Exchange is her answer.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-4">
                            <a className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all" href="https://camilleaccolas.com" target="_blank">
                                Learn more
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
