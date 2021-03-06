import {createStore, combineReducers,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {bookListReducer, bookDetailsReducer} from './reducers/bookReducers'
import {cartReducer} from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, 
         userDetailsReducer, userUpdateProfileReducer } from "./reducers/userReducers"
import {orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer} from "./reducers/orderReducers"

const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetails: bookDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer
})

// Local Storage of CART
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

// Local Storage of USER
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


// Local Storage of Shipping Address
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

// intialState:
const initialState = {
    cart: { cartItems: cartItemsFromStorage, 
            shippingAddress: shippingAddressFromStorage
          },
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store