import { useState } from 'react';
import './login.css';


const Login = (props) => {
    const [user, setUser] = useState({ email: '', password: '' });

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (user.email && user.password) return console.log(user);  // Return the User Login Credentials
        else return;
    }

    const onChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <div className='lgn__bg'>
            <form onSubmit={formSubmitHandler}>
                <div className='lgn__frm'>
                    <p className='lgn__hdr'>React Redux CRM</p>
                    <p className='sub__tl'>Version 2.0.0</p>
                    <input className='lgn__in-fld' name='email' onChange={onChangeHandler} value={user.email} placeholder='Email Id' type='email' />
                    <input className='lgn__in-fld' minLength={3} name='password' onChange={onChangeHandler} value={user.password} placeholder='Password' type='password' />
                    
                    <button className='lgn__btn' type='submit'> SIGNIN</button>
                   
                </div>
            </form>
        </div>
    )
}

export default Login;