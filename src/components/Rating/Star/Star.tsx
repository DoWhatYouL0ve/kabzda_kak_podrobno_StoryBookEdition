import React from "react";

export type StarPropsType = {
    selected: boolean
    setValue: () => void
}

export function Star(props: StarPropsType) {
    return <span onClick={()=>props.setValue()}>{props.selected ? <b>star </b> : 'star '}</span>
}