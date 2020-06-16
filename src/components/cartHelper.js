export const addItem = (item) => {
    let cart= [];
    if(typeof window!== 'undefined') {
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.push({
            ...item,
            count:1
        }); 

        cart = Array.from(new Set(cart.map((p)=> (p._id)))).map((id) => {
            return cart.find(p => p._id === id);
        });

        localStorage.setItem('cart', JSON.stringify(cart));
        
    }
};

export const ItemTotal = () => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).length
        }
    }
    return 0;
};

export const getCart = () => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'));
        }
    }
    return [];
};

export const removeItem = (planId) => {
    let cart = [];
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.map((plan, i) => {
            if(plan._id === planId) {
                cart.splice(i, 1)
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
};

export const emptyCart = () => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem('cart');
    }
};

