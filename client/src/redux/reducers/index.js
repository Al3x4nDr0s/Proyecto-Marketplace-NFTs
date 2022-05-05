import {
    SET_MODAL, GET_ALL_NFT, GET_TOKEN, REMOVE_USER, GET_NFT_QUERY, REMOVE_NFT_QUERY, GET_ALL_COLLECTIONS, FILTER_NFT
} from "../actions";


const initialState = {
    isOpen: false,
    nfts: [],
    nftquery: [],
    hasMore: true,
    isLogged: false,
    user: {},
    collections: [],
    filterNfts: []
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
            if(state.nftquery.length) {
                setHasMore = action.payload.length !== 0 ? true : false
            } else {
                setHasMore = false
            }
            const unionPrueba = state.nftquery.concat(action.payload)
            // const prueba = [...action.payload, action.payload]
            // const set = new Set( unionPrueba.map( JSON.stringify))
            // const sinDuplicaciones = Array.from( set ).map( JSON.parse )
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
         case GET_ALL_COLLECTIONS:
             return {
                 ...state,
                 collections: action.payload
             }
         case FILTER_NFT:
            //  nfts[0].collection_nft.name //collections[0].name
            const nftsAll = state.nfts
            
            const filters = nftsAll.filter(n => n.collection_nft && n.collection_nft.name === action.payload)

             return {
                ...state,
                filterNfts: filters
             }

        default: return state
    };
};
export default rootReducer;