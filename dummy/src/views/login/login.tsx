import "./login.css"
import { useEffect, useState } from "react";
import LoginVerify from "../../components/loginVerify";


const Login = () => {
  const [state, setstate] = useState<any>([])

    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => sessionStorage.setItem("users",JSON.stringify(data)));
    }, [])

    
    

const handleSubmit=(e:any)=>{
    e.preventDefault();
    let name=e.target.email.value;
    let password=e.target.password.value;

    const newData:any=LoginVerify();
    setstate(newData)


    
    
    
}
    

  return (
    <div>
        <div className="logo">A<span>AH</span>D</div>
        <div>
            <div className="form">
                <div className="signIn">
                    Sign In
                </div>
                <form className="formContainer" onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor="email">
                           
                        <input type="text" name="email" id="email" className="input" placeholder=" Email " />
                        </label>
                    </div>
                    <div className="password">
                    <label htmlFor="password">
                            
                        <input type="password" name="password" id="password" className="input" placeholder="password" />
                        </label>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <div className="reg">Don't have account? <a href="#">Sign Up</a></div>
            </div>
        </div>
        {state[0].name}
        {state[0].password}
    </div>
  )
}

export default Login