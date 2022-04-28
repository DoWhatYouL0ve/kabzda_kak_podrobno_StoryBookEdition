import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { Accordion } from './Accordion'
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionCollapsed = Template.bind({})
AccordionCollapsed.args = {
    title: "I'm collapsed",
    collapsed: true,
    collapsedStateChanger: action('collapsed has been set')
}

export const AccordionUnCollapsed = Template.bind({})
AccordionUnCollapsed.args = {
    title: "I'm un collapsed",
    collapsed: false,
    collapsedStateChanger: action('unCollapsed has been set')
}

/*export const AccordionModeChanging2 = Template.bind({})
AccordionModeChanging2.args = {
    title: 'Click on me :)',
    collapsed: value,
    collapsedStateChanger: ()=>setValue(!value)
}*/


/*export const AccordionCollapsed = () => <Accordion title={"I'm collapsed"} collapsed={true} collapsedStateChanger={action('collapsed has been set')}/>*/
/*export const AccordionUnCollapsed = () => <Accordion title={"I'm un collapsed"} collapsed={false} collapsedStateChanger={action('unCollapsed has been set')}/>*/

export const AccordionModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} collapsedStateChanger={()=>setValue(!value)} />
}
AccordionModeChanging.args = {
    title: 'Click on me :)',
}
