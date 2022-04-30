import {
    SET_MODAL, GET_ALL_NFT, GET_TOKEN, REMOVE_USER
} from "../actions";


const initialState = {
    isOpen: false,
    nfts: [],
    isLogged: false,
    user: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return { ...state, isOpen: action.payload }
        case GET_ALL_NFT:
            return { ...state, nfts: action.payload }
        case GET_TOKEN:
            return { ...state, user: action.payload.usuario, isLogged: true }
        case REMOVE_USER:
            return { ...state, user: action.payload, isLogged: false }
        default: return state
    };
};
export default rootReducer;