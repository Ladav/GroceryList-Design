const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_ITEM':
            return {
                ...state,
                items: state.items.concat({ id: new Date().getTime(), ...action.item })
            };
        case 'DELETE_ITEM':
            const updatedItems = state.items.filter(item => item.id !== action.itemId);
            return {
                ...state,
                items:  updatedItems
            };
        default: return state;
    }
};

export default reducer;