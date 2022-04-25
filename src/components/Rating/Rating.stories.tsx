import React, {useState} from 'react';
import { ComponentMeta } from '@storybook/react';
import { Rating } from './Rating'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

export const EmptyStars = ()=> <Rating value={0} setRatingValue={a=>a}/>
export const OneStar = ()=> <Rating value={1} setRatingValue={a=>a}/>
export const TwoStars = ()=> <Rating value={2} setRatingValue={a=>a}/>
export const ThreeStars = ()=> <Rating value={3} setRatingValue={a=>a}/>
export const FourStars = ()=> <Rating value={4} setRatingValue={a=>a}/>
export const FiveStars = ()=> <Rating value={5} setRatingValue={a=>a}/>


export const ChangeRating = () => {
    const [value, setValue] = useState<0|1|2|3|4|5>(0)
    return <Rating value={value} setRatingValue={setValue}/>
}

