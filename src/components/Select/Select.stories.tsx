import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
}

let items = [
    {title: 'Wroclaw', itemValue: '1'},
    {title: 'Berlin', itemValue: '2'},
    {title: 'Monaco', itemValue: '3'},
    {title: 'Madrid', itemValue: '4'},
    {title: 'Porto', itemValue: '5'},
]


export const SelectSB = () => {
    const [value, setValue] = useState('1')

    return <>
        < Select
            value={value}
            onChange={setValue}
            items={items}
        />
    </>
}
export const SelectSBWithoutValue = () =>{
    const [value, setValue] = useState(null)

    return <>
        < Select
            value={value}
            onChange={setValue}
            items={items}
        />
    </>
}

/*export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const changeParentValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <><select value={parentValue} onChange={changeParentValue}>
        <option>none</option>
        <option value={'1'}>Wroclaw</option>
        <option value={'2'}>Berlin</option>
        <option value={'3'}>Monaco</option>
    </select> --- {parentValue}
    </>
}*/


