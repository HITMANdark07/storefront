import React from 'react';
import { API } from "../../config";

const ShowCategory = ({cat}) => {

    return(
        <div className="card2" 
                style={{backgroundImage:`url(${API}/category/photo/${cat._id})`, 
                backgroundSize:"cover", 
                backgroundRepeat:'no-repeat',
                }}
                key={cat.name}
                >
                <div className="card-footer2">
                    <h2 align="center"><b>{cat.name}</b></h2>
                </div>
        </div>
    );
}

export default ShowCategory;