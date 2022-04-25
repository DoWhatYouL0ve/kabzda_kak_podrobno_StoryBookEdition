import React from "react";

type AccordionTitleType = {
    title: string
    onClickHandler?: () => void
}

export function AccordionTitle(props:AccordionTitleType) {
    return(
        <div>
            <h3 onClick={props.onClickHandler}>{props.title}</h3>
        </div>
    )
}