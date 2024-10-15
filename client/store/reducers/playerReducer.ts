import {PlayerAction, PlayerActionTypes, PlayerInterface} from "@/types/player";

const initialState: PlayerInterface = {
    volume:0,
    currentTime:0,
    duration:0,
    active:null,
    paused:true
}

export const playerReducer = (state = initialState, action: PlayerAction): PlayerInterface => {
    switch (action.type) {
        case PlayerActionTypes.PAUSE:
            return {
                ...state, paused: true
            }
        case PlayerActionTypes.PLAY:
            return {
                ...state, paused: false
            }
        case PlayerActionTypes.SET_ACTIVE:
            return {
                ...state,active: action.payload, duration:0, currentTime:0
            }
        case PlayerActionTypes.SET_DURATION:
            return {
                ...state, duration: action.payload
            }
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {
                ...state,currentTime: action.payload
            }
        case PlayerActionTypes.SET_VOLUME:
            return {
                ...state,volume:action.payload
            }

        default:
            return state
    }
}