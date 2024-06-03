import React, { useEffect, useRef } from "react";
import { EmailFilter } from "./EmailFilter.jsx"
import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails }) {
    const emailListRef = useRef();

    useEffect(() => {
        const items = emailListRef.current.querySelectorAll('.email-preview');

        const handleMouseEnter = (event) => {
            const expandedHeight = 75;
            const totalHeight = emailListRef.current.clientHeight;
            const otherHeight = (totalHeight - expandedHeight) / (items.length - 1);

            items.forEach(item => {
                if (item === event.currentTarget) {
                    item.style.height = `${expandedHeight}px`;
                } else {
                    item.style.height = `${otherHeight}px`;
                }
            });
        };

        const handleMouseLeave = () => {
            items.forEach(item => {
                item.style.height = '';
            });
        };

        items.forEach(item => {
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            items.forEach(item => {
                item.removeEventListener('mouseenter', handleMouseEnter);
                item.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [emails]);

    return (
        <section className="email-list">
            <section className="email-list-wrappers">
                <EmailFilter emails={emails} />
            </section>
            <section className="email-list-container" ref={emailListRef}>
                {
                    emails.map(email =>
                        <section key={email.id} className="preview-grid">
                            <EmailPreview email={email} />
                        </section>)
                }
            </section>
            <section className="email-list-wrappers">
                <section className="bottom-wrapper"></section>
            </section>
        </section>
    )
}