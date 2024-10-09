import './SignUpBox.css'


const SignUpBox = () => {
  return (
    <div className="loginDiv">
        <h4> Create your account </h4>
        <form action="localhost:3000/user/register" method="post">
            <input class="loginInput" type="email" placeholder="Enter Your Email" required/>
            <input class="loginInput" type="password" minlength="8" placeholder="Create Your Password" required/>
            <input id='SUButton' className='standardButton' type="submit" value="Create your Account!"/>
            <a href="/#/user/login">Already have an account? Sign in!</a>
        </form>
    </div>

  )
}
export default SignUpBox