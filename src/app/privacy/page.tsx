import ReactMarkdown from 'react-markdown';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSettingAction } from '@/app/actions';

export default async function PrivacyPolicy() {
    const policy = await getSettingAction('privacy_policy');

    // Default fallback if nothing has ever been saved and db is empty
    // The explicit newline markers have been updated to actual string newlines to be picked up properly
    const fallback = `## Privacy Policy

Welcome to our Privacy Policy page. We are committed to protecting your personal information and your right to privacy.

### Information We Collect

Currently, we collect basic information that you provide to us when you express an interest in obtaining information about us or our products and Services.

### Future Updates: Google Forms

Please note that in the future, we plan to integrate a Google Form to better collect and manage data. When this feature is rolled out, we will update this policy to reflect exactly how that data is handled and stored securely.

### Contact Us

If you have questions or comments about this notice, you may contact us.`;

    // Replace literal "\\n" with actual newlines in case it was stored with escaped characters 
    const content = (policy || fallback).replace(/\\n/g, '\n');

    return (
        <div className="bg-[var(--color-background-light)] dark:bg-[var(--color-background-dark)] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-24 flex-1 w-full">
                <div className="bg-white/60 dark:bg-slate-900/60 p-10 md:p-16 rounded-3xl border border-black/5 dark:border-white/5 shadow-xl backdrop-blur-sm">
                    <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight 
                        prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[var(--color-primary)]
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:mb-6 prose-p:leading-relaxed prose-p:text-slate-700 dark:prose-p:text-slate-300
                        prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:underline
                        prose-li:my-2
                        ">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
