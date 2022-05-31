import React, { useState} from "react";

export default {
    title: 'My Examples/UseState',
};

const generateDate = () => {
    // difficult counting
    console.log('generateDate was called')
    return 3039453094534
}

export const Example_1 = () => {
    console.log('function has been called')
    //useState will calculate function generateDate once and use its result till the component is alive
    // this behavior helps to avoid unnecessary rendering
    let [counter, setCounter] = useState(generateDate)

    // also, a function can be used in useState which takes data and adjusts it somehow
    const changer = (state: number) => state + 1
    return <>
        <button onClick={() => setCounter(counter + 1)}>Raise counter</button>
        <button onClick={() => setCounter(changer)}>Raise counter</button>
        <button onClick={() => setCounter(state => state + 1)}>Raise counter</button>
        {counter}
    </>
}