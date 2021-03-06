import {
    SET_MODAL,
    GET_ALL_NFT,
    GET_TOKEN,
    REMOVE_USER,
    GET_NFT_QUERY,
    REMOVE_NFT_QUERY,
    GET_ALL_COLLECTIONS,
    FILTER_NFT,
    PUT_USER,
    PUT_LIKES,
    CREATE_NFT,
    GET_CATEGORY,
    GET_CURRENCIES,
    GET_FILES_TYPE,
    GET_SALES_TYPE,
    FILTER_CATEGORY,
    CATEGORY_FILTER,
    CURRENCY_FILTER,
    SALES_FILTER,
    FILE_FILTER,
    CREATE_CATEGORY,
    GET_USERS,
    DELETE_NFT,
    CREATE_CURRENCIES,
    CREATE_SALES_TYPES,
    SEARCHBAR_FILTER
} from "../actions";


const initialState = {
    // isOpen: false,
    nfts: [],
    copynft: [],
    nftquery: [],
    hasMore: true,
    isLogged: false,
    user: {},
    collections: [],
    users: [],
    filterNfts: [],
    nft: {},
    category: [],
    sales_type: [],
    files_type: [],
    currencies: [],
    open: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return { ...state, open: action.payload }
        case GET_ALL_NFT:
            return { ...state, nfts: action.payload, copynft: action.payload }
        case CATEGORY_FILTER:
            return { ...state, nftquery: action.payload, hasMore: false }
        case SALES_FILTER:
            return { ...state, nftquery: action.payload, hasMore: false }
        case FILE_FILTER:
            return { ...state, nftquery: action.payload, hasMore: false }
        case CURRENCY_FILTER:
            return { ...state, nftquery: action.payload, hasMore: false }
        case SEARCHBAR_FILTER:
            return { ...state, nftquery: action.payload }
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
        case DELETE_NFT:
            return {
                ...state,
                // nft: action.payload
            }
        case CREATE_CURRENCIES:
            return {
                ...state,
                currencies: [...state.currencies, action.payload]
            }
        case CREATE_SALES_TYPES:
            return {
                ...state,
                sales_type: [...state.sales_type, action.payload]
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload.users
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
                if (x._id === action.payload.nft._id) {
                    x.likes = action.payload.nft.likes
                }
                objFav.push(x)
            })
            return {
                ...state,
                nfts: objFav,
            }
        case CREATE_NFT:
            return {
                ...state,
                nfts: [...state.nfts, action.payload]
            }
        case CREATE_CATEGORY:
            return {
                ...state,
                category: [...state.category, action.payload]
            }
        case GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case GET_CURRENCIES:
            return {
                ...state,
                currencies: action.payload
            }
        case GET_SALES_TYPE:
            return {
                ...state,
                sales_type: action.payload
            }
        case GET_FILES_TYPE:
            return {
                ...state,
                files_type: action.payload
            }
        case FILTER_CATEGORY:
            return {
                ...state,
                nftquery: action.payload
            }
        default: return state
    };
};
export default rootReducer;