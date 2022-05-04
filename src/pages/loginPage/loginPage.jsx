import { useState } from 'react'
import './loginPage.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [btn, setbtn] = useState(true);
  const navigate = useNavigate();

  const logCng = () => {
    let userNam = document.getElementById('usrNam').value
    let passwrd = document.getElementById('pwd').value
    if (userNam == 'abs' && passwrd == 'abs123') {
      setbtn(false)
    }
  }
  const btnLogin = () => {
        navigate('/dashBoard')
  }

  return (
    <div>
      <div className='log_div'>
      <p className='lgn__hdr'>React Redux CRM</p>
      <p className='sub__tl'>Version 2.0.0</p>
      {/* <h1 className='log_head'>Login</h1>    */}
        <input
          id="usrNam"
          placeholder="UserName"
          type="text"
          onChange={logCng}
        ></input>
        <input
          id="pwd"
          placeholder="password"
          type="password"
          onChange={logCng}
        ></input>

        
      <button id="logBtn" to="/dashBoard" disabled={btn} onClick={btnLogin}>
      Login
      </button>
      </div>
    </div>
  )
}

export default Login
