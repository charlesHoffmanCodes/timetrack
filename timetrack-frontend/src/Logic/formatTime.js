

//Function - formatTime 
//Goal - convert input time in seconds to HH:MM:SS format
//Input - time in seconds (int)
//Output - Array with [HH,MM,SS], all 3 values as strings with zero padding!

const formatTime = (time) => {

    let remainder;

    //Convert time to Hours, Minutes, Seconds
    const display_Hours = Math.floor(time/3600);
    remainder = time % 3600;
    const display_Minutes = Math.floor(remainder / 60);
    remainder = remainder % 60
    const display_Seconds = remainder;

    //Convert numbers -> strings, pad w leading zeroes
    const initialResult = [display_Hours, display_Minutes, display_Seconds];
    const result = initialResult.map((timeValue) => {
        timeValue = timeValue + ''; //Convert to str
        return (timeValue.padStart(2, '0'));  //Pad zeroes if necessary! 
    })

    return result;
}

export default formatTime;

