import './css/Register8.css'
import { useState } from "react"
import { useUser } from "../hooks/UserContext"
import { useHistory } from "react-router"
import { r_login, r_signup } from '../routes'

function Register8({url}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useUser()
    const history = useHistory()


    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch(url+'signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + user.token
          }
        })
        const data = await res.json()
        // history.push('/character/' + data.id)
        history.push(r_login)
    }

    return (
        <form className='fr' onSubmit={handleSubmit}>
            <label>
                Username:
                <input required value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input required value={password} onChange={e => setPassword(e.target.value)} type="password" />
            </label>
            <button>Register</button>
            {error &&
                <p className="error">{error}</p>
            }
        </form>
    );
}

export default Register8