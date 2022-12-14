import React, {useState} from 'react';
import {FunctionContextComponent} from './useContextFunction'

//https://www.youtube.com/watch?v=5LrDIWkK_Bc



//See use context function for the functional component

export const ThemeContext = React.createContext()

export const UseContextExample =()=>{
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = ()=>{ 
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    
    }
    
    
    return(
        <>
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContextComponent />
        </ThemeContext.Provider>
        </>
    )

}




