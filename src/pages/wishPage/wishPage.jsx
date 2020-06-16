import React,{ useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { ReactComponent as Wish } from "../../assets/svg/wish.svg";
import { getWish } from '../../components/wishHelper';
import WishCard from '../../components/wishCard/wishCard';

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        setItems(getWish);
    },[]);
    
    const showItems = (items) => {
        return(
            <div>
                <br />
                <h2>Your have {`${items.length}`} items  in your Wishlist</h2>
                <hr/>
                <div className="box">
                {items.map((product,i) => (
                    <WishCard 
                        key={i} 
                        c={product} 
                        name={product.name}
                        id={product._id}
                        price={product.price}
                    /> ))}
                </div>
            </div>
        );
    };

    const noItemsMessage = () => (
        <div style={{textAlign:'center'}}>
        <h2>Your Wishlist is empty</h2>
        <h2><Link to="/store"> Continue shopping</Link></h2>
        <div>
        <Wish />
        </div>
        </div>
    );

    return (
        <div>
        <div className="row">
            <div className="col-6">
               {items.length && items.length >0 ? showItems(items) : noItemsMessage()}
            </div>
        </div>
          <Footer /> 
        </div>
        );
};

export default Cart;
