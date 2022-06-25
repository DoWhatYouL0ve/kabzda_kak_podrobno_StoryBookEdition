
import {ComponentMeta} from "@storybook/react";
import { Clock } from "./Clock";

export default {
    title: 'My Examples/Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;


export const BaseClockDigital = () => {
    return <Clock mode={'digital'}/>
}

export const BaseClockAnalog = () => {
    return <Clock mode={'analog'}/>
}