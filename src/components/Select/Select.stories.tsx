import React from 'react';
import {Select} from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
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


