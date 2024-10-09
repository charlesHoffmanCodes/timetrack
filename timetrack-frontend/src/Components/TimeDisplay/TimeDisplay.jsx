//Imports 
import './TimeDisplay.css'

//NOTE - props will have properties: hours, minutes, seconds (all Strings!)
const TimeDisplay = (props) => {

    const {hours, minutes, seconds} = props;
    return (
        <div className='timeDisplay'>
            <h2><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></h2>
        </div>
    )
    }
    export default TimeDisplay;
