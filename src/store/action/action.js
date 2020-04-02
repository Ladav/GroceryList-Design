export const addItemHandler = (item) => {
    return {
        type: 'STORE_ITEM',
        item: item
    };
};

export const deleteItemHandler = (id) => {
    return {
        type: 'DELETE_ITEM',
        itemId: id
    };
};
