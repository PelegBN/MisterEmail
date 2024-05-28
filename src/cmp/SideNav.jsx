import { useState, useEffect } from 'react'

export function SideNav({ emails }) {
    const [unread, setUnread] = useState(0)
    const [starred, setStarred] = useState(0)

    useEffect(() => {
        const unreadCount = emails.reduce((count, email) => email.isRead === false ? count + 1 : count, 0)
        const starredCount = emails.reduce((count, email) => email.isStarred ? count + 1 : count, 0)
        setUnread(unreadCount)
        setStarred(starredCount)
    }, [emails]);

    return (
        <section className="side-nav">
            <button className="compose-btn">Compose</button>
            <ul className="side-menu">
                <li><i className="fa-solid fa-envelope"></i> Inbox ({unread})</li>
                <li><i className="fa-solid fa-star"></i> Starred ({starred})</li>
                <li><i className="fa-solid fa-square-arrow-up-right"></i> Sent</li>
            </ul>
        </section>
    )
}