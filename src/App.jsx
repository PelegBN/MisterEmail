import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { userService } from './services/user.service.js'
import { Header } from './cmp/Header.jsx'
import { Home } from './pages/Home.jsx'
import { EmailIndex } from './pages/EmailIndex.jsx'
import { Footer } from './cmp/Footer.jsx'

export function App() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [hideHeader, setHideHeader] = useState(false)
    const headerRef = useRef(null)

    useEffect(() => {
        const connectedUser = userService.getUser()
        if (connectedUser) {
            handleLogin(connectedUser)
        } else {
            setHideHeader(true)
            navigate('/')
        }
    }, [])

    useEffect(() => {
        if (user) {
            setHideHeader(false)
            navigate('/mailbox')
        } else {
            navigate('/')
        }
    }, [user])

    function handleLogin(loginUser) {
        setUser(loginUser)
    }

    return (
        <section className='app'>
            <Header hideHeader={hideHeader} gUser={user} />
            <main>
                <Routes>
                    <Route path="/" element={<Home headerRef={headerRef} onLogin={handleLogin} />} />
                    <Route path="/mailbox" element={<EmailIndex gUser={user}/>} />
                </Routes>
            </main>
            <Footer />
        </section>
    )
}