import React, {useState, useEffect} from 'react'

const Timer = (props) => {

    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(1);
  
    useEffect(() => {
        if (props.typingAction === true) {
            const interval = setInterval(() => {
              setSeconds(seconds => seconds - 1);
            }, 1000)
            return () => clearInterval(interval)
          }
      
      });
    
    let initialSeconds = '00'
    let initialMinute = '1'

    return (
        <div>
            {props.typingAction ? '0' : initialMinute}:{props.typingAction ? seconds : initialSeconds}
        </div>
    )
}

export default Timer
