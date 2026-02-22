import { getEvents, createEvent, deleteEvent } from '@/app/actions';
import { Event } from '@prisma/client';
import Link from 'next/link';

export default async function AdminEvents() {
    const events = await getEvents();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-extrabold tracking-tight">Manage Events</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Create Event Form */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-bold mb-6">Create New Event</h2>
                    <form action={createEvent} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-bold mb-2">Event Title</label>
                            <input type="text" id="title" name="title" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-bold mb-2">Date</label>
                            <input type="datetime-local" id="date" name="date" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-bold mb-2">Location/Format</label>
                            <input type="text" id="location" name="location" placeholder="e.g. Online, NYC, Zoom Webinar" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="type" className="block text-sm font-bold mb-2">Icon Type</label>
                            <select id="type" name="type" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all">
                                <option value="schedule">Schedule (Online/Time)</option>
                                <option value="location_on">Location Pin (In-Person)</option>
                                <option value="videocam">Video (Webinar/Zoom)</option>
                                <option value="group">Group (Meetup)</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="label" className="block text-sm font-bold mb-2">Action Label</label>
                            <input type="text" id="label" name="label" placeholder="e.g. Register on Luma, Request Invite" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="link" className="block text-sm font-bold mb-2">External Link URL (Optional)</label>
                            <input type="url" id="link" name="link" placeholder="https://lu.ma/..." className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-bold mb-2">Featured Image (Optional)</label>
                            <input type="file" id="image" name="image" accept="image/*" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-accent-sage)] outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-accent-sage)] file:text-white hover:file:bg-[var(--color-accent-sage)]/90" />
                        </div>

                        <button type="submit" className="w-full bg-[var(--color-accent-sage)] text-white font-bold py-3 rounded-lg hover:bg-[var(--color-accent-sage)]/90 transition-all mt-4">
                            Add Event
                        </button>
                    </form>
                </div>

                {/* Events List */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold mb-6">Upcoming Events ({events.length})</h2>
                    {events.length === 0 ? (
                        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center text-slate-500">
                            No events found. Create one to get started.
                        </div>
                    ) : (
                        events.map((event: Event) => {
                            const dateObj = new Date(event.date);
                            const month = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
                            const day = dateObj.getDate().toString().padStart(2, '0');
                            const time = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

                            return (
                                <div key={event.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between items-center gap-4">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center justify-center min-w-[60px] h-[70px] bg-slate-100 dark:bg-slate-900 rounded-lg text-[var(--color-accent-sage)]">
                                            <span className="text-[10px] font-bold uppercase tracking-tighter">{month}</span>
                                            <span className="text-2xl font-black">{day}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight">{event.title}</h3>
                                            <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">{event.type}</span>
                                                {event.location} • {time}
                                            </p>
                                            <span className="inline-block mt-2 text-xs font-bold py-1 px-3 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-blue-300">
                                                {event.label}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4 sm:mt-0">
                                        <Link href={`/admin/events/${event.id}`} className="text-slate-500 hover:text-[var(--color-primary)] transition-colors bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded p-2 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </Link>
                                        <form action={async () => {
                                            'use server';
                                            await deleteEvent(event.id);
                                        }}>
                                            <button type="submit" className="text-slate-500 hover:text-[var(--color-accent-red)] transition-colors bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded p-2 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
