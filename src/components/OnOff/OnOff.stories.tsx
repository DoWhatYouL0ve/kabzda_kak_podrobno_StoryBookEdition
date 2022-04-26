import React, {useState} from 'react';
import { ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

export const OnOffSwitchedOn = () => <OnOff value={true} setOnOffValue={action('on or off has been clicked')}/>
export const OnOffSwitchedOff = () => <OnOff value={false} setOnOffValue={action('on or off has been clicked')}/>
export const OnOffModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff value={value} setOnOffValue={setValue}/>
}


