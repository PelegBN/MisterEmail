import { useState, useEffect } from 'react'
import { emailService } from '../services/email.service.js'
import { EmailList } from "../cmp/EmailList.jsx"
import { TopNav } from '../cmp/TopNav.jsx'
import { SideNav } from '../cmp/SideNav.jsx'

export function EmailIndex({gUser}) {
    const [user, setUser] = useState(gUser)
    const [emails, setEmails] = useState(null)

    useEffect(() => {
        fetchEmails()
    }, []);

    useEffect(() => {
        setUser(gUser)
    }, [gUser])

    async function fetchEmails() {
        const emails = await emailService.query()
        setEmails(emails)
    }

    return (
        <section className="email-index">
            <TopNav gUser={user} />
            {
                emails
                    ?
                    <section className="emails-section">
                        <SideNav emails={emails} />
                        <EmailList emails={emails} />
                    </section>
                    :
                    <div className="loader"></div>
            }
        </section>
    )
}