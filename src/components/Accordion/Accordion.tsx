import React from "react";
import {AccordionBody} from "./AccordionBody";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    /**
     * Just a simple example of commentary in types for storybook
     * */
    collapsedStateChanger: () => void
    /**
     * color for text of the title
     * */
    color?: string

}

export function Accordion(props:AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.title} collapsedStateChanger={()=>props.collapsedStateChanger()} color={props.color}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitleType = {
    title: string
    collapsedStateChanger: () => void
    color?: string
}

export function AccordionTitle(props:AccordionTitleType) {
    return(
        <div>
            <h3 onClick={props.collapsedStateChanger} style={{color: props.color ? props.color : 'green'}}>{props.title}</h3>
        </div>
    )
}