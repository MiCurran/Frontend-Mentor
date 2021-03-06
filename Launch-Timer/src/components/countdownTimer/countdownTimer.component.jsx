import React, { useState, useEffect } from 'react';
import './timer.css'
export default function CountdownTimer(){
    // Set the date we're counting down to
const [countdown, setCountdown] = useState({})
const [day, setDay] = useState('days')
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
setCountdown({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
})
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    //do something here when count over
  }
  if (days === 1){
      setDay('day')
  }
}, 1000);
    return(
        <div className="timer">
            <div>
                <div className="timecard">
                    <h2>{countdown.days}</h2>
                </div>
                <p>{day}</p> 
                </div>
            <div>
                <div className="timecard">
                    <h2>{countdown.hours}</h2>
                </div>
                <p>hours</p> 
                </div>
            <div>
                <div className="timecard">
                    <h2>{countdown.minutes}</h2>
                </div>
                <p>minutes</p> 
                </div>
            <div>
                <div className="timecard">
                    <h2>{countdown.seconds}</h2>
                </div>
                <p>seconds</p> 
                </div>

        </div>
        )
}