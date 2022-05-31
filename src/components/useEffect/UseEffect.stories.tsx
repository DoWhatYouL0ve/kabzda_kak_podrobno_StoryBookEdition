import React, {useEffect, useState} from "react";

export default {
    title: 'My Examples/UseEffect',
};

export const Example_1 = () => {
    console.log('function has been called')
    let [counter, setCounter] = useState(1)

    // starts working only after jsx has been rendered
    useEffect(() => {
        console.log('useEffect called once on first component render')
        //api.getUsers().then()
        // setInterval

    }, [])
    useEffect(() => {
        console.log('useEffect called every time component render')
        //api.getUsers().then()
        // setInterval

    }, [])
    useEffect(() => {
        console.log('useEffect called every time counter changed')
        //api.getUsers().then()
        // setInterval

    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}> + </button>
        {counter}
    </>
}