import React from 'react';
import { Link } from "react-router-dom";
import './card.scss';
import { addItem, removeItem } from '../cartHelper';
import { addWish, removeWish } from '../wishHelper';
import { API } from '../../config';

export default function Cards({c,name, price, id}) {

    const [add, setAdd] = React.useState(true);
    const [wish, setWish] = React.useState(true);
    const badgecolor = 1 ? '#75D359' : '#F54646';
  return (
    <div className="card" style={{marginTop:10, backgroundImage:`url(${API}/product/photo/${id})`, backgroundSize:"200px 190px"}}>
        <div className="card-menu" >
        { wish ?
            <i className="fas fa-heart" 
            onClick={() => {
                setWish(!wish);
                addWish(c);
            }}></i>
        :
        <i className="fas fa-heart" style={{color:'black'}} 
            onClick={() => {
                setWish(!wish);
                removeWish(c._id);
            }}></i>
        }
        { add ?
            <i className="fas fa-cart-plus" 
            onClick={() => {
                setAdd(!add);
                addItem(c);
            }
            }></i>
        :
        <i className="fas fa-cart-plus" style={{color:'black'}} 
            onClick={() => {
                setAdd(!add);
                removeItem(c._id);
            }}></i>
        }
        </div>
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
            {wish ?
            <div 
                className="card-btn" 
                onClick={() => {
                    setWish(!wish);
                    addWish(c);
                }}
            >
            ADD TO  <i className="fa fa-heart" aria-hidden="true"></i>
            <span>
            ADD TO  <i className="fa fa-heart" aria-hidden="true"></i>
            </span>
            </div>
            :
            <div 
                className="card-btn"
                onClick={() => {
                    setWish(!wish);
                    removeWish(c._id);
                }}
            >
            <i className="fa fa-check" aria-hidden="true"></i> Added to <i className="fa fa-heart" aria-hidden="true"></i>
            <span>
            <i className="fa fa-check" aria-hidden="true"></i> Added to <i className="fa fa-heart" aria-hidden="true"></i>
            </span>
            </div>
            }
        </div>
    </div>
);
}
