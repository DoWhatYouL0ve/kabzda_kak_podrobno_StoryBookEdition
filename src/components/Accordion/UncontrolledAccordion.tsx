import React, {useReducer, useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {ItemType} from "../../App";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export type UncontrolledAccordionPropsType = {
    title: string
    items: ItemType[]
    onClickHandler: (value: any) => void
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [state, dispatch] = useReducer(reducer,{stateMode:true})

    const changeState = () => {
        dispatch({type: TOGGLE_COLLAPSED})
    }
    return (
        <div>
            <AccordionTitle title={props.title} onClickHandler={changeState}/>
            {!state.stateMode && <AccordionBody items={props.items} onClickHandler={props.onClickHandler}/>}
        </div>
    )
}