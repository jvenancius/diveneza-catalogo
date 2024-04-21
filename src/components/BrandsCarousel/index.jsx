// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
// import './BrandsCarousel.css'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay} from 'swiper/modules';
// import 'swiper/css';


import { useState, useEffect } from "react"

function BrandsCarousel(props) {

	const [goingBack, setGoingBack] = useState(false)
	const time = 3000

	let slideStyle = {
		// translate: `${(goingBack ? -8000 * -1 : -6000) * offset}%`,
		translate: `${goingBack ? props.translation : 0}%`,
		// translate: "-831%",
		// translate: "-0%",
		// translate: "-0%",
		display: "block",
		flexShrink: 0,
		flexGrow: 0,
		transition: `translate ${goingBack ? 0 : time}ms`,
	}

	// function getOffsetedArr() {
	// 	let offsetedArray = []
	// 	for (let i = offset; i < props.brands.length; i++) {
	// 		offsetedArray.push(props.brands[i])
	// 	}
	// 	for (let i = 0; i < offset; i++) {
	// 		offsetedArray.push(props.brands[i])
	// 	}
	// 	return offsetedArray
	// }

	useEffect(() => {
		// let time = goingBack ? 0 : 2000
		// if (!goingBack) {
		// 	if (reallyNot) {
		// setTimeout(() => setGoingBack(!goingBack), 200)
		// 		setReallyNot(false)
		// 	}
		// }
		// console.log(goingBack)
		// if (stop === 2) {
			// console.log("stop")
		//
		//
			setTimeout(() => setGoingBack(!goingBack), time)
			// setStop(0)
		// } else {
			// setStop(stop + 1)
			// setGoingBack(!goingBack)
	}, [goingBack])
  return (
		<div style={{display:"flex", justifyContent:"center"}}>
		<div style={{width:props.containerSize, display: "flex", justifyContent:"space-evenly", marginTop:"32px", marginBottom:"32px", columnGap:"12px", overflow:"hidden"}}>
		{props.brands.map(brand => (
			<img key={"brand--" + brand + "1"} style={{...slideStyle, width: props.imgWidth}} src={"./assets/logos/" + brand} alt={brand.replace(/\.[^/.]+$/, "")}/>
		))}
		{props.brands.map(brand => (
			<img key={"brand--" + brand + "2"} style={{...slideStyle, width: props.imgWidth}} src={"./assets/logos/" + brand} alt={brand.replace(/\.[^/.]+$/, "")}/>
		))}
		{props.brands.map(brand => (
			<img key={"brand--" + brand + "3"} style={{...slideStyle, width: props.imgWidth}} src={"./assets/logos/" + brand} alt={brand.replace(/\.[^/.]+$/, "")}/>
		))}
</div>
</div>
	)
	// let itemStyle = {
	// 	-webkit-transition: 0s,
    // -o-transition: 0s,
    // transition: 10s,
// }
}

export default BrandsCarousel;


		// 	interval={50}
		// >
		// 	<Carousel.Item className='carousel--item' >
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/carrera.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/swarovski.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/Fendi.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/PRADA.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/carolina herrera.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/burberry.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/TOM FORD.png"/>
		// 	</Carousel.Item >
		// 	<Carousel.Item className='carousel--item' >
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/carrera.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/swarovski.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/Fendi.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/PRADA.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/carolina herrera.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/burberry.png"/>
		// 		<img style={{width: "100px", marginLeft: "16px"}} src= "./assets/logos/TOM FORD.png"/>
		// 	</Carousel.Item >
// </Carousel>
		// </div>
