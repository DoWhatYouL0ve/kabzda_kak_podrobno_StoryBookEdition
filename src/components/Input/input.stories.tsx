import React, {useState, ChangeEvent, useRef} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/Input',
    //component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export const UncontrolledInput = () => <input/>
export const TrackingValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    let onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChangeValue}/> -- {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    let createMessage = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/> <button onClick={createMessage}>Press me</button> -- {value}</>
}
export const ControlledInputWithFixedValue = () => <input value={'Hi'}/>
//export const ControlledInput = () => <input value={value}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const changeParentValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={changeParentValue}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)
    const changeParentValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={changeParentValue}/>
}

export const ControlledSelect = () => {
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
}


