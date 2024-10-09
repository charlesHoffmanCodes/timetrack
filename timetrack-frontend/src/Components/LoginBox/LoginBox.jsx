import './LoginBox.css'

const LoginBox = () => {
  return (

    <div className='loginDiv'>
        <h4> Login to your account </h4>

            <form action="localhost:3000/user/login" method="post">

                <input className="loginInput" type="email" placeholder="Enter Your Email" required/>


                <input  className="loginInput" type="password" minlength="8" placeholder="Enter Your Password" required/>


                <input className="standardButton" type="submit" value="Sign In"/>

                <a href="/#/user/sign-up">Don't Have an Account? Sign Up Now!</a>
            
            </form>
    </div>
 
    )
}
export default LoginBox;