import { 
    SET_MODAL,
} from "../actions";


const initialState = {
   isOpen : false,
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MODAL :
            return { ...state, isOpen : action.payload }
  
       default : return state
    };
};
export default rootReducer;