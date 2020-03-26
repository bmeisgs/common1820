import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import * as itemActions from '../store/actions/itemActions'


const EditItem = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const item = useSelector((state) => {
        if (id === '0' || typeof state.item.items[id] === 'undefined') {
            return {
                id: '0',
                name: '',
                price: '',
                category: '',
                images: [],
                description: '',
                store: ''
            };
        }
        return state.item.items[id];
    });
    
    
    const handleFiles = () => {
        const files = document.getElementById("uploadInput").files;
        const images = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = ev => {
                images.push(ev.target.result);
            }
            reader.readAsDataURL(file);
        }
        console.log(images[0]);
        console.log(images);
    }
    
    const handleChange = (e) => {
        item[e.target.name] = e.target.value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.id === '0') {
            dispatch(itemActions.ITEM_ADD(itemActions.itemParams(item.name, item.price, item.category, item.images, item.description, item.store)));
        } else {
            dispatch(itemActions.ITEM_UPDATE(item));
        }
        history.push('/catalog');
    };


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">Product name: </label>
                <input type="text" id="name" name="name" defaultValue={item.name} onChange={handleChange} /> <br/>
                <label htmlFor="category">Choose product's category:</label>
                <select name="category" id="category" defaultValue={item.category} onChange={handleChange}>
                    <option value="earrings">Earrings</option>
                    <option value="rings">Rings</option>
                    <option value="pendants">Pendants</option>
                </select> <br/>
                <label htmlFor="price">Write the price of the product (UAH): </label>
                <input type="number" name="price" id="price" defaultValue={item.price} onChange={handleChange} /> <br/>
                
                <input type="file" id="uploadInput" onChange={handleFiles} defaultValue={item.images} />
                
                <label htmlFor="description">Add a description of the product: </label>
                <textarea name="description" id="description" rows="8" cols="40" defaultValue={item.description} onChange={handleChange}></textarea> <br/>
                <label htmlFor="store">Write the store(s) in which the product can be found:</label>
                <input type="text" name="store" id="store" defaultValue={item.store} onChange={handleChange}/> <br/>
                <button>Submit</button>
            </form>
            {/*
            <section class="container">
            <div class="col-sm-10">
                <form action="catalog.html" method="POST" onSubmit={this.handleSubmit}>
                    <section >
                        <label for="name">Product name:</label>
                        <input type="text" name="name" id="name"/>
                    </section>
                    <hr/>

                    <section>
                        <label for="category">Choose product's category:</label>
                        <select name="category" id="category">
                            <option value="earrings">Earrings</option>
                            <option value="rings">Rings</option>
                            <option value="pendants">Pendants</option>
                        </select>
                    </section>
                    <hr/>
    
                    <section>
                        <label for="price">Write the price of the product (UAH):</label>
                        <input type="number" name="price" id="price"/>
                    </section>
                    <hr/>
    
                    <section>
                        <label for="mainimage">Choose product's main image from your device:</label>
                        <input type="file" name="mainImage"/>
                    </section>
                    <hr/>
    
                    <section>
                        <label for="additionalmedia">Choose product's additional pictures and/or videos from your device:</label>
                        <input type="file" name="additionalMedia" multiple/>
                    </section>
                    <hr/>
    
                    <section class="description-class">
                        <label for="description">Add a description of the product: </label>
                        <textarea name="description" id="description" rows="8" cols="40"></textarea>
                    </section>
                    <hr/>

                    <section>
                        <label for="store">Write the store(s) in which the product can be found:</label>
                        <input type="text" name="store" id="store"/>
                    </section>
                    <hr/>

                    <section>
                        <input type="submit" value="DONE"/>
                    </section>
                </form>
            </div>
        </section>   */}
        </div>
    );
}


/*
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: dispatch({type: 'ADD_ITEM'})
    }
}

export default connect(null, mapDispatchToProps)(AddItem)
*/

export default EditItem;