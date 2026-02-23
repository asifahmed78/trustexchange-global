import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-background-dark)] text-slate-300 py-16 px-6 border-t border-primary/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
                {/* Brand & Copyright */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Link href="/" className="mb-4 inline-block transform transition-transform hover:scale-105">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo-white.png" alt="Trust Exchange Logo" className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-sm font-medium text-slate-400 max-w-xs">Connecting visionary builders and innovative capital.</p>
                    <p className="text-xs mt-6 text-slate-500">© {new Date().getFullYear()} Trust Exchange. All rights reserved.</p>
                </div>

                {/* Social & Legal */}
                <div className="flex flex-col items-center md:items-end gap-8">
                    {/* Social Links */}
                    <div className="flex gap-5">
                        <a
                            className="bg-white/5 p-2.5 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all transform hover:-translate-y-1"
                            href="https://www.instagram.com/trustexchange.global?igsh=bTd0cGVvNWU5NTc5&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                        </a>
                        <a
                            className="bg-white/5 p-2.5 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all transform hover:-translate-y-1"
                            href="https://www.linkedin.com/company/trust-exchange-global/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                        </a>
                    </div>

                    {/* Legal Links */}
                    <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        <Link className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
