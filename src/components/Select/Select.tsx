import React, {KeyboardEvent, useEffect, useState} from "react";
import styles from './Select.module.css'

export type ItemSelectType = {
    title: string
    itemValue: any
}
export type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: ItemSelectType[]
}

export const Select: React.FC<SelectType> = ({value, onChange, items}) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredItem, setHovered] = useState<any>(value)

    useEffect(() => {
        setHovered(value)
    }, [value])

    const selectedValue = items.find(i => i.itemValue === value)
    const hoveredValue = items.find(i => i.itemValue === hoveredItem)
    const onClickHandler = () => {
        setActive(!active)
    }
    const onItemClicked = (value: any) => {
        onChange(value)
        setActive(!active)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for(let i = 0; i < items.length; i++) {
                if(items[i].itemValue === hoveredItem) {
                    const nextElement = e.key === 'ArrowDown' ? items[i+1] : items[i-1]
                    if(nextElement) {
                        onChange(nextElement.itemValue)
                        return
                    }
                }
            }
            if(!selectedValue) {
                onChange(items[0].itemValue)
            }
        }
        if(e.key === 'Escape' || e.key === 'Enter') {
            setActive(false)
        }
    }


    return (
        <>
            <div className={styles.selectContainer} onKeyDown={onKeyHandler} tabIndex={0}>
                <span className={styles.value} onClick={onClickHandler}>{selectedValue && selectedValue.title}</span>
                {active &&
                    <div className={styles.items}>
                        {items.map(i => <div
                            className={`${styles.item} ${hoveredValue === i ? styles.selected : ''}`}
                            onClick={() => onItemClicked(i.itemValue)}
                            key={i.itemValue}
                            onMouseEnter={()=>setHovered(i.itemValue)}
                        >
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>

    )
}