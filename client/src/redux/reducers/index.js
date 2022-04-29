import { 
    SET_MODAL, GET_ALL_NFT, GET_NFT
} from "../actions";


const initialState = {
   isOpen : false,
   nfts: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MODAL :
            return { ...state, isOpen : action.payload }
        case GET_ALL_NFT :
            return { ...state, nfts: action.payload }
       default : return state
    };
};
export default rootReducer;