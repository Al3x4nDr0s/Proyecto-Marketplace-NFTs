import axios from "axios";

export const SET_MODAL = 'SET_MODAL';
export const SET_RESIZE = 'SET_RESIZE';
// export const GET_NFT = 'GET_NFT';
export const GET_ALL_NFT = 'GET_ALL_NFT';

export const setModalOpening =   (isOpen) => async (dispatch) => {
   
    dispatch({
        type: SET_MODAL,
        payload: isOpen
    })
};

export const getAllNft = () => async dispatch => {
    const dataNft = await axios.get('http://localhost:4000/nft')
    const data = await dispatch({
        type: GET_ALL_NFT,
        payload: dataNft.data
    })
    return data
}


// export const getNft = (id) => dispatch => {
//     return axios.get(`http://localhost:4000/nft/${id}`)
//     .then(response => {
//         dispatch({
//             type: GET_NFT,
//             payload: response.data
//         })
//     })
// }