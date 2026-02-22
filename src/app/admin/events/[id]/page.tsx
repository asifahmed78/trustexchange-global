import { updateEvent } from '@/app/actions';
import { notFound, redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Format an ISO date string to `YYYY-MM-DDThh:mm` which datetime-local inputs expect
function formatDateForInput(date: Date) {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export default async function EditEvent({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id, 10);

    if (isNaN(id)) {
        notFound();
    }

    const event = await prisma.event.findUnique({
        where: { id },
    });

    if (!event) {
        notFound();
    }

    async function updateAction(formData: FormData) {
        'use server';
        await updateEvent(id, formData);
        redirect('/admin/events');
    }

    return (
        <div className="space-y-8 max-w-4xl">
            <div className="flex items-center gap-4">
                <Link href="/admin/events" className="text-slate-500 hover:text-[var(--color-accent-sage)] transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-3xl font-extrabold tracking-tight">Edit Event</h1>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <form action={updateAction} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label htmlFor="title" className="block text-sm font-bold mb-2">Event Title</label>
                            <input type="text" id="title" name="title" defaultValue={event.title} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-sm font-bold mb-2">Date & Time</label>
                            <input type="datetime-local" id="date" name="date" defaultValue={formatDateForInput(new Date(event.date))} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-sm font-bold mb-2">Location/Format</label>
                            <input type="text" id="location" name="location" defaultValue={event.location} placeholder="e.g. Online, NYC, Zoom Webinar" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-sm font-bold mb-2">Icon Type</label>
                            <select id="type" name="type" defaultValue={event.type} required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all">
                                <option value="schedule">Schedule (Online/Time)</option>
                                <option value="location_on">Location Pin (In-Person)</option>
                                <option value="videocam">Video (Webinar/Zoom)</option>
                                <option value="group">Group (Meetup)</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="label" className="block text-sm font-bold mb-2">Action Label</label>
                            <input type="text" id="label" name="label" defaultValue={event.label || ""} placeholder="e.g. Register on Luma, Request Invite" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="link" className="block text-sm font-bold mb-2">External Link URL (Optional)</label>
                            <input type="url" id="link" name="link" defaultValue={event.link || ""} placeholder="https://lu.ma/..." className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="image" className="block text-sm font-bold mb-2">Update Featured Image (Optional)</label>
                            {event.featuredImage && (
                                <div className="mb-3 text-sm flex items-center gap-2">
                                    <span className="text-slate-500">Current image:</span>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={event.featuredImage} alt="Current cover" className="h-10 w-auto rounded object-cover border border-slate-200 dark:border-slate-700" />
                                </div>
                            )}
                            <input type="file" id="image" name="image" accept="image/*" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-accent-sage)] file:text-white hover:file:bg-[var(--color-accent-sage)]/90" />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="w-full bg-[var(--color-accent-sage)] text-white font-bold py-3.5 rounded-lg hover:bg-[var(--color-accent-sage)]/90 transition-all shadow-md active:scale-[0.98]">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
