import React, {useState} from "react";


export default {
    title: 'My Examples/ReactMemo',
};

const Counter = (props: {count: number}) => {
    console.log('re-rendering counter')
    return <div>{props.count}</div>
}

const CounterWithMemo = React.memo(Counter)

const UsersTable = (props: {users: Array<string>}) => {
    console.log('re-rendering users')
    return <div>{props.users.map((u,i)=> <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersTable)

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['William', 'Bob', 'Eddy', 'Robert'])
    return <>

        <CounterWithMemo count={counter}/>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <br/>
        --------------
        <br/>
        <button onClick={()=>{setUsers([...users, 'Anna'])}}>add user</button>
        <Users users={users}/>

    </>
}