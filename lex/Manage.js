import React, { Component } from 'react'
import ManItem from './ManItem'
import { NavLink, Link } from 'react-router-dom'
import EditItem from './EditItem'

import { useSelector } from 'react-redux'


const Manage = () => {
    const items = useSelector(state => state.item.items);
    const itemKeys = Object.keys(items);
    const itemList = itemKeys.map(itemKey => {
        const item = items[itemKey];
        
        return (
            <ManItem key={item.id} {...item}></ManItem>
        )
    });

    return (
        <div className="item-list">
        { itemList }
        
        </div>
    );         
}



export default Manage;