import './css/Login8.css'
import { useState } from "react"
import { useUser } from "../hooks/UserContext"


function Login8({url}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useUser()

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        //if already is logged
        const res = await fetch(url+'login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + user.token
            }
        })
        const data = await res.json()
        setLoading(false)
        if (res.ok) {
            setUser(data)
        } else {
            setError(data.error)
        }
    }

    return (
        <form className='fl' onSubmit={handleSubmit}>
            <label>
                Username:
                <input required value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input required value={password} onChange={e => setPassword(e.target.value)} type="password" />
            </label>
            <button>Log In</button>
            {error &&
                <p className="error">{error}</p>
            }
        </form>
    );
}

export default Login8