import logoImgUrl from '../assets/imgs/logo_altr.png'

export function TopNav({ gUser }) {
    return (
        <section className="top-nav">
            <section className="container">
                <div className="side-container">
                    <span className='side-nav-toggle'>&#x268E;</span>
                    <h1 className="logo">MisterEmail</h1>
                    {/* <img className="logo" src={logoImgUrl} /> */}
                </div>
                <div className="user-container">
                    {/* <input type="search" placeholder="Search" /> */}
                    {/* <div> */}
                    <h1>
                        {gUser ? gUser.fullname.split(' ')[0] : 'Guest'}
                        <i className="fa-solid fa-user"></i>
                    </h1>
                    {/* </div> */}
                </div>
            </section>
        </section>
    )
}