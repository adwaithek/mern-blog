import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

function LoginPage() {
const navigate=useNavigate()
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const {setUserInfo}=useContext(UserContext)

async function login(e){
    e.preventDefault();
  const res=await fetch('http://localhost:4000/login',{
        method:'POST',
        body:JSON.stringify({username,password}),
        headers:{'Content-Type':'application/json'},
        credentials:'include'
    });
    if(res.ok){
        res.json().then(userInfo=>{
setUserInfo(userInfo);
navigate('/')
        })
    
    }else{  
        alert('wrong credentials')
    }


}

  return (
    <form  className="login"  onSubmit={login}>
    <h1>Login</h1>
    <input type="text" placeholder='Username'  value={username} onChange={e=>setUsername(e.target.value)} />
    <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
    <button type='submit' >Login </button>
   </form>
  )
}

export default LoginPage