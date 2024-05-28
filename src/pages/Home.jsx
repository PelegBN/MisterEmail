import { useState } from 'react'
import { userService } from '../services/user.service.js'

export function Home({ onLogin }) {
    const [formData, setFormData] = useState({
        email: null,
        password: null
    })
    const [error, setError] = useState(null)

    function handleChange({ target }) {
        const { name, value } = target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function validateUser(ev) {
        ev.preventDefault()
        setError(null)
        const { email, password } = formData
        if (userService.validateUser(email, password)) {
            const demoUser = userService.setDemoUser()
            onLogin(demoUser.data)
        } else {
            setError("No such user in the system. Try again.")
        }
    }

    return (
        <section className="home">
            <form onSubmit={validateUser}>
                <h2>Welcome to</h2>
                <h1>MisterEmail</h1>
                <input type="email" name="email" placeholder='Enter Email' onChange={handleChange} />
                <input type="password" name="password" placeholder='Enter Password' onChange={handleChange} />
                <button type="submit" className='login-btn'></button>
                { error && <span className="error">{error}</span> }
            </form>
        </section>
    )
}
