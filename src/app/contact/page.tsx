import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactUs() {
    return (
        <div className="bg-[var(--color-background-light)] text-[var(--color-navy-footer)] dark:bg-[var(--color-background-dark)] dark:text-slate-100 antialiased min-h-screen flex flex-col">
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex-1 w-full">
                {/* Hero Section */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                        Contact <span className="italic text-[var(--color-primary)] font-light font-serif">Trust Exchange</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed text-[var(--color-navy-footer)]/80 dark:text-slate-300 font-medium">
                        Trust Exchange is an <span className="italic">international movement</span>, based in Switzerland with global reach.
                        If you’d like to reach out, fill out the form below. We’d love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Form Section */}
                    <div className="lg:col-span-7 bg-white/40 dark:bg-slate-800/40 p-8 md:p-12 rounded-xl shadow-sm border border-[var(--color-navy-footer)]/5 dark:border-white/5 backdrop-blur-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold uppercase tracking-wider" htmlFor="name">Name</label>
                                    <input className="w-full bg-[var(--color-background-light)]/30 dark:bg-slate-700/50 border-[var(--color-navy-footer)]/20 dark:border-white/10 rounded-lg h-14 px-4 placeholder:text-[var(--color-navy-footer)]/40 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all" id="name" name="name" placeholder="Enter your full name" required type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold uppercase tracking-wider" htmlFor="email">Email</label>
                                    <input className="w-full bg-[var(--color-background-light)]/30 dark:bg-slate-700/50 border-[var(--color-navy-footer)]/20 dark:border-white/10 rounded-lg h-14 px-4 placeholder:text-[var(--color-navy-footer)]/40 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all" id="email" name="email" placeholder="hello@example.com" required type="email" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold uppercase tracking-wider" htmlFor="subject">Subject</label>
                                <input className="w-full bg-[var(--color-background-light)]/30 dark:bg-slate-700/50 border-[var(--color-navy-footer)]/20 dark:border-white/10 rounded-lg h-14 px-4 placeholder:text-[var(--color-navy-footer)]/40 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all" id="subject" name="subject" placeholder="How can we help?" required type="text" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold uppercase tracking-wider" htmlFor="message">Message</label>
                                <textarea className="w-full bg-[var(--color-background-light)]/30 dark:bg-slate-700/50 border-[var(--color-navy-footer)]/20 dark:border-white/10 rounded-lg p-4 placeholder:text-[var(--color-navy-footer)]/40 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all resize-none" id="message" name="message" placeholder="Tell us more about your inquiry..." required rows={6}></textarea>
                            </div>

                            <button className="w-full md:w-auto bg-[var(--color-navy-footer)] dark:bg-[var(--color-primary)] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[var(--color-navy-footer)]/95 dark:hover:bg-[var(--color-primary)]/90 active:scale-95 transition-all shadow-lg" type="button">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Additional Info Section */}
                    <div className="lg:col-span-5 space-y-12 py-4">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 italic font-serif">Direct Communication</h3>
                            <div className="flex flex-col gap-6">
                                <a className="group flex items-center gap-4 hover:translate-x-2 transition-transform" href="mailto:hello@trustexchange.world">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] dark:text-blue-300 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-footer)]/50 dark:text-slate-400">Email Us</p>
                                        <p className="text-lg font-semibold">hello@trustexchange.world</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] dark:text-blue-300">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy-footer)]/50 dark:text-slate-400">Headquarters</p>
                                        <p className="text-lg font-semibold">Zurich, Switzerland</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[var(--color-navy-footer)]/10 dark:border-white/10">
                            <h3 className="text-2xl font-bold mb-6">Connect with <span className="italic font-light font-serif">The Movement</span></h3>
                            <div className="flex gap-4">
                                <a className="w-14 h-14 rounded-xl bg-[var(--color-navy-footer)] dark:bg-slate-700 text-white flex items-center justify-center hover:bg-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300" href="#">
                                    <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
                                </a>
                                <a className="w-14 h-14 rounded-xl bg-[var(--color-navy-footer)] dark:bg-slate-700 text-white flex items-center justify-center hover:bg-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300" href="#">
                                    <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                </a>
                            </div>
                            <p className="mt-4 text-sm font-medium text-[var(--color-navy-footer)]/60 dark:text-slate-400">Follow our journey on Instagram and LinkedIn for the latest updates on global trust standards.</p>
                        </div>

                        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[var(--color-navy-footer)]/10 dark:border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-full object-cover" alt="A clean view of a modern building in Switzerland" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_N6X5kCXUwRAIRZDPlAHgtahU6APNvSCI-kbHJsRWCQSRnCr-7gDtumcUCrBJDg3jIP0Qtu9oxX-4l6VymDX34-zsvuINIvg3uR2nm_2uckUrapoLlUc7ms_onZHyv9F07wDSmWz9xKZ-KkXR_4qiDEloyc4EKEsGcBcYWtTjOBGGMw3uUOJ9RBZdjFr8RwarSbq6FQu-S2hTLzb7xVD-Lh2chs1SUwAm8qPQZYSutaS-yPrleB_erw8nciQCJHMHyWS5RhT5-C8" />
                            <div className="absolute inset-0 bg-[var(--color-navy-footer)]/20 flex items-center justify-center pointer-events-none">
                                <span className="bg-white/90 dark:bg-slate-800/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-sm">HQ: Zurich, Switzerland</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
