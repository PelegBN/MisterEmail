import { useState, useEffect } from 'react'

export function EmailPreview({ email }) {
    const [isRead, setIsRead] = useState(email.isRead)
    const [isStarred, setIsStarred] = useState(email.isStarred)
    const [date, setDate] = useState(null)

    useEffect(() => {
        // Stuff happens based on the states of isRead, isStarred
        const emailDate = new Date(email.sentAt)
        const now = new Date()
        if (isToday(emailDate, now)) {
            const time = showTime(emailDate)
            setDate(time)
        } else {
            const formattedDate = showDate(emailDate)
            setDate(formattedDate)
        }

    }, [isRead, isStarred, date])

    function showTime(emailDate) {
        const hour = emailDate.getHours()
        const minutes = emailDate.getMinutes()
        return `${hour} : ${minutes}`
    }

    function showDate(formattedDate) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const month = months[formattedDate.getMonth()]
        const day = formattedDate.getDate()
        return `${month} ${day}`
    }

    function isToday(date, today) {
        return date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
    }

    return (
        <section id={email.id} className="email-preview">
            <label className="cb-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>

            <label className="cb-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <span className='from'>{email.from}</span>
            <span className='content'>
                <span className='subject'>{email.subject}</span>
                <span className='body'>{email.body}</span>
            </span>
            <span className='date'>{date}</span>
        </section>
    )
}