import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {ItemType} from "../../App";

export type UncontrolledAccordionPropsType = {
    title: string
    items: ItemType[]
    onClickHandler: (value: any) => void
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [state, setState] = useState(true)

    const changeState = () => {
        setState(!state)
    }
    return (
        <div>
            <AccordionTitle title={props.title} onClickHandler={changeState}/>
            {!state && <AccordionBody items={props.items} onClickHandler={props.onClickHandler}/>}
        </div>
    )
}