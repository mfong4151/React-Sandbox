import {useState, useEffect} from 'react';
import './hooks.css'

//Interactive demo from webDevSimplified https://youtu.be/O6P86uwfdR0

const UseStateDemo2 = ()=>{
    const [count, setCount] = useState('') //passing a callback in to useState ensures it only runs once
    
    const toggleDeez= () =>{ 
        if (count === '') setCount('MOUNTING DEEZ NUTS ON YOUR FACE')
        else setCount('')

    }

  
    return(
    
        <>
            <h1>This is a useMount Demo</h1>
            <button onClick={toggleDeez}>-</button>

            <span>{count}</span>
        </>
    )

};

export default UseStateDemo2;