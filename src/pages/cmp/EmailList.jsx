import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails }) {

    return (
        <section className="email-list">
            { emails ? emails.map(email => 
                <EmailPreview key={email.id} email={email} />
            ) : <div>Loading...</div>}
        </section>
    )
}