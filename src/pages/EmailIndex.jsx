import { useState, useEffect } from 'react'
import { emailService } from '../services/email.service.js'
import { EmailList } from "../cmp/EmailList.jsx"
import { SideNav } from '../cmp/SideNav.jsx'

export function EmailIndex() {
    const [emails, setEmails] = useState(null)

    useEffect(() => {
        fetchEmails()
    }, []);

    async function fetchEmails() {
        const emails = await emailService.query()
        setEmails(emails)
    }

    return (
        <section className="email-index">
            {
                emails
                    ?
                    <section className="emails-grid-wrapper">
                        <SideNav emails={emails} />
                        <EmailList emails={emails} />
                    </section>
                    :
                    <div className="loader"></div>
            }
        </section>
    )
}