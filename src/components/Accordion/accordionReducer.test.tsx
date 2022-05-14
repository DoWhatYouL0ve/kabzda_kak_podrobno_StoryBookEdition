import React from "react";
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer test changing value', () => {
    // data
    const state: StateType = {
        stateMode: true
    }
    //action
    const newState = reducer(state,{type: TOGGLE_COLLAPSED})
    //expectation
    expect(newState.stateMode).toBe(false)
})

test('reducer test fake type throw error', () => {
    // data
    const state: StateType = {
        stateMode: true
    }

    //expectation
    expect(()=>{reducer(state,{type: 'FAKETYPE'})}).toThrowError()
})