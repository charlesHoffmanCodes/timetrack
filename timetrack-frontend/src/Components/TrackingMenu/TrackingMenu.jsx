import './TrackingMenu.css';
import formatTime from '../../Logic/formatTime';
import { useState, useRef } from 'react';
import TimeDisplay from '../TimeDisplay/TimeDisplay';



const TrackingMenu = () => {

    
    //Mode State Variable - tracks wheter application is in 'Stopwatch' or 'Timer' Mode
    const [mode, setMode] = useState('Stopwatch');  
    const workTime = useRef(0); //Stores total daily workTime
    const timerDefault = useRef(1800);
    const timerTime = useRef(0); //Stores remaining time on timer
    const interval = useRef(null); //Stores Intervals
    const [isRunning, setIsRunning] = useState(false);  //tracks if stopwatch running! 
    const [displayedTime, setDisplayedTime] = useState(['00','00','00']); // array storing ['HH', 'MM', 'SS']

    //Event Handlers

    const handleModeSwitch = (e) => {
        if (mode === 'Stopwatch') {
            //Check if button clicked was stopwatch (In that case, no need to switch!)
            if ((e.target.name) === 'Stopwatch') {
                return;
            }
            //Otherwise - update mode !
            if (isRunning === true) {
                //If stopwatch runnin on mode switch, stop stopwatch!
                clearInterval(interval.current);
                setIsRunning(false);
            }
            timerTime.current = timerDefault.current;   //Set timer to default length
            setDisplayedTime(formatTime(timerTime.current)); //Display timer time 
            setMode('Timer'); //RE-RENDER
        }
        else if (mode === 'Timer') {
            //Check if button clicked was Timer (In that case, no need to switch!)
            if ((e.target.name) === 'Timer') {
                return;
            }
            //Otherwise - update mode !

            if (isRunning === true) {
                //If stopwatch runnin on mode switch, stop stopwatch!
                clearInterval(interval.current);
                setIsRunning(false);
            }
            setDisplayedTime(formatTime(workTime.current));
            setMode('Stopwatch'); //RE-RENDER
        }
    }

    const handleStart = () => {
        setIsRunning(true); //isRunning => true
        console.log('Starting!');
        
        //If mode = stopwatch -> Start Stopwatch
        if (mode === 'Stopwatch') {
            interval.current = setInterval(updateStopwatch, 1000);
        }
        else if (mode === 'Timer') {
            interval.current = setInterval(updateTimer, 1000);
        }

    }

    const handleStop = () => {
        setIsRunning(false); //isRunning => false
        console.log('Stopping!');

        //Clear interval  - stop stopwatch or timer
        clearInterval(interval.current);
        
    }
    
    const updateStopwatch = () => {

        //Increments workTime by 1 second, and displays new workTime and triggers re-render

        workTime.current = workTime.current + 1; //Increment workTime (by 1 second)

        //formatTime - converts seconds to ['HH', 'MM', 'SS]
        const timeArray = (formatTime(workTime.current));
        console.log(timeArray);

        setDisplayedTime(timeArray); //Update displayed Time w current workTime, re-render!
    }
    const updateTimer = () => {

        //Decrement remaining time on timer (timerTime) by 1 second ()

        timerTime.current = timerTime.current - 1; //Increment workTime (by 1 second)

        //formatTime - converts seconds to ['HH', 'MM', 'SS]
        const timeArray = (formatTime(timerTime.current));
        console.log(timeArray);

        setDisplayedTime(timeArray); //Update displayed Time w remaining time, re-render!
    }

    const handleReset = () => {
        //IF timer running - clear Interval (stop timer) 
        if (isRunning === true) {
            clearInterval(interval.current);
            setIsRunning(false);
        }
        //Set timer time to default, and update time displau
        timerTime.current = timerDefault.current;
        setDisplayedTime(formatTime(timerTime.current));
    }



    return (
        <div>
            {/* Mode Selector */}
            <div id="ModeSelector" className="flexbox_Horizontal">
                <button name='Stopwatch' onClick={handleModeSwitch}>Stopwatch</button>
                <button name='timer' onClick={handleModeSwitch}>Timer</button>  
            </div>

            {/* Time Display */}
            <div className='time'>
                <TimeDisplay hours={displayedTime[0]} minutes={displayedTime[1]} seconds={displayedTime[2]}/>
            </div>


            {/* Stop, Start, Reset Buttons */}
            <div className='SSRMenu'>

                {/* Stop/Start Button */}
                <div>
                    <button className='standardButton'
                    onClick={isRunning? () => {handleStop()} : () => {handleStart()}}>  {/* Call handle function based on isRunning */}
                    {isRunning ? 'Stop' : 'Start'}   {/* Display Start or Stop on isRunnig */}
                    </button>
                </div>

                {/* Reset Button - Render if mode = Timer*/}
                {(mode === 'Timer') && 
                    <button id='resetButton' className='standardButton'
                    onClick={handleReset}
                    >Reset</button>}
                

            </div>
            
        </div>
    );






}
export default TrackingMenu