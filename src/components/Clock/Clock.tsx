import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'analog' | 'digital'
}

export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=>{

        const interval = setInterval(()=>{setDate(new Date())},1000)
        return () => {clearInterval(interval)}
    },[date])


    switch (props.mode) {
        case 'digital':
        default:
            return <DigitalClockView date={date}/>
        case 'analog':
            return <AnalogClockView date={date}/>
    }
}

export type ClockViewPropsType = {
    date: Date
}
