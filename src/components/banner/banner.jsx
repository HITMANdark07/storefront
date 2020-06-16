import React from 'react';
import {API} from "../../config";
import "./banner.css";

const Banner = ({img, name}) => {
    
    return (
        <div className="banner" key={name}>
            <img className="responsive" src={`${API}/banner/photo/${img}`} alt={name}/>
        </div>
    );
}
 
export default Banner;