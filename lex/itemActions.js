import * as commonActions from './common'


let currId = 0;
const ITEM_COLLECTION_NAME = 'items';

const collectionRef = (fbInstance) => {
    return commonActions.getMeADatabase(fbInstance).collection(ITEM_COLLECTION_NAME);
}

export const ITEM_LOAD = () => {
    return (dispatch, getState, fbInstance) => {
        collectionRef(fbInstance).get().then((data) => {
            const items = [];
            data.forEach((item) => {
                const itm = item.data();
                // filter out "blank document" that was used to initialize the collection
                if (itm.id !== 'id0') {
                    items.push(itm);
                    // this is so that when we create new items after a sync, we start w/ unused IDs
                    const idNum = parseInt(itm.id.substr(2));
                    if (idNum > currId) {
                        currId = idNum;
                    }
                }
            })
            dispatch({
                type: 'ITEM_LOAD',
                payload: items
            });
        });
    };
}

export const ITEM_ADD = (stuff) => {
    return (dispatch, getState, fbInstance) => {
        collectionRef(fbInstance).doc(stuff.id).set({...stuff}).then(() => {
            dispatch({
                type: 'ITEM_ADD',
                payload: stuff
            });
        });
    };
};

export const ITEM_UPDATE = (stuff) => {
    return (dispatch, getState, fbInstance) => {
        collectionRef(fbInstance).doc(stuff.id).update({...stuff}).then(() => {
            dispatch({
                type: 'ITEM_UPDATE',
                payload: stuff
            });
        });
    };
};

export const ITEM_DELETE = (id) => {
    return (dispatch, getState, fbInstance) => {
        collectionRef(fbInstance).doc(id).delete().then(() => {
            dispatch({
                type: 'ITEM_DELETE',
                id
            });
        });
    };
};

export const itemParams = (name, price, category, img, description, store) => ({
    id: 'id' + ++currId,
    name,
    price,
    category,
    images: [],
    description,
    store
});

// name: 'smth', price: '13', category: 'rings', img: 'https://i.pinimg.com/564x/17/f4/73/17f4732c35e505e9cedda398edf37789.jpg', description: 'idgaf', store: 'up ur butt',  id: '1'

/*
export const addItem = (item) => {
    return (dispatch, getState, fbInstance) => {
        console.log(fbInstance);
        const db = fbInstance().firestore();
        console.log(db);
        
    }
};
*/