import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <Link href="/" className="flex items-center gap-2 text-[var(--color-primary)]">
                        <span className="material-symbols-outlined">arrow_back</span>
                        <span className="font-bold tracking-tight">Return to Site</span>
                    </Link>
                    <h2 className="text-xl font-bold mt-6 tracking-tight">Admin Dashboard</h2>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                    <Link href="/admin/posts" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[var(--color-primary)]">article</span>
                        <span className="font-medium">Manage Posts</span>
                    </Link>
                    <Link href="/admin/events" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[var(--color-accent-sage)]">event</span>
                        <span className="font-medium">Manage Events</span>
                    </Link>
                    <Link href="/admin/privacy" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[var(--color-accent-red)]">policy</span>
                        <span className="font-medium">Privacy Policy</span>
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
