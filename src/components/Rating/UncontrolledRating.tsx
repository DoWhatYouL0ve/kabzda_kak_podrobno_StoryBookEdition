import React, {useState} from "react";
import {Star} from "./Star/Star";

type UncontrolledRatingPropsType = {
    defaultValue?: 0|1|2|3|4|5
    onChange: (value: 0|1|2|3|4|5)=>void
}

export const UncontrolledRating: React.FC<UncontrolledRatingPropsType> = ({defaultValue, onChange}) =>{

    const [value, setValue] = useState<0|1|2|3|4|5>(defaultValue ? defaultValue : 0)


    return(
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1); onChange(0)}}/>
            <Star selected={value > 1} setValue={()=>{setValue(2); onChange(0)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3); onChange(0)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4); onChange(0)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5); onChange(0)}}/>
        </div>
    )
}

