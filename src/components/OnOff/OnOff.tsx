import React, {useState} from "react";
import style from './OnOff.module.css'


export const OnOff = () => {

    const [state, setState] = useState(true)


    return (
        <div>
            <div className={`${state ? style.green : ''} ${style.buttonStyles}`} onClick={()=>setState(true)}>On</div>
            <div className={`${!state ? style.red : ''} ${style.buttonStyles}`} onClick={()=>setState(false)}>Off</div>
            <div className={`${!state ? style.red : style.green} ${style.round}`}></div>
        </div>
    )
}