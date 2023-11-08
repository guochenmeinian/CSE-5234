const getTotalCost = (items) => {
    return items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
};

export default getTotalCost;