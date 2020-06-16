import React from 'react';
import { Link } from "react-router-dom";
import { removeItem } from '../cartHelper';
import { API } from '../../config';

export default function CartCard({c,name, price, id}) {

    const [remove, setRemove] = React.useState(true);
    const [count, setCount] = React.useState(1);
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
           
        <div 
            className="card-btn"
            onClick={() => {
                setRemove(!remove);
                removeItem(c._id);
                window.location.reload();
            }}
        >
        <i className="fa fa-trash" aria-hidden="true"></i> Remove
        <span>
        <i className="fa fa-times" aria-hidden="true"></i> Remove
        </span>
        </div>
        <div>
        <i className="fa fa-minus-circle" aria-hidden="true" onClick={() => setCount(count>1? count-1: count )}></i>
        <span> quantity : {count} </span>  
        <i className="fa fa-plus-circle" aria-hidden="true" onClick={() => setCount(count+1)}></i>

        </div>
        </div>
        </div>
            )    :
            null
        
        }
        </div>
);
}
