import {useEffect, useState} from 'react';
import './hooks.css'

const UseEffectDemo1 = ()=>{
    
    const[resourceType, setResourceType] = useState('posts');


//    //general example
//    useEffect(()=>{
//        console.log('render') //this only runs when the thing in the bottom changes
//    }, [resourceType]) //Use effect takes two arguments, 
//                        //to make sure it never changes leave the array empty
//

    useEffect(()=> {

    }, resourceType)

    return(
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>

            </div>
            <h1>{resourceType}</h1>
        </>

    )

};

const UseEffectDemo2 = ()=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = ()=>{ 
        setWindowWidth(window.innerWidth)
    }

    //What does useEffect do? 
    //By using this Hook, you tell React that your component needs to do something after render. 
    //React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. //In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

    useEffect(()=>{
        window.addEventListener('resize', handleResize)

        return() => {   //adding a removeEventListener prevents multiple event listeners from being added
            window.removeEventListener('resize', handleResize)  
        }
    }, [])

    return(
        <div>{windowWidth}</div>

    )


}

export {UseEffectDemo1, UseEffectDemo2};