import React,{ useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { getCart } from '../../components/cartHelper';
import bag from '../../assets/img/bag.png';
import CartCard from '../../components/cartcard/cartcard';

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        setItems(getCart);
    },[]);
    
    const showItems = (items) => {
        return(
            <div style={{textAlign:'center'}}>
                <br />
                <h2>Your Cart has {`${items.length}`} items </h2>
                <hr/>
                <div className="box">
                {items.map((product,i) => (
                    <CartCard 
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
            <h2>Your Cart is empty</h2>
            <h2><Link to="/store"> Continue shopping</Link></h2>
            <img src={bag} alt="bag" height="80%" width="80%"/>
        </div>
    );

    return (
        <div>
        <div className="row">
            <div className="col-6">
               {items.length && items.length >0 ? showItems(items) : noItemsMessage()}
            </div>
            {items.length && items.length>0 ?
            
            (<div style={{textAlign:'center'}}>
                <h2 className="mb-4">Your cart summary</h2>
                <hr />
                <div>CHECK OUT</div>
                <br/>
                <br />
                <br/>
                <br />
            </div>)
            :
            null        
            }
        </div>
          <Footer /> 
        </div>
        );
};

export default Cart;
