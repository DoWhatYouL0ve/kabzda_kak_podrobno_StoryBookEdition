import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'My Examples/UseMemo',
};

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(4)

    let resultA = 1
    let resultB = 1

    // useMemo позволяет отслеживать изменения в переменной а и не пересчитывать resultA если а не изменилось
    resultA = useMemo(() => {
        let temp = 1
        for(let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 10000000) {
                fake ++
                const fakeValue = Math.random()
            }
            temp = temp*i
        }
        return temp
    },[a])



    for(let i = 1; i <= b; i++) {
        resultB = resultB*i
    }

    return <>
        <input type="text" value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
        <input type="text" value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for A: {resultA}</div>
        <div>Result for B: {resultB}</div>
    </>
}

const UsersTable = (props: {users: Array<string>}) => {
    console.log('re-rendering users')
    return <div>{props.users.map((u,i)=> <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersTable)

export const ReactMemoHelper = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['William', 'Bob', 'Eddy', 'Robert'])

    const filteredArray = useMemo(()=>{return users.filter(u => u.toLowerCase().indexOf('a') > -1)},[users])
    return <>
        {counter}
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <br/>
        --------------
        <br/>
        <Users users={filteredArray}/>

    </>
}

//---------------------------------------------------

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['React', 'JS', 'CSS', 'TypeScript'])

    const memorizedAddBook = useMemo(()=>{
        return () => {
            setBooks([...books, 'Angular' + new Date().getTime()])
        }
    },[books])

    const memorizedAddBook2 = useCallback(()=>{
            setBooks([...books, 'Angular' + new Date().getTime()])
    },[books])
    return <>
        {counter}
        <button onClick={()=>{setCounter(counter+1)}}>+</button>

        <br/>
        --------------
        <br/>
        <Book  addBook={memorizedAddBook}/>

    </>
}

type BooksTableType = {
    addBook: ()=>void
}

const BooksTable = (props: BooksTableType) => {
    console.log('re-rendering users')
    return <>
        <button onClick={()=>{props.addBook()}}>add book</button>
    </>
}
const Book = React.memo(BooksTable)