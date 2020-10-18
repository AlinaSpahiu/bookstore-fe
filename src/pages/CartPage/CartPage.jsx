import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/MessageLoader/Message'
import Loader from '../../components/MessageLoader/Loader'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../../actions/cartActions'

const CartPage = ({ match, location, history }) => {

    const bookId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    useEffect(() => {
        if (bookId) {
            dispatch(addToCart(bookId, qty))
        }
    }, [dispatch, bookId, qty])

    return (
        <div>
            Cart
        </div>
    )
}

export default CartPage
