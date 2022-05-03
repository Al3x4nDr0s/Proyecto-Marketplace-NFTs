import axios from "axios";

export const SET_MODAL = 'SET_MODAL';
export const SET_RESIZE = 'SET_RESIZE';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_ALL_NFT = 'GET_ALL_NFT';
export const GET_NFT_QUERY = 'GET_NFT_QUERY';
export const PUT_USER = 'PUT_USER'
export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_NFT_QUERY = 'REMOVE_NFT_QUERY';



export const setModalOpening = (isOpen) => async (dispatch) => {

    dispatch({
        type: SET_MODAL,
        payload: isOpen
    })
};

export const getAllNft = () => async dispatch => {
    const dataNft = await axios.get('http://localhost:4000/nft')
    const data = await dispatch({
        type: GET_ALL_NFT,
        payload: dataNft.data.getAllNfts
    })
    return data
}

export const getNftQuery = (page) => async dispatch => {
    const dataQuery = await axios.get('http://localhost:4000/nft', {params: {page: page, limit: 8}})
    if(dataQuery) {
        const dataNftQuery = await dispatch({
            type: GET_NFT_QUERY,
            payload: dataQuery.data.getAllNfts
        })
        return dataNftQuery
    }
}

export const getTokenUser = (user) => async dispatch => {
    try {
        const dataToken = await axios.get('http://localhost:4000/auth/renew', {
            headers: {
                authorization: JSON.parse(user)
            }
        })
        const dataUser = await dispatch({
            type: GET_TOKEN,
            payload: dataToken.data
        })
        return dataUser
    } catch (error) {
        console.log(error)
    }
}

export const modificacionUser = (id, item) => async dispatch => {
    try {
        const modifUser = await axios.put(`http://localhost:4000/users/${id}`, item)
        dispatch({
            type: PUT_USER,
            payload: modifUser
        })
        console.log(modifUser)
        return modifUser
    } catch (error) {
        console.log('un error nuevo', error)
    }
    // return dispatch => {

    // }
}

export const removeNftQuery = () => dispatch => {
    dispatch({
        type: REMOVE_NFT_QUERY,
        payload: []
    })
}


export const removeUser = () => dispatch => {
    dispatch({
        type: REMOVE_USER,
        payload: {}
    })
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