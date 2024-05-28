import { EmailFilter } from "./EmailFilter.jsx"
import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails }) {

    return (
        <section className="email-list">
            <EmailFilter emails={emails} />
            {emails.map(email =>
                <EmailPreview key={email.id} email={email} />
            )}
        </section>
    )
}