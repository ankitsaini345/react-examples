import { useReducer } from "react";

export const ACTIONS = {
    CALL_API: 'call-api',
    SUCCESS: 'success',
    ERROR: 'error',
};

const initialState = {
    userDetails: [],
    loading: false,
    error: null,
};

const userDetailsReducer = (state: any, action: any) => {
    switch (action.type) {
        case ACTIONS.CALL_API:
            return {
                ...state,
                loading: true
            }
        case ACTIONS.SUCCESS:
            return {
                ...state,
                loading: false,
                userDetails: action.data
            }
        case ACTIONS.ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state;
    }
}
export const userData = [
    {
        id: 1,
        name: 'kunal',
        age: 22,
        admin: true
    },
    {
        id: 2,
        name: 'rounak',
        age: 23,
        admin: false
    },
    {
        id: 3,
        name: 'utkarsh',
        age: 22,
        admin: false
    },
]

export const useStore = () => useReducer(userDetailsReducer, initialState);