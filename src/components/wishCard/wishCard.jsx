import React from 'react';
import { Link } from "react-router-dom";
import { addItem, removeItem } from '../cartHelper';
import { removeWish } from '../wishHelper';
import { API } from '../../config';

export default function WishCard({c,name, price, id}) {

    const [remove, setRemove] = React.useState(true);
    const [add , setAdd] = React.useState(true);
    const badgecolor = 1 ? '#75D359' : '#F54646';
  return (
        <div style={{display:'flex', flexDirection:'row', flexWrap:"wrap"}}>
            {remove ?
            (
                <div className="card" style={{marginTop:10, backgroundImage:`url(${API}/product/photo/${id})`, backgroundSize:"200px 190px"}}>
        
        <div className="card-footer">
        
        <div className="badge" style={{color:'white', textAlign:'center', backgroundColor:badgecolor}}>
        {1? "In Stock" : "Out of Stock"}
        </div>
        <Link to="/item/page">
        <div style={{color:'black'}}>
        <u>{name}</u>
        </div>
        </Link>
        <div className="price">
        ₹ {price}
        </div>
        {add ?
            <div 
                className="card-btn" 
                onClick={() => {
                    setAdd(!add);
                    addItem(c);
                }}
            >
            ADD TO  <i className="fa fa-cart-plus" aria-hidden="true"></i>
            <span>
            ADD TO  <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </span>
            </div>
            :
            <div 
                className="card-btn"
                onClick={() => {
                    setAdd(!add);
                    removeItem(c._id);
                }}
            >
            <i className="fa fa-check" aria-hidden="true"></i> Added to <i className="fa fa-cart-plus" aria-hidden="true"></i>
            <span>
            <i className="fa fa-check" aria-hidden="true"></i> Added to <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </span>
            </div>
            }
            <div 
            className="card-btn"
            onClick={() => {
                setRemove(!remove);
                removeWish(c._id);
                window.location.reload();
            }}
        >
        <i className="fa fa-trash" aria-hidden="true"></i> Remove
        <span>
        <i className="fa fa-times" aria-hidden="true"></i> Remove
        </span>
        </div>
        </div>
        </div>
            )    :
            null
        
        }
        </div>
);
}
