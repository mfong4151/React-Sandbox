import {useState} from 'react';
import './hooks.css'

const UseStateDemo = ()=>{
    const [count, setCount] = useState(()=>{ return 4}) //passing a callback in to useState ensures it only runs once
    
    const decrimentCount= () =>{ 
        setCount(prevCount => prevCount -1) //passing a callback in prevents overriding of state value

    }

    const incrimentCount= () =>{ 
        setCount(prevCount => prevCount +1) 
        
    }
    return(
    
        <>
        <button onClick={decrimentCount}>-</button>
        <span>{count}</span>
        <button onClick={incrimentCount}>+</button>
        </>
    )

};

export default UseStateDemo;