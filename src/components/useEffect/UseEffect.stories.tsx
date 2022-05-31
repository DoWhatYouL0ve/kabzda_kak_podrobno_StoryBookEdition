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
        document.title = counter.toString()
    })
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

export const SetTimeOutExample = () => {
    console.log('function with timeout has been called')
    let [counter, setCounter] = useState(1)

    // starts working only after jsx has been rendered
    useEffect(() => {
        console.log('useEffect called only once when component render')
        //api.getUsers().then()
        // setInterval
        document.title = counter.toString()
        /*setTimeout(()=>{
            alert('Hi')
        }, 1000)*/
        //using callback inside makes setCounter rewriting old counter value with a new value
        setInterval(()=>{
            setCounter(state =>state + 1)
        }, 1000)
    },[])


    return <>
        <button onClick={() => setCounter(counter + 1)}> + </button>
        {counter}
    </>
}