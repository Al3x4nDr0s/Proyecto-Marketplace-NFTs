import {
    SET_MODAL, GET_ALL_NFT, GET_TOKEN, REMOVE_USER, GET_NFT_QUERY
} from "../actions";


const initialState = {
    isOpen: false,
    nfts: [],
    nftquery: [],
    hasMore: true,
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
        case GET_NFT_QUERY:
            var setHasMore;
            if(action.payload.length) {
                setHasMore = action.payload.length !== 0 ? true : false
            } else {
                setHasMore = false
            }
            const unionPrueba = state.nftquery.concat(action.payload)
            const prueba = [...action.payload, action.payload]
            const set = new Set( unionPrueba.map( JSON.stringify))
            const sinDuplicaciones = Array.from( set ).map( JSON.parse )
            return {
                ...state,
                hasMore: setHasMore,
                nftquery: state.hasMore !== true ? state.nftquery : sinDuplicaciones
            }
        default: return state
    };
};
export default rootReducer;