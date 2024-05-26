import { EmailList } from "./EmailList.jsx"

export function EmailIndex({emails}) {
    // console.log(emails)

    return (
        <section className="email-index">
            <section className="filters">Filters here</section>
            <EmailList emails={emails} />
        </section>
    )
}