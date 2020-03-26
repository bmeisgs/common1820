const defaultState = {
    items: {}
};



export default (state = defaultState, action) => {
    let id;
    let newState;
    switch (action.type) {
        case 'ITEM_LOAD':
            newState = {};
            action.payload.forEach(doc => {
                newState[doc.id] = {...doc};
            });
            return {
                ...state,
                items: newState
            }
        case 'ITEM_ADD':
            id = action.payload.id;
            return {
                ...state,
                items: {...state.items, [id]: action.payload}
            };
        case 'ITEM_UPDATE':
            id = action.payload.id;
            return {
                ...state,
                items: {
                    ...state.items,
                    [id]: action.payload
                }
            };
        case 'ITEM_DELETE':
            id = action.id;
            newState = {...state, items: {...state.items}};
            delete newState.items[id];
            return newState;
        default:
            return { ...state };
    }
};

