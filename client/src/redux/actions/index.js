import axios from "axios";

export const SET_MODAL = 'SET_MODAL';

export const setModalOpening =   (isOpen) => async (dispatch) => {
   
    dispatch({
        type: SET_MODAL,
        payload: isOpen
    })
};
