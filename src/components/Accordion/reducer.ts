type ActionType = {
    type: string
}

export type StateType = {
    stateMode: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

export const reducer = (state:StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, stateMode: !state.stateMode}
        default:
            throw new Error('Bad action type')
        //return state
    }
}