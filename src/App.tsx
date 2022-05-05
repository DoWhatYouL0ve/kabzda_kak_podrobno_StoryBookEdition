import React, {useState} from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Accordion2} from "./components/Accordion/Accordion2";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import style from './appStyles.module.css'
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

export type RatingValueType = 0 | 1 | 2| 3 | 4 | 5

export type ItemType = {
    item: string
    value: any
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [onOffValue, setOnOffValue] = useState<boolean>(false)

    let collapsedStatus = () => {
        setCollapsed(!collapsed)
    }

    let items: ItemType[] = [{item: 'Wroclaw', value: '1'}, {item: 'Berlin', value: '2'}, {item: 'Monaco', value: '3'}]
    const onClickHandler = (value: any) => {

    }

    return (
        <div className={style.app}>
            <PageTitle title={'This is App title.'}/>
            <Accordion title={'Menu'} collapsedStateChanger={collapsedStatus} collapsed={collapsed} items={items} onClickHandler={onClickHandler}/>
            {/*<Accordion title={'Menu collapsed'} collapsedStateChanger={collapsedStatus} collapsed={collapsed}/>*/}
            <hr/>
            <PageTitle title={'This is rating'}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <hr/>
            {/*<Accordion2 title={'Refactored Accordion'} collapsed={collapsed} collapsedStateChanger={collapsedStatus}/>*/}
            <hr/>
            <OnOff value={onOffValue} setOnOffValue={setOnOffValue}/>
            <hr/>
            <UncontrolledAccordion title={'Accordion using useState'} items={items} onClickHandler={onClickHandler}/>
            <hr/>
            <UncontrolledRating defaultValue={0} onChange={()=>0}/>
            <hr/>
            <UncontrolledOnOff />
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
