import './SignUp.css'
import SignUpBox from '../../Components/SignUpBox/SignUpBox'
import Navbar from '../../Components/Navbar/Navbar'

const SignUp = () => {
  return (

    <div>
      <Navbar isLinksRendered={false}/>
      <SignUpBox/>
    </div>

  )
}
export default SignUp