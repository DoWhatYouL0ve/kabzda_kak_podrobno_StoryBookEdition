import React from "react";

export type ItemSelectType = {
    title: string
    itemValue: any
}
export type SelectType = {
    value: any
    onChange: (value: any) => void
    items: ItemSelectType[]
}

export const Select: React.FC<SelectType> = ({value, onChange, items}) => {
    return (
        <>
            <div>{value}</div>
            {items.map( i => <div>{i.title}</div>)}
        </>
    )
}