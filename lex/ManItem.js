import React, { Component } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import EditItem from './EditItem'
import * as itemActions from '../store/actions/itemActions'

import { useSelector, useDispatch } from 'react-redux'


const ManItem = (items) => {
        const history = useHistory();
        const dispatch = useDispatch();
        const goToEdit = (e) => {
            e.preventDefault();
            history.push(`edititemform/${items.id}`)
        }
        const delItem = (e) => {
            e.preventDefault();
            dispatch(itemActions.ITEM_DELETE(items.id));
        }
        return (
            <div className="item" key={items.id}>
                <img alt="" src={items.img}/>
                <div>{items.name}</div>
                <div>Price: {items.price}</div>

                <button onClick={goToEdit}>Edit</button>
                <button onClick={delItem}>Delete</button>
            </div>
        )


}  


export default ManItem