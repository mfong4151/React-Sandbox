import './UseState.css'
import {useState} from 'react';

const UseState = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme =()=>{
        if (theme === 'light'){
            return 'dark'
        }else return 'light'

    }
    return (
      <div className={theme}>
        <h1>UseState Component</h1>
        <button onClick={()=>{setTheme(toggleTheme())}}>Change</button>
      </div>
    );
  };
  
  export default UseState;