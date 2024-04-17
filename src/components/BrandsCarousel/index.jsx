import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './BrandsCarousel.css'

function BrandsCarousel(props) {
	// let itemStyle = {
	// 	-webkit-transition: 0s,
    // -o-transition: 0s,
    // transition: 10s,
// }
  return (
		<div className='BrandsCarousel'>
		<Carousel className="Carousel"
			controls={false}
			indicators={false}
			interval={50}
		>
			<Carousel.Item className='carousel--item' >
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/carrera.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/swarovski.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/Fendi.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/PRADA.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/carolina herrera.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/burberry.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/TOM FORD.png"/>
			</Carousel.Item >
			<Carousel.Item className='carousel--item' >
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/carrera.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/swarovski.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/Fendi.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/PRADA.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/carolina herrera.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/burberry.png"/>
				<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/TOM FORD.png"/>
			</Carousel.Item >
</Carousel>
		</div>
	);
}

export default BrandsCarousel;


