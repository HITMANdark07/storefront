import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { API } from "../../config";

let styles = {
    width: '100%',
	position: 'relative',
	borderRadius:'10%',
    height: '20%'
  };
  
const DemoCarousel = ({data}) => {
  return (
	<div style={styles}>
		<Carousel>
		{data.map((carousel) => (
		
			<div key={carousel.name}>
				<img src={`${API}/carousal/photo/${carousel._id}`} alt={carousel.name} />
				<p className="legend">{carousel.name}</p>
			</div>
		
		))}
		</Carousel>
	</div>
  );
}

export default DemoCarousel;