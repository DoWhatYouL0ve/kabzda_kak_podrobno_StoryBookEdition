import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type UncontrolledAccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [state, setState] = useState(true)

    const changeState = () => {
        setState(!state)
    }
    return (
        <div>
            <AccordionTitle title={props.title} onClickHandler={changeState}/>
            {!state && <AccordionBody/>}
        </div>
    )
}