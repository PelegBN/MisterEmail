import { useEffect, useRef } from 'react'

import logoImgUrl from '../assets/imgs/logo_altr.png'

export function Header({ hideHeader, gUser }) {
    const headerRef = useRef(null);

    useEffect(() => {
        if (hideHeader && headerRef.current) {
            headerRef.current.classList.add('hide');
        } else {
            headerRef.current.classList.remove('hide');
        }

    }, [headerRef.current, hideHeader])

    return (
        <section ref={headerRef} className="app-header">
            {/* <section className="container"> */}
                <div className="side-container">
                    <span className='side-nav-toggle'>&#x268E;</span>
                    <h1 className="logo">MisterEmail</h1>
                    {/* <img className="logo" src={logoImgUrl} /> */}
                </div>
                <div className="user-container">
                    {/* <input type="search" placeholder="Search" /> */}
                    <h1>
                        {gUser ? gUser.fullname.split(' ')[0] : 'Guest'}
                        <i className="fa-solid fa-user"></i>
                    </h1>
                </div>
            {/* </section> */}
        </section>
    )
}