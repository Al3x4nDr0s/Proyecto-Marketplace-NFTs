import axios from "axios";

export const SET_MODAL = 'SET_MODAL';
export const SET_RESIZE = 'SET_RESIZE';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_ALL_NFT = 'GET_ALL_NFT';
export const GET_NFT_QUERY = 'GET_NFT_QUERY';
export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_SALES_TYPE = 'GET_SALES_TYPE';
export const GET_FILES_TYPE = 'GET_FILES_TYPE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const PUT_USER = 'PUT_USER'
export const PUT_LIKES = 'PUT_LIKES';
export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_NFT_QUERY = 'REMOVE_NFT_QUERY';
export const GET_ALL_COLLECTIONS = 'GET_ALL_COLLECTIONS';
export const FILTER_NFT = 'FILTER_NFT';
export const CREATE_NFT = 'CREATE_NFT';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const CATEGORY_FILTER = 'CATEGORY_FILTER';
export const CURRENCY_FILTER = 'CURRENCY_FILTER';
export const SALES_FILTER = 'SALES_FILTER';
export const FILE_FILTER = 'FILE_FILTER';
export const GET_USERS = 'GET_USERS';
export const DELETE_NFT = 'DELETE_NFT';
export const CREATE_CURRENCIES = 'CREATE_CURRENCIES';
export const CREATE_SALES_TYPES = 'CREATE_SALES_TYPES';
export const SEARCHBAR_FILTER = 'SEARCHBAR_FILTER';



export const setModalOpening = (isOpen) => async (dispatch) => {

    dispatch({
        type: SET_MODAL,
        payload: isOpen
    })
};

export const getAllNft = () => async dispatch => {
    try {
        const dataNft = await axios.get('https://sevendevs-backend.herokuapp.com/nft')
        const data = await dispatch({
            type: GET_ALL_NFT,
            payload: dataNft.data.getAllNfts
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteNft = (tokenuser, id) => async dispatch => {
    try {
        const dataNft = await axios.delete(`https://sevendevs-backend.herokuapp.com/nft/${id}`,{
            headers: {
                Authorization: JSON.parse(tokenuser)
            }
        })
        const deleteUnNft = await dispatch({
            type: DELETE_NFT,
            payload: dataNft.data
        })
        return deleteUnNft
    } catch (error) {
        console.log("error", error)
    }
}

export const getAllCollections = () => async dispatch => {
    const dataCollections = await axios.get('https://sevendevs-backend.herokuapp.com/misc/collection')
    const data = await dispatch({
        type: GET_ALL_COLLECTIONS,
        payload: dataCollections.data
    })
    return data
}

export function filterNft(payload) {
    return {
        type: 'FILTER_NFT',
        payload
    }
};


export const getNftQuery = (page) => async dispatch => {
    const dataQuery = await axios.get('https://sevendevs-backend.herokuapp.com/nft', { params: { page: page, limit: 8 } })
    if (dataQuery) {
        const dataNftQuery = await dispatch({
            type: GET_NFT_QUERY,
            payload: dataQuery.data.getAllNfts
        })
        return dataNftQuery
    }
}

export const getTokenUser = (user) => async dispatch => {
    try {
        const dataToken = await axios.get('https://sevendevs-backend.herokuapp.com/auth/renew', {
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

// export const uplploadImgPerfil = (id) =

export const putLikesNft = (nft, tokenuser, item) => async dispatch => {
    try {
        const dataLikes = await axios.put(`https://sevendevs-backend.herokuapp.com/nft/${nft}`, item, {
            headers: {
                Authorization: JSON.parse(tokenuser)
            }
        })
        const Likes = await dispatch({
            type: PUT_LIKES,
            payload: dataLikes.data
        })
        return Likes
    } catch (error) {
        console.log('error:', error)
    }
}

export const getCategory = () => async dispatch => {
    try {
        const dataCategory = await axios.get('https://sevendevs-backend.herokuapp.com/misc/category')
        const finallyDataCategory = await dispatch({
            type: GET_CATEGORY,
            payload: dataCategory.data
        })
        return finallyDataCategory
    } catch (error) {
        console.log('error:', error)
    }
}

export const filterByCategory = (id) => async dispatch => {
    try {
        const dataCategory = await axios.get('https://sevendevs-backend.herokuapp.com/filter/category/' + id)
        // console.log(dataCategory.data)
        // const dataCategory = await axios.get('http://localhost:4000/filter/category/'+ id)
        const finallyDataCategory = await dispatch({
            type: CATEGORY_FILTER,
            payload: dataCategory.data
        })
        return finallyDataCategory
    } catch (error) {
        console.log('error:', error)
    }
}
export const filterBySaleWay = (id) => async dispatch => {
    try {
        const dataCategory = await axios.get('https://sevendevs-backend.herokuapp.com/filter/sales/' + id)
        // console.log(dataCategory.data)
        // const dataCategory = await axios.get('http://localhost:4000/filter/sales/'+ id)
        const finallyDataCategory = await dispatch({
            type: SALES_FILTER,
            payload: dataCategory.data
        })
        return finallyDataCategory
    } catch (error) {
        console.log('error:', error)
    }
}
export const filterByCurrencies = (id) => async dispatch => {
    try {
        const dataCurrencies = await axios.get('https://sevendevs-backend.herokuapp.com/filter/currencies/' + id)
        // console.log(dataCurrencies.data)
        // const dataCurrencies = await axios.get('http://localhost:4000/filter/currencies/'+ id)
        const finallyDataCategory = await dispatch({
            type: CURRENCY_FILTER,
            payload: dataCurrencies.data
        })
        return finallyDataCategory
    } catch (error) {
        console.log('error:', error)
    }
}
export const filterByFileType = (id) => async dispatch => {
    try {
        const dataCurrencies = await axios.get('https://sevendevs-backend.herokuapp.com/filter/files/' + id)
        // console.log(dataCurrencies.data)
        // const dataCurrencies = await axios.get('http://localhost:4000/filter/files/'+ id)
        const finallyDataCategory = await dispatch({
            type: FILE_FILTER,
            payload: dataCurrencies.data
        })
        return finallyDataCategory
    } catch (error) {
        console.log('error:', error)
    }
}
export const searchBarFilter = (name) => async dispatch => {
    try {
        const dataCurrencies = await axios.get('https://sevendevs-backend.herokuapp.com/nft?search=' + name)
        const finallyDataCategory = await dispatch({
            type: SEARCHBAR_FILTER,
            payload: dataCurrencies.data.nfts
        })
        return finallyDataCategory
    } catch (error) {
        console.log('error:', error)
    }
}



export const getSalesType = () => async dispatch => {
    try {
        const dataSalesType = await axios.get('https://sevendevs-backend.herokuapp.com/misc/sales_type')
        const finallyDataSalesType = await dispatch({
            type: GET_SALES_TYPE,
            payload: dataSalesType.data
        })
        return finallyDataSalesType
    } catch (error) {
        console.log('error:', error)
    }
}

export const getCurrencies = () => async dispatch => {
    try {
        const dataCurrencies = await axios.get('https://sevendevs-backend.herokuapp.com/misc/currencies')
        const finallyDataCurrencies = dispatch({
            type: GET_CURRENCIES,
            payload: dataCurrencies.data
        })
        return finallyDataCurrencies
    } catch (error) {
        console.log('error:', error)
    }
}

export const getFileTypes = () => async dispatch => {
    try {
        const dataFileTypes = await axios.get('https://sevendevs-backend.herokuapp.com/misc/files_type')
        const finallyDataFilesType = await dispatch({
            type: GET_FILES_TYPE,
            payload: dataFileTypes.data
        })
        return finallyDataFilesType
    } catch (error) {
        console.log('error:', error)
    }
}

export const postNft = (tokenuser, item, formData) => async dispatch => {
    try {
        //? aca despues tendria

        const dataPost = await axios.post(`https://sevendevs-backend.herokuapp.com/nft`, item, {
            headers: {
                Authorization: JSON.parse(tokenuser) // usuarios registrados puedan hacer creeacion de nfts
            }
        })
        const uid = dataPost.data.nft._id
        console.log(uid)
        const dataImageNft = await axios.put(`https://sevendevs-backend.herokuapp.com/upload/nft/${uid}`, formData, {
            headers: {
                Authorization: JSON.parse(tokenuser),
                "Content-Type": "multipart/form-data",

            }
        })
        const obj1 = { ...dataPost.data.nft, image: dataImageNft.url }
        const responsePost = await dispatch({
            type: CREATE_NFT,
            payload: obj1
        })

        // const finallyUpdateImageNft = await dispatch({
        //     type: UPDATE_IMAGE_NFT,
        //     payload: dataImageNft.data.url
        // })
        return responsePost
    } catch (error) {
        console.log("paso por aqui perro asi que hay", error)
    }
}

export const PostCurrencies = (item) => async dispatch => {
    try {
        const dataPostCurrencies = await axios.post(`https://sevendevs-backend.herokuapp.com/misc/category`, item)
        const respDataPostCurencies = await dispatch({
            type: CREATE_CURRENCIES,
            payload: dataPostCurrencies
        })
        return respDataPostCurencies
    } catch (error) {
        console.log("error", error)
    }
}

export const PostSalesTypes = (item) => async dispatch => {
    try {
        const dataPostSalestypes = await axios.post(`https://sevendevs-backend.herokuapp.com/misc/category`, item)
        const respDataPostSalesTypes = await dispatch({
            type: CREATE_SALES_TYPES,
            payload: dataPostSalestypes
        })
        return respDataPostSalesTypes
    } catch (error) {
        console.log("error", error)
    }
}

export const postCategory = (item) => async dispatch => {
    try {
        const dataPostCategory = await axios.post(`https://sevendevs-backend.herokuapp.com/misc/category`, item)
        const respDataPostCategory = await dispatch({
            type: CREATE_CATEGORY,
            payload: dataPostCategory
        })
        return respDataPostCategory
    } catch (error) {
        console.log("error", error)
    }
}

export const filterForCategory = (id) => async dispatch => {
    try {
        const dataFilterCategory = await axios.get(`https://sevendevs-backend.herokuapp.com/filter/category/${id}`)
        const finallyFilterCategory = await dispatch({
            type: FILTER_CATEGORY,
            payload: dataFilterCategory.data
        })
        return finallyFilterCategory
    } catch (error) {
        console.log("error", error)
    }
}

// export const filterForCollections = (id) => async dispatch => {
//     try {
//         const dataFilterCategory = await axios.get(`http://localhost:4000/filter/category/${id}`)
//         const finallyFilterCategory = await dispatch({
//             type: FILTER_CATEGORY,
//             payload: dataFilterCategory.data
//         })
//         return finallyFilterCategory
//     } catch (error) {
//         console.log("error", error)
//     }
// }

export const modificacionUser = (id, item) => async dispatch => {
    try {
        const modifUser = await axios.put(`https://sevendevs-backend.herokuapp.com/users/${id}`, item)
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
export function deleteCategory(id) {
    return async function () {
      try {
         await axios.delete("http://localhost:4000/category" + id);
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function deleteNFT(ids) {
    return function () {
      try {
        ids.map((id) => axios.delete("http://localhost:4000/nft/" + id));
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export function deleteUser(id) {
    return function () {
      try {
       axios.delete("http://localhost:4000/users/" + id);
      } catch (error) {
        console.log(error);
      }
    };
  } 

export const getUsers = (tokenuser) => async dispatch => {
    try {
        const dataUsers = await axios.get('https://sevendevs-backend.herokuapp.com/users?limit=50', {
            headers: {
                Authorization: JSON.parse(tokenuser)
            }
        })
        const usersers = await dispatch({
            type: GET_USERS,
            payload: dataUsers.data
        })
        return usersers
    } catch (error) {
        console.log("error: " + error)
    }
}



export const getNftCurrencies = () => async dispatch => {

    try {
        const dataCurr = await axios.get('https://sevendevs-backend.herokuapp.com/misc/currencies')
        const dataUser = await dispatch({
            type: GET_CURRENCIES,
            payload: dataCurr.data
        })
        return dataUser
    } catch (error) {
        console.log(error)
    }
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