import { types } from "../types/types";

const inicialState = {
    modalOpen: false,
    buttonLogout: false,
}

export const uiReducer = ( state = inicialState , action) => {

    switch (action.type) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
    
        default:
            return state;
    }
}