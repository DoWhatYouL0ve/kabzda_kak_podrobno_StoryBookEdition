import React, {useEffect, useState} from "react";

type PropsType = {

}

export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=>{

        const interval = setInterval(()=>{setDate(new Date())},1000)
        return () => {clearInterval(interval)}
    },[date])

    const correctTimeView = (time: number) => {
        return time < 10 ? '0' + time : time
    }

    return <>
        <span>{correctTimeView(date.getHours())}</span> :
        <span>{correctTimeView(date.getMinutes())}</span> :
        <span>{correctTimeView(date.getSeconds())}</span>
    </>
}