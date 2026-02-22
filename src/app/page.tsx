import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getEvents } from '@/app/actions';
import { Event } from '@prisma/client';
import Link from 'next/link';

export default async function Home() {
  const events = await getEvents();
  return (
    <div className="bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] text-slate-900 dark:text-slate-100 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="People connecting in an open natural space"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbn03Hgr_aejLeJiVYN88Hntii0Ab2pyW3DB2E1UmRw1uL0KqHzOVB1_jrFSRsWI2efpm-qNQjYn6omETgxuAaXrVQDblC4JT4zyY3smof9fv4TFDdd--h6awYWXVFZKUsfBkCZBx3RF0XKwg6RGrP-nI2r1gI6-pwg-Ndt21czj_DXu7K1lDWPwcotdyj-qji9ZkqgVZPIxYfEzpJ5sW6Y5OnB8lHgSRI6Oy5CjwhFfXK6mZTD84MdHZZwX0wPUEDdFII2hLw3U0"
          />
        </div>
        <div className="relative z-20 text-center max-w-5xl mx-auto hero-text-animate w-full">
          <div className="relative h-[160px] md:h-[220px] w-full flex items-center justify-center">
            <h2 className="absolute text-white text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase animate-swap-1 w-full px-4">
              Networking is Dead.
            </h2>
            <h2 className="absolute text-white text-4xl md:text-7xl font-bold tracking-tight leading-tight uppercase animate-swap-2 w-full px-4">
              We need new <br className="md:hidden" /><span className="meeting-grounds-italic">Meeting Grounds</span>.
            </h2>
          </div>
          <div className="mt-8">
            <Link href="/about" className="inline-block bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl active:scale-[0.98]">
              Explore Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Intro & Mission */}
      <section className="py-24 px-6 bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-6">Authentic connections in a hyper-connected world</h3>
          <p className="text-3xl md:text-4xl font-serif text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
            Trust Exchange is a meeting ground for <span className="text-[var(--color-primary)]">unlikely encounters</span>, fostering a community built on shared values and meaningful collaboration.
          </p>
        </div>

        {/* Values Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4">
          <div className="bg-white/50 dark:bg-white/5 p-8 rounded-xl border border-primary/10 text-center flex flex-col items-center group hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm">
            <span className="material-symbols-outlined text-4xl text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform">handshake</span>
            <h4 className="text-xl font-bold mb-2">Reciprocity</h4>
            <p className="text-slate-600 dark:text-slate-400 font-sans">Principle of share and give. A cycle of mutual growth.</p>
          </div>
          <div className="bg-white/50 dark:bg-white/5 p-8 rounded-xl border border-primary/10 text-center flex flex-col items-center group hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm">
            <span className="material-symbols-outlined text-4xl text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform">person_celebrate</span>
            <h4 className="text-xl font-bold mb-2">Authenticity</h4>
            <p className="text-slate-600 dark:text-slate-400 font-sans">Humans, not brands. Genuine presence over performance.</p>
          </div>
          <div className="bg-white/50 dark:bg-white/5 p-8 rounded-xl border border-primary/10 text-center flex flex-col items-center group hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm">
            <span className="material-symbols-outlined text-4xl text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform">verified_user</span>
            <h4 className="text-xl font-bold mb-2">Trust</h4>
            <p className="text-slate-600 dark:text-slate-400 font-sans">Fostering collaboration through radical transparency.</p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center md:text-left">Our Offerings</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border-t-4 border-[var(--color-accent-red)] flex flex-col">
              <div className="p-8 flex-grow">
                <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] text-xs font-bold uppercase tracking-tighter mb-4">The First 100</div>
                <h3 className="text-2xl font-serif mb-4">A curated group for pioneering individuals.</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  A community today. A trust-based infrastructure for tomorrow. Join the foundational circle that shapes the future of exchange.
                </p>
              </div>
              <div className="px-8 pb-8">
                <Link href="/first-100" className="block text-center w-full py-3 bg-[var(--color-accent-red)] text-white font-bold rounded-lg hover:opacity-90 transition-opacity">Learn More</Link>
              </div>
            </div>

            <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border-t-4 border-[var(--color-accent-sage)] flex flex-col">
              <div className="p-8 flex-grow">
                <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-sage)]/10 text-[var(--color-accent-sage)] text-xs font-bold uppercase tracking-tighter mb-4">The X-Changers</div>
                <h3 className="text-2xl font-serif mb-4">Structural change for agile organisations.</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  A methodology for organisations seeking structural change through trust-oriented collaboration and network dynamics.
                </p>
              </div>
              <div className="px-8 pb-8">
                <Link href="/x-changers" className="block text-center w-full py-3 bg-[var(--color-accent-sage)] text-white font-bold rounded-lg hover:opacity-90 transition-opacity">Discover Methodology</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Vision */}
      <section className="py-32 px-6 text-center bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif italic text-slate-800 dark:text-slate-100 leading-tight">
            &quot;Let&apos;s reshape exchange, restore trust and redefine worth.&quot;
          </h2>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6 bg-white/30 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif">Upcoming Encounters</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 font-sans">Join the next meeting ground.</p>
            </div>
            <a className="text-[var(--color-primary)] font-bold hover:underline" href="https://luma.com/trust-exchange" target="_blank" rel="noopener noreferrer">View All Events</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event: Event) => {
              const dateObj = new Date(event.date);
              const month = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
              const day = dateObj.getDate().toString().padStart(2, '0');

              return (
                <a href={event.link || "#"} target={event.link ? "_blank" : undefined} rel={event.link ? "noopener noreferrer" : undefined} key={event.id} className="group cursor-pointer bg-white/40 dark:bg-slate-800/40 border border-black/10 dark:border-white/10 rounded-xl overflow-hidden hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all shadow-sm hover:shadow-md flex flex-col">
                  <div className="aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-700 relative">
                    {event.featuredImage ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={event.title} src={event.featuredImage} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-700 group-hover:scale-105 transition-transform duration-500">
                        <span className="material-symbols-outlined text-4xl text-slate-400">event</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-center p-2 rounded-lg shadow-sm min-w-[60px]">
                      <span className="block text-[var(--color-primary)] font-black text-xl leading-none">{day}</span>
                      <span className="text-[var(--color-primary)]/70 text-xs font-bold uppercase">{month}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-blue-300 rounded">Encounter</span>
                      <span className="text-xs font-medium flex items-center gap-1 opacity-60">
                        <span className="material-symbols-outlined text-[14px]">{event.type}</span> {event.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--color-primary)] transition-colors leading-snug">{event.title}</h3>
                    <div className="mt-auto pt-2">
                      <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary)] text-white text-sm font-bold rounded-lg group-hover:bg-[var(--color-primary)]/90 transition-colors">
                        {event.label || "View Details"} <span className="material-symbols-outlined text-[16px]">{event.link ? 'open_in_new' : 'arrow_forward'}</span>
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}

            {events.length === 0 && (
              <div className="col-span-1 md:col-span-3 text-center py-8 text-slate-500">More encounters coming soon.</div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
