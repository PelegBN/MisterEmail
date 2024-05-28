import { useState } from "react"

export function EmailFilter({ emails }) {
    const [results, seResults] = useState(100)

    return (
        <section className="email-filter">
            <section className="custom-filters">
                Filters here
            </section>
            <input type="search" placeholder="Search" />
            <section className="page-filter">
                {emails.length}-{results} of {emails.length} &#10602; &#10605;
            </section>
        </section>
    )
}