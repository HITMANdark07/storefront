import React from 'react';
import  "./trending.css";
import { API } from "../../config";

const Trending = ({data}) => {
    return (
        <ul className="card-list" >
	{data.map((tb) => (
		<li className="card1" key={tb.name}>
		<div className="card-image" >
			<img src={`${API}/trendingbanner/photo/${tb._id}`} alt={tb.name} />
		</div>
		<div className="card-description" >
			<h2>{tb.name}</h2>
			<p>{tb.name}</p>
		</div>
		</li>
	))}
    </ul>
    );
}

export default Trending;