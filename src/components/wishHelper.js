export const addWish = (item) => {
    let wish= [];
    if(typeof window!== 'undefined') {
        if(localStorage.getItem('wish')){
            wish = JSON.parse(localStorage.getItem('wish'))
        }
        wish.push({
            ...item,
            count:1
        }); 

        wish = Array.from(new Set(wish.map((p)=> (p._id)))).map((id) => {
            return wish.find(p => p._id === id);
        });

        localStorage.setItem('wish', JSON.stringify(wish));
        
    }
};

export const WishTotal = () => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('wish')) {
            return JSON.parse(localStorage.getItem('wish')).length
        }
    }
    return 0;
};

export const getWish = () => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('wish')) {
            return JSON.parse(localStorage.getItem('wish'));
        }
    }
    return [];
};

export const removeWish = (wishId) => {
    let wish = [];
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('wish')) {
            wish = JSON.parse(localStorage.getItem('wish'))
        }
        wish.map((plan, i) => {
            if(plan._id === wishId) {
                wish.splice(i, 1)
            }
        });
        localStorage.setItem('wish', JSON.stringify(wish));
    }
    return wish;
};

export const emptyWish = () => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem('wish');
    }
};

