import React, {useState} from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Accordion2} from "./components/Accordion/Accordion2";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import style from './appStyles.module.css'
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2| 3 | 4 | 5

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [onOffValue, setOnOffValue] = useState<boolean>(false)

    let collapsedStatus = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={style.app}>
            <PageTitle title={'This is App title.'}/>
            <Accordion title={'Menu'} collapsedStateChanger={collapsedStatus} collapsed={collapsed}/>
            {/*<Accordion title={'Menu collapsed'} collapsedStateChanger={collapsedStatus} collapsed={collapsed}/>*/}
            <hr/>
            <PageTitle title={'This is rating'}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <hr/>
            {/*<Accordion2 title={'Refactored Accordion'} collapsed={collapsed} collapsedStateChanger={collapsedStatus}/>*/}
            <hr/>
            <OnOff />
            <hr/>
            <UncontrolledAccordion title={'Accordion using useState'}/>
            <hr/>
            <UncontrolledRating />
            <hr/>
            <UncontrolledOnOff value={onOffValue} setOnOffValue={setOnOffValue}/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props:PageTitleType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
