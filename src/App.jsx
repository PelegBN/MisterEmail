import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { userService } from './services/user.service.js'
import { emailService } from './services/email.service.js'
import { Home } from './pages/Home.jsx'

import logoImgUrl from './assets/imgs/logo_altr.png'

export function App() {
    const [user, setUser] = useState(null)
    const [emails, setEmails] = useState(null)

    useEffect(() => {
        const user = userService.getUser()
        setUser(user)

        async function fetchEmails() {
            console.log('use effect in')
            const emails = await emailService.query()
            setEmails(emails)
        }

        fetchEmails()
    }, []);

    console.log(emails)

    return (
        <Router>
            <section className='main-app'>
                <header className="app-header">
                    <section className="container">
                        <div className="side-container">
                            <span><i className="fa-solid fa-bars"></i></span>
                            <h1 className="logo">MisterEmail</h1>
                            {/* <img className="logo" src={logoImgUrl} /> */}
                        </div>
                        <div className="user-container">
                            <input type="search" placeholder="Search" />
                            {/* <div> */}
                            <h1>
                                {user ? user.fullname.split(' ')[0] : 'Guest'}
                                <i className="fa-solid fa-user"></i>
                            </h1>
                            {/* </div> */}
                        </div>
                    </section>
                </header>

                <main className="container">
                    {/* <Home /> */}

                    <Routes>
                        <Route path="/" element={<Home emails={emails} />} />
                    </Routes>
                </main>

                <footer>
                    <section className="container">
                        robotRights 2023 &copy;
                    </section>
                </footer>
            </section>
        </Router>
    )
}

