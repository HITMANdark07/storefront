import { API } from '../config';
import queryString from 'query-string';

export const getProducts = (limit) => {
    return fetch(`${API}/products?limit=${limit}`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};



export const getCategories = () => {
    return fetch(`${API}/category/list`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};

export const getSubCategories = () => {
    return fetch(`${API}/subCategory/list`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};

export const getSubCategoriesbyCategory = (id) => {
    return fetch(`${API}/subCategory/category/${id}`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};

export const getBanner = (limit) => {
    return fetch(`${API}/banner/list?limit=${limit}`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};

export const getCarousal = (limit) => {
    return fetch(`${API}/carousal/list?limit=${limit}`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};

export const getTrendingBanner = (limit) => {
    return fetch(`${API}/trendingbanner/list?limit=${limit}`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};


export const getFilteredProducts = (skip, limit, filters={}) => {
    const data = { limit, skip, filters};
    return fetch(`${API}/products/by/search`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        });
    };

export const list = (params) => {
    const query = queryString.stringify(params);
    console.log("query", query);
    return fetch(`${API}/products/search?${query}`, {
        method:"GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(error => console.log(error));
};

export const read = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};

export const listRelated = (productId) => {
    return fetch(`${API}/products/related/${productId}`, {
        method:"GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(error => console.log(error));
};

export const createOrder = (userId, token, createOrderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .catch(error => console.log(error));
};


