import React, { useState } from 'react';
import './card.css';
import { API } from "../../config";
import {  getSubCategoriesbyCategory } from "../apiCore";
import { useEffect } from 'react';

const CategoryCard = ({name}) => {

    const [subCategory, setSubCategory] = useState([]);
    const [load, loaded] = useState(false);
    const [error, setError] = useState(false);

    const init = () => {
        getSubCategoriesbyCategory(name).then(data => {
            if(data.error){
                setError(!error);
            }
            setSubCategory(data);
            loaded(true);
        })
    }
    useEffect(() => {
        init();
    },[]);

    return(
        <div className="box3">
            {
                load ?
                (
                    subCategory.data.map((sub) => (
                        // <div>
                        // <div className="content" style={{backgroundImage:`${API}/subcategory/photo/${sub._id}`}}>
                        //     {/* <img src={`${API}/subcategory/photo/${sub._id}`} /> */}
                        //     <div className="title">{sub.name}</div>
                        //     <div className="copy"></div>
                        //     <div className="button"></div>
                        // </div>
                        // </div>
                
                            <div className="card2" 
                                style={{backgroundImage:`url(${API}/subcategory/photo/${sub._id})`, 
                                backgroundSize:"cover", 
                                backgroundRepeat:'no-repeat',
                                }}
                                key={sub.name}
                                >
                            <div className="card-footer2">
                                <h2 align="center"><b>{sub.name}</b></h2>
                            </div>
                            </div>
                    ))
                ): null
            }
        </div>
    );
}

export default CategoryCard;
