import React, {useState} from 'react';
import { ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

export const OnOffSwitchedOn = () => <UncontrolledOnOff defaultMode={true} setOnOffValue={action('on or off has been clicked')}/>
export const OnOffSwitchedOff = () => <UncontrolledOnOff setOnOffValue={action('on or off has been clicked')}/>
export const OnOffModeChanging = () => {
    return <UncontrolledOnOff defaultMode={true} />
}
export const BugMode = () => <div>'Un sync when change default value when component has already been rendered'</div>

export const DefaultInputValue = () => <input defaultValue={'Hello!'}/>

