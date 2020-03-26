import React, { Component } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import EditItem from './EditItem'


import { useSelector } from 'react-redux'


const Item = (items) => {
        const history = useHistory();
        
    const goToDeets = (e) => {
            e.preventDefault();
            history.push(`/${items.id}`)
        }
        if (items.category === "earrings") {
            return (
                <div className="item" id="earring-item" key={items.id}>
                    <img alt="" src={items.images[0]}/>
                    <div>{items.name}</div>
                    <div>Price: {items.price}</div>

                    <button onClick={goToDeets}>Learn More</button>
                    
                </div>
            )
        } else if (items.category === "rings") {
            return (
                <div className="item" id="ring-item" key={items.id}>
                    <img alt="" src={items.images[0]}/>
                    <div>{items.name}</div>
                    <div>Price: {items.price}</div>

                    <button onClick={goToDeets}>Learn More</button>
                    
                </div>
            )
        } else if (items.category === "pendants") {
            return (
                <div className="item" id="pendant-item" key={items.id}>
                    <img alt="" src={items.images[0]}/>
                    <div>{items.name}</div>
                    <div>Price: {items.price}</div>

                    <button onClick={goToDeets}>Learn More</button>
                    
                </div>
            )
        } else {
            return console.log('fuck you')
        }
       


}  


export default Item