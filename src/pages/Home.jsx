// import { useState, useEffect } from 'react'
// import { emailService } from '../services/email.service.js'
import { SideNav } from './cmp/SideNav.jsx'
import { EmailIndex } from './cmp/EmailIndex.jsx'

export function Home({emails}) {
    // const [emails, setEmails] = useState(null)
    // useEffect(() => {
    //     console.log('use effect out')
    //     async function fetchEmails() {
    //         console.log('use effect in')
    //         const emails = await emailService.query()
    //         setEmails(emails)
    //     }
    //     fetchEmails()
    // }, [])

    return (
        <section className="home">
            <SideNav emails={emails} />
            <EmailIndex emails={emails} />
        </section>
    )
}
