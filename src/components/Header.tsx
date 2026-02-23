import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-(--color-background-light)/80 dark:bg-(--color-background-dark)/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="text-[var(--color-primary)] dark:text-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.png" alt="Trust Exchange Logo" className="h-8 md:h-10 w-auto" />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/about" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">About Us</Link>
                    <Link href="/first-100" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">The First 100</Link>
                    <Link href="/x-changers" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">The X-Changers</Link>
                    <Link href="/updates" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">Our Updates</Link>
                    <Link href="/contact" className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">Contact Us</Link>
                </nav>
                <Link href="/contact" className="hidden md:block bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
                    Join the community
                </Link>
                <MobileMenu />
            </div>
        </header>
    );
}
