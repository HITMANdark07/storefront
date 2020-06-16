import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import { getCategories } from "../../components/apiCore";
import ShowCategory from '../../components/showCategory/showCategory';
import { Link } from 'react-router-dom';

const Store = () => {

    const [catogery, setCategory] = useState([]);
    const [Error, setError] = useState('');

    const init = () => {
        getCategories().then(data => {
            if(data.error){
                setError(data.error);
            }
            setCategory(data);
        });
    }

    useEffect(() => {
        init();
    },[]);

    return(
        <div style={{textAlign:'center'}}>
            <h1>Browse Categories</h1>
            <h3>Browse</h3>
            <div className="box">
            {
                catogery.map((c) => (
                    <Link to={`/subcategory/${c._id}`}><ShowCategory cat={c} key={c._id} /></Link>
                ))
            }
            </div>
            <br />
            <br/>
            <br />
            <Footer />
        </div>
    );
}

export default Store;