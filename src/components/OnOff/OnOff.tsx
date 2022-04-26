import React from "react";
import style from './OnOff.module.css'

type OnOffPropsType = {
    value: boolean
    setOnOffValue: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    return (
        <div>
            <div className={`${props.value ? style.green : ''} ${style.buttonStyles}`} onClick={()=>props.setOnOffValue(true)}>On</div>
            <div className={`${!props.value ? style.red : ''} ${style.buttonStyles}`} onClick={()=>props.setOnOffValue(false)}>Off</div>
            <div className={`${!props.value ? style.red : style.green} ${style.round}`}></div>
        </div>
    )
}