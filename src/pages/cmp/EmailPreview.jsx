import { useState, useEffect } from 'react'

export function EmailPreview({email}) {
    const [isRead, setIsRead] = useState(email.isRead)
    const [isStarred, setIsStarred] = useState(email.isStarred)

    useEffect(() => {
        // Stuff happens based on the states of isRead & isStarred
    }, [isRead, isStarred]);

    return (
        <section className="email-preview">
            <span>Radio</span>
            <span>Star</span>
            <h4>{email.from}</h4>
            <h4>{email.subject}</h4>
            <h4>{email.body}</h4>
            <h4>{email.sentAt}</h4>
        </section>
    )
}