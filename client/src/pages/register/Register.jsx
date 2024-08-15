import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error, setError] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);

    try{
      const res = await axios.post("/auth/register",{
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");
      
    }catch(err){
      setError(true);
    }

    
    
  }

  return (
    <div className="register">
        <span className="registerTitle">
            Register
        </span>
        <form action="" className="registerForm"onSubmit={handleSubmit} >
            <label>UserName</label>
            <input type="text" placeholder="Enter your Username" className="registerInput" onChange={e=>setUsername(e.target.value)} />
            <label>Email</label>
            <input type="text" placeholder="Enter your email" className="registerInput" onChange={e=>setEmail(e.target.value)} /> 
            <label >Password</label>
            <input type="password" placeholder="Enter your Password" className="registerInput" onChange={e=>setPassword(e.target.value)} />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton" type="submit">
          <Link to="/login" className="link">Login</Link>
        </button>
        <span style={{color:"red"}}>
          {error && "Something went wrong!"}
        </span>
    </div>
  )
}
