import axios from 'axios';
import {CART_ADD_ITEM} from '../constants/cartConstants';


export const addToCart = (id, qty) => async(dispatch, getState) => {

    const { data } = await axios.get(`/api/books/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            book: data._id,
            title: data.title,
            image: data.image,
            price: data.price,
            countInStock : data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
