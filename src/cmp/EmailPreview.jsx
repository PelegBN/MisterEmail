import { useState, useEffect } from 'react'
import { emailService } from '../services/email.service.js'

export function EmailPreview({ email }) {
    const [isFullDate, setIsFullDate] = useState(false)
    const formattetdDate = emailService.getFormattedtime(email.sentAt)

    useEffect(() => {
        setIsFullDate(isFullDateFormat())
    }, [formattetdDate])


    function isFullDateFormat() {
        // Regular expression to match the date format DD.MM.YYYY
        const regex = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;
        // Check if the dateStr matches the regular expression
        return regex.test(formattetdDate);
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
            <span className={isFullDate ? 'date full' : 'date'}>{formattetdDate}</span>
        </section>
    )
}