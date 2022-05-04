import {
    SET_MODAL, GET_ALL_NFT, GET_TOKEN, REMOVE_USER, GET_NFT_QUERY, REMOVE_NFT_QUERY, PUT_USER, GET_CURRENCIES, GET_CATEGORIES
} from "../actions";


const initialState = {
    isOpen: false,
    nfts: [],
    nftquery: [],
    hasMore: true,
    isLogged: false,
    user: {},
    currencies:[],
    categories:[],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return { ...state, isOpen: action.payload }
        case GET_ALL_NFT:
            return { ...state, nfts: action.payload }
        case GET_CURRENCIES:
            return { ...state, currencies: action.payload }
        case GET_CATEGORIES:
            return { ...state, categories: action.payload }
        case GET_TOKEN:
            return { ...state, user: action.payload.usuario, isLogged: true }
        case REMOVE_USER:
            return { ...state, user: action.payload, isLogged: false }
        case GET_NFT_QUERY:
            // console.log('aquiii', state.nftquery)
            let setHasMore;
            if(state.nftquery.length > 0) {
                action.payload.length > 0 ? setHasMore = true : setHasMore = false
            } else {
                setHasMore = false
            }
            return {
                ...state,
                hasMore: setHasMore,
                nftquery: state.hasMore === false 
                ? state.nftquery 
                : [ ...state.nftquery, ...action.payload ]
            }
        default: return state
    };
};
export default rootReducer;