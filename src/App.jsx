import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { userService } from './services/user.service.js'
import { Header } from './cmp/Header.jsx'
import { Home } from './pages/Home.jsx'
import { EmailIndex } from './pages/EmailIndex.jsx'
import { Footer } from './cmp/Footer.jsx'

export function App() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const connectedUser = userService.getUser()
        if (connectedUser) {
            handleLogin(connectedUser)
        } else {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        if (user) {
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
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home onLogin={handleLogin} />} />
                    <Route path="/mailbox" element={<EmailIndex gUser={user}/>} />
                </Routes>
            </main>
            <Footer />
        </section>
    )
}