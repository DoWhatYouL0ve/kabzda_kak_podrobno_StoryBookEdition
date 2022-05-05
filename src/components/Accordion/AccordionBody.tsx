import React from "react";
import {ItemType} from "../../App";

export type AccordionBodyType = {
    items: ItemType[]
    onClickHandler: (value: any) => void
}

export const AccordionBody: React.FC<AccordionBodyType> = ({items, onClickHandler}) => {
    return(
        <div>
            <ul>
                {items.map( (i, index) => <li key={index} onClick={()=>onClickHandler(i.value)}>{i.item}</li>)}
            </ul>
        </div>
    )
}