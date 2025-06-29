import React from "react";
import { useState,useEffect } from "react";

function Message({canShow,mess}){
    const [show,getmess] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            getmess(false);
        }, 5000);
        return () => clearTimeout(timer); // cleanup
    }, []);
    return(
        <div>
            {show && <h1 id="message">{mess}</h1>}
            
        </div>
    )
}

export default Message