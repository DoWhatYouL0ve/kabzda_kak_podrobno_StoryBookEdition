import React, {useState} from "react";
import style from './OnOff.module.css'

type UncontrolledOnOffPropsType = {
    defaultMode?: boolean
    setOnOffValue?: ()=> void
}

export const UncontrolledOnOff: React.FC<UncontrolledOnOffPropsType> = ({defaultMode}) => {

    const [state, setState] = useState<boolean>(defaultMode ? defaultMode : false)


    return (
        <div>
            <div className={`${state ? style.green : ''} ${style.buttonStyles}`} onClick={()=>setState(true)}>On</div>
            <div className={`${!state ? style.red : ''} ${style.buttonStyles}`} onClick={()=>setState(false)}>Off</div>
            <div className={`${!state ? style.red : style.green} ${style.round}`}></div>
        </div>
    )
}