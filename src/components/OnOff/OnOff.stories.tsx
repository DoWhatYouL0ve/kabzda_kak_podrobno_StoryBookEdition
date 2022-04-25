import React, {useState} from 'react';
import { ComponentMeta } from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/OnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

export const OnOffSwitchedOn = () => <UncontrolledOnOff value={true} setOnOffValue={action('on or off has been clicked')}/>
export const OnOffSwitchedOff = () => <UncontrolledOnOff value={false} setOnOffValue={action('on or off has been clicked')}/>
export const OnOffModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <UncontrolledOnOff value={value} setOnOffValue={setValue}/>
}


