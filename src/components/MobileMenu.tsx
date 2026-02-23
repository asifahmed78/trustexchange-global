'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: '/about', label: 'About Us' },
        { href: '/first-100', label: 'The First 100' },
        { href: '/x-changers', label: 'The X-Changers' },
        { href: '/updates', label: 'Our Updates' },
        { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <div className="md:hidden flex items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[var(--foreground)] p-2 focus:outline-none"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-primary/10 shadow-lg py-4 px-6 flex flex-col gap-4 z-50 transition-all">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-base font-semibold py-2 transition-colors ${pathname === link.href
                                    ? 'text-[var(--color-primary)]'
                                    : 'text-[var(--foreground)] hover:text-[var(--color-primary)]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2 border-t border-primary/10">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white text-center px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-sm mt-2"
                        >
                            Join the community
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
