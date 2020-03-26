import React, { Component } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import EditItem from './EditItem'
import Item from './Item'

import { useSelector } from 'react-redux'


const Catalog = () => {
        
        
    const items = useSelector(state => state.item.items);
    const itemKeys = Object.keys(items);
    const itemList = itemKeys.map(itemKey => {
        const item = items[itemKey];
        
        return (
            <Item key={item.id} {...item}></Item>
        )
    });

    const loggedIn = useSelector(state => state.auth.loggedIn);
    if (loggedIn === true) {
        return (
                <div className="item-list">
                        <div class="categories">
                                <button id="title" type="button">Categories</button>
                                <button id="all" type="button">All</button>
                                <button id="earrings" type="button">Earrings</button>
                                <button id="rings" type="button">Rings</button>
                                <button id="pendants" type="button">Pendants</button>
                        </div>
                <NavLink to="/edititemform/0">Add Item</NavLink>
                <br/>
                <NavLink to='/manage'>Manage Items</NavLink>
                { itemList }
                </div>
        );  
    } else if (loggedIn === false) {
        return (
                <div className="item-list">
                        <div class="categories">
                                <button id="title" type="button">Categories</button>
                                <button id="all" type="button">All</button>
                                <button id="earrings" type="button">Earrings</button>
                                <button id="rings" type="button">Rings</button>
                                <button id="pendants" type="button">Pendants</button>
                        </div>
                { itemList }
                </div>
        );    
        
    }
          
                /* return (
                        <div className="catalog">
                                <Items deleteItem={this.deleteItem}  />
                                <NavLink to="/edititemform/0">Add Item</NavLink>
                                
                        </div>

                <div>
                        <div class="container">
                        <div class="row" id="category-list">
                        <div class="col-sm-2">
                                <div class="categories">
                                <button id="title" type="button">Categories</button>
                                <button id="all" type="button">All</button>
                                <button id="earrings" type="button">Earrings</button>
                                <button id="rings" type="button">Rings</button>
                                <button id="pendants" type="button">Pendants</button>
                                </div>
                        </div>
                        </div>

                        <div class="row" id="manage-add">
                        <div class="col-sm-2">
                                <div class="manage-add-items">
                                <Link to="./manageitems.html" class="button" id="manage">Manage Items</Link>
                                <Link to="/additemform" class="button" id="add">Add Items</Link>
                                </div>
                        </div>
                        </div>
                </div>

                <section class="container">
                        <div class="grid col-sm-10">
                        <div class="item-card a">
                                <div class="img-section">
                                <img alt="" src="https://i.pinimg.com/564x/17/f4/73/17f4732c35e505e9cedda398edf37789.jpg"/>
                                </div>
                                <div class="item-img-name">
                                <p class="item-name">aaaa</p>
                                </div>
                                <div class="price-tag"> 
                                <p>Price: </p>
                                </div>
                                <div class="learn-btn">
                                <button href="./iteminfo.html" type="button" class="learn-more">Learn More</button>
                                </div>
                        </div>
                        <div class="item-card b">
                                <div class="img-section">
                                        <img alt="" src="https://i.pinimg.com/originals/09/87/bf/0987bf2df7375d1d0b88def3f1a49cdc.gif"/>
                                </div>
                                <div class="item-img-name">
                                        <p class="item-name">nasty</p>
                                </div>
                                <div class="price-tag"> 
                                        <p>Price: </p>
                                </div>
                                <div class="learn-btn">
                                        <button href="./iteminfo.html" type="button" class="learn-more">Learn More</button>
                                </div>
                        </div>
                        <div class="item-card c">
                                <div class="img-section">
                                        <img alt="" src="https://i.pinimg.com/564x/33/16/35/331635022668afe644788664346b1037.jpg"/>
                                </div>
                                <div class="item-img-name">
                                        <p class="item-name">pretty</p>
                                </div>
                                <div class="price-tag"> 
                                        <p>Price: </p>
                                </div>
                                <div class="learn-btn">
                                        <button href="./iteminfo.html" type="button" class="learn-more">Learn More</button>
                                </div>
                        </div>
                        <div class="item-card d">
                                <div class="img-section">
                                        <img alt="" src="https://i.pinimg.com/564x/57/22/2f/57222f1a6f35edbd7dbe2fcd0402309f.jpg"/>
                                </div>
                                <div class="item-img-name">
                                        <p class="item-name">vampire</p>
                                </div>
                                <div class="price-tag"> 
                                        <p>Price: </p>
                                </div>
                                <div class="learn-btn">
                                        <button href="./iteminfo.html" type="button" class="learn-more">Learn More</button>
                                </div>
                        </div>
                        <div class="item-card e">
                                <div class="img-section">
                                        <img alt="" src="https://i.pinimg.com/564x/67/a4/b5/67a4b575f1b095779b10f1f6dc9d6323.jpg"/>
                                </div>
                                <div class="item-img-name">
                                        <p class="item-name">dance</p>
                                </div>
                                <div class="price-tag"> 
                                        <p>Price: </p>
                                </div>
                                <div class="learn-btn">
                                        <button href="./iteminfo.html" type="button" class="learn-more">Learn More</button>
                                </div>
                        </div>
                        <div class="item-card f">
                                <div class="img-section">
                                <img alt="" src="https://i.pinimg.com/564x/31/44/65/314465f4a829ee1552da641f6947c704.jpg"/>
                                </div>
                                <div class="item-img-name">
                                        <p class="item-name">i want to believe</p>
                                </div>
                                <div class="price-tag"> 
                                        <p>Price: </p>
                                </div>
                                <div class="learn-btn">
                                        <button href="./iteminfo.html" type="button" class="learn-more">Learn More</button>
                                </div>
                        </div>
                        </div>
                </section>
                </div> 

                )
                */

}



export default Catalog;