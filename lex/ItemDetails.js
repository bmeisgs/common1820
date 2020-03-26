
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const ItemDetails = () => {
    
    const { id } = useParams();
    const itm = useSelector((state) => {
        console.log(state)
        console.log(state.item.items[id])
        return state.item.items[id];
    })
    
    return (
        
        <div>
            <img alt="" src={itm.images}/>
            <h4>{itm.name}</h4>
            <p>{itm.description}</p>
            <div>Price: {itm.price}</div>
            <div>Store: {itm.store}</div>
        </div>
    ) 
}

/*
const ItemDetails = (item) => {
    
    return (
        <div>
            <img alt="" src={item.img}/>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div>Price: {item.price}</div>
            <div>Store: {item.store}</div>
        </div>
    ) 
    

}


const ItemDetails = (id) => {
    const items = useSelector(state => state.item.items)
    const itemKeys = Object.keys(items);
    const item = itemKeys.map(itemKey => {
        const item = items[itemKey]
        
        return (
            <div>
                <img alt="" src={item.img}/>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div>Price: {item.price}</div>
                <div>Store: {item.store}</div>
            </div>
        ) 
        
    })
    return (
        <div>{item}</div>
    )
}
*/

export default ItemDetails;
