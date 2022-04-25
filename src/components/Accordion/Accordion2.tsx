import {AccordionTitle} from "./Accordion";
import {AccordionBody} from "./AccordionBody";
import React from "react";
import {AccordionPropsType} from "./Accordion";

export function Accordion2(props:AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.title} collapsedStateChanger={props.collapsedStateChanger}/>
                {props.collapsed && <AccordionBody/>}
            </div>
        )
}