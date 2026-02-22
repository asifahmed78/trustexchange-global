import { getSettingAction, updateSettingAction } from '@/app/actions';

export default async function AdminPrivacy() {
    // Get existing privacy policy, or default to a template mentioning the future Google Form
    let currentPolicy = await getSettingAction('privacy_policy');

    // Replace literal slashes from bug in earlier version
    if (currentPolicy) {
        currentPolicy = currentPolicy.replace(/\\n/g, '\n');
    }

    const defaultPolicy = `## Privacy Policy\n\nWelcome to our Privacy Policy page. We are committed to protecting your personal information and your right to privacy.\n\n### Information We Collect\n\nCurrently, we collect basic information that you provide to us when you express an interest in obtaining information about us or our products and Services.\n\n### Future Updates: Google Forms\n\nPlease note that in the future, we plan to integrate a Google Form to better collect and manage data. When this feature is rolled out, we will update this policy to reflect exactly how that data is handled and stored securely.\n\n### Contact Us\n\nIf you have questions or comments about this notice, you may contact us.`;

    const policyText = currentPolicy || defaultPolicy;

    async function handleUpdate(formData: FormData) {
        'use server';
        const content = formData.get('content') as string;
        await updateSettingAction('privacy_policy', content);
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-extrabold tracking-tight">Manage Privacy Policy</h1>
            <p className="text-slate-500">Update the content for the public Privacy Policy page using Markdown.</p>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <form action={handleUpdate} className="space-y-4">
                    <div>
                        <label htmlFor="content" className="block text-sm font-bold mb-2">Privacy Policy Content (Markdown Supported)</label>
                        <textarea
                            id="content"
                            name="content"
                            defaultValue={policyText}
                            rows={15}
                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all resize-y font-mono text-sm"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--color-primary)]/90 transition-colors shadow-sm active:scale-[0.98]">
                        Save Privacy Policy
                    </button>
                </form>
            </div>
        </div>
    );
}
