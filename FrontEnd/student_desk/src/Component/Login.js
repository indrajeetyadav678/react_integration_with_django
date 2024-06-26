import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { login_user } from "../RegisterSlice"


const Login = () => {
    const val = useSelector(state => state.Regist.user_datalist)
    const dispatch = useDispatch()
    console.log("--------------->",val)
    const [input, setInput] = useState({})
    const inputhandle = (e) => {
        let name = e.target.name
        console.log(name)
        let value = e.target.value
        console.log(value)
        setInput((item) => ({ ...item, [name]: value }))
    }

    const submithandle = () => {
         console.log(input.email,"==========================")
          let  user = val.find(key=>key.Email===input.email)
            console.log("useremail---->",user)
          let  pass = val.find(key=>key.Password===input.password)
            console.log("userpassword------->",pass)
        if(user && pass){
            console.log("Login successfully")
            alert("Login successfully")
            alert("Welcome to"+input.email)
            dispatch(login_user(input))
        }
        else{
            alert("user id does not exist")
        }
    }


    return (
        <>
            <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "400px", height: "auto", padding: "25px", border: "1px solid black" }} >
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                    <input type="email" name="email" value={input.emai} onChange={inputhandle} placeholder="Enter Email"
                        style={{ width: "350px", height: "35px", paddingLeft: "15px" }} /><br /><br />
                    <input type="password" name="password" value={input.password} onChange={inputhandle} placeholder="Enter Password"
                        style={{ width: "350px", height: "35px", paddingLeft: "15px" }} /><br /><br />
                    <button onClick={submithandle}>Login</button>
                </div>
            </div>
        </>
    );
}
export default Login;