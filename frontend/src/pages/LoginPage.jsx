import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

import "../styles/LoginPage.scss"

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div id='login'>
            <Link id="register" to='/register'>Register</Link>
            <form onSubmit={loginUser}>
                <h2>Login</h2>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage