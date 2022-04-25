import React, {useState} from 'react';
import { ComponentMeta } from '@storybook/react';
import { Accordion } from './Accordion'
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const AccordionCollapsed = () => <Accordion title={"I'm collapsed"} collapsed={true} collapsedStateChanger={action('collapsed has been set')}/>
export const AccordionUnCollapsed = () => <Accordion title={"I'm un collapsed"} collapsed={false} collapsedStateChanger={action('unCollapsed has been set')}/>

export const AccordionModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Click on me :)'} collapsed={value} collapsedStateChanger={()=>setValue(!value)}/>
}

