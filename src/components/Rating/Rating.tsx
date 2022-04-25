import React from "react";
import {RatingValueType} from "../../App";

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (ratingValue: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return(
        <div>
            <Star value={1} selected={props.value >= 1} setRatingValue={props.setRatingValue}/>
            <Star value={2} selected={props.value >= 2} setRatingValue={props.setRatingValue}/>
            <Star value={3} selected={props.value >= 3} setRatingValue={props.setRatingValue}/>
            <Star value={4} selected={props.value >= 4} setRatingValue={props.setRatingValue}/>
            <Star value={5} selected={props.value >= 5} setRatingValue={props.setRatingValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRatingValue: (ratingValue: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    return (
        <span onClick={()=>props.setRatingValue(props.value)}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
        )
}