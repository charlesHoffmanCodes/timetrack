//Navbar Component
//Description - Navbar at top of screen, with Logo and Directory to other pages

//Imports
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const {isLinksRendered} = props;

  return (
      
    <header className="Navbar flexbox_Horizontal">
      <div>
        <h1>timetrack</h1>
      </div>
      { isLinksRendered &&
      <div>
          {/* Links to Settings + Login Pages */}
          <Link to={'/user/login'}>Login</Link>
          <Link to={'/user/login'}>Settings </Link>  {/*Update Link */} 
      </div>
      } 
    </header>

  )
}
export default Navbar