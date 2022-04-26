import React, {useState} from 'react';
import { ComponentMeta } from '@storybook/react';
import { UncontrolledRating } from './UncontrolledRating'
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'My Examples/UncontrolledRating',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledRating>;

export const EmptyStars = ()=> <UncontrolledRating defaultValue={0} onChange={action('Rating has been changed')}/>
export const OneStar = ()=> <UncontrolledRating defaultValue={1} onChange={action('Rating has been changed')}/>
export const TwoStars = ()=> <UncontrolledRating defaultValue={2} onChange={action('Rating has been changed')}/>
export const ThreeStars = ()=> <UncontrolledRating defaultValue={3} onChange={action('Rating has been changed')}/>
export const FourStars = ()=> <UncontrolledRating defaultValue={4} onChange={action('Rating has been changed')}/>
export const FiveStars = ()=> <UncontrolledRating defaultValue={5} onChange={action('Rating has been changed')}/>


export const ChangeRating = () => {
    return <UncontrolledRating onChange={action('Rating has been changed')}/>
}

