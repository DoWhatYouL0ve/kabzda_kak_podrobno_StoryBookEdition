import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const correctTimeView = (time: number) => {
        return time < 10 ? '0' + time : time
    }
    return <>
        <div>
            <span>{correctTimeView(date.getHours())}</span> :
            <span>{correctTimeView(date.getMinutes())}</span> :
            <span>{correctTimeView(date.getSeconds())}</span>
        </div>
    </>
}