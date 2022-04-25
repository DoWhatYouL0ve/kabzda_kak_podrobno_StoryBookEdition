import React from "react";
import {AccordionBody} from "./AccordionBody";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    collapsedStateChanger: () => void

}

export function Accordion(props:AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.title} collapsedStateChanger={()=>props.collapsedStateChanger()}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitleType = {
    title: string
    collapsedStateChanger: () => void
}

export function AccordionTitle(props:AccordionTitleType) {
    return(
        <div>
            <h3 onClick={props.collapsedStateChanger}>{props.title}</h3>
        </div>
    )
}