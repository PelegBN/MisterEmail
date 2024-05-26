export function SideNav({emails}) {
    return (
        <section className="side-nav">
            {/* <h1>Side Nav</h1> */}
            <button className="compose-btn">Compose</button>
            <h4>Inbox</h4>
            <h4>Sent</h4>
            <h4>Stared</h4>
        </section>
    )
}