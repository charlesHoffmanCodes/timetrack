//Timetrack Home page
//Description - website home page with main timer/stopwatch menu

import './Home.css'

//Component Imports!
import Navbar from '../../Components/Navbar/Navbar'
import TrackingMenu from '../../Components/TrackingMenu/TrackingMenu'

const Home = () => {
  return (
    <>
        <Navbar isLinksRendered={true}/>
        <TrackingMenu/>
    </>
  )
}
export default Home;