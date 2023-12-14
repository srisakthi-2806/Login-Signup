import React,{ useState }from "react"
import './LoginPage.css';

const LoginPage = () => {

  const[action,setAction]= useState("Sign Up");

  return (
     <div className="insert_image">
     
    <div className="box">
    <div className='container'>

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

{action==="Login" ? <div></div> :<div className="input">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/276/776/small/logo-icon-person-on-white-background-free-vector.jpg" alt=""></img>
          <input type="text" placeholder=" Name"></input>
        </div> }

        

        <div className="input">
          <img src="https://www.iconbolt.com/preview/twitter/social-media-logos/email-gmail-logo-mail-social-social-media.svg" alt=""></img>
          <input type="email" placeholder=" Email Id" required></input>
        </div>

        <div className="input">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSH133tT130yQicUJiiBZrzYPtNYGG0dlw9NSfwAwMDyjmYRF9OwfMHcWmaKpOLxj6vg&usqp=CAU" alt=""></img>
          <input type="password" placeholder=" Password"></input>
        </div>

        {action==="Login" ? <div></div> :<div className="input">
          <img src="https://icons.veryicon.com/png/o/commerce-shopping/electricity-supplier-h5/confirm-password.png" alt=""></img>
          <input type="password" placeholder="Confirm Password"></input>
        </div>}
       
 {action==="Sign Up" ? <div></div> :  <div className="forgot-password">Forgot Password?<span>Click Here</span></div>}
 {action==="Sign Up" ? <div></div> : <div className="footer2" onClick={()=>{setAction("Sign Up")}}>Dont't you have an account?<span>SignUp </span> </div>}
 

 
 
 {action==="Login" ? <div></div> :  <div className="footer">
  
  <p onClick={()=>{setAction("Login")}}>Already have an account?<span> Login</span></p>
  
</div>}
   {action==="Sign Up" ? <div className="submit-container">
  <p onClick={()=>{setAction("Sign Up")}}>Sign Up</p></div> : <div></div>}

  {action==="Login" ? <div className="submit-container2">
  <p onClick={()=>{setAction("Login")}}>Login</p></div> : <div></div>}





      </div>
      </div>
    </div>
    </div>
  )
}

export default LoginPage