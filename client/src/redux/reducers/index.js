import {
    SET_MODAL, GET_ALL_NFT, GET_TOKEN, REMOVE_USER, GET_NFT_QUERY, REMOVE_NFT_QUERY, PUT_USER, PUT_LIKES
} from "../actions";


const initialState = {
    isOpen: false,
    nfts: [],
    copynft: [],
    nftquery: [],
    hasMore: true,
    isLogged: false,
    user: {},
    nft: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return { ...state, isOpen: action.payload }
        case GET_ALL_NFT:
            return { ...state, nfts: action.payload, copynft: action.payload }
        case GET_TOKEN:
            return { ...state, user: action.payload.usuario, isLogged: true }
        case REMOVE_USER:
            return { ...state, user: action.payload, isLogged: false }
        case GET_NFT_QUERY:
            var setHasMore;
            if (state.nftquery.length) {
                setHasMore = action.payload.length !== 0 ? true : false
            } else {
                setHasMore = false
            }
            const unionPrueba = state.nftquery.concat(action.payload)
            return {
                ...state,
                hasMore: setHasMore,
                nftquery: state.hasMore !== true ? state.nftquery : unionPrueba
            }
        case REMOVE_NFT_QUERY:
            return {
                ...state,
                nftquery: [],
                hasMore: true
            }
        case PUT_USER:
            const username = action.payload.data
            return {
                ...state,
                user: username
            }
        case PUT_LIKES:
            const objFav = []
            state.nfts.forEach(x => {
                if(x._id === action.payload.nft._id) {
                    x.likes = action.payload.nft.likes
                }
                objFav.push(x)                
            })
            return {
                ...state,
                nfts: objFav,
            }
        default: return state
    };
};
export default rootReducer;