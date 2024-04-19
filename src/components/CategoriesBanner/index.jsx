import ScrollToBtn from '../Buttons/ScrollToBtn'
import DividerLine from '../DividerLine'
import './CategoriesBanner.css'

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CategoriesBanner(props) {
	console.log(props.heightStyle)
	if (props.size[0] < props.size[1]) {
		return (
			<Swiper
				slidesPerView={1}
				loop={true}
				centeredSlides={true}
				spaceBetween={-120}
				navigation={true}
				modules={[Navigation, Pagination]}
				style={{height: props.heightStyle}}
			>
				{props.categories.map(categoryId => {
					return (
						<SwiperSlide
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: props.heightStyle,
							}}
						>
							<div style={{backgroundImage: "url(./assets/categorias/" + categoryId.imagemCatergoria + ")", backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "contain", backgroundPosition: "center", display: "flex", justifyContent: "center"}}>
								<div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", }}>
									<div style={{marginTop: "auto", marginBottom: "32px"}}>
										<DividerLine width="25px" height="3px" color="white" style={{flexShrink: "0", flexGrow: "0", flexBasis: "0"}} />
										<h1 style={{color: "white", ...props.titleStyle}}>{categoryId.titulo}</h1>
										<ScrollToBtn
											nome="VER MAIS"
											categoria={categoryId.titulo.toUpperCase()}
											btnStyle={{...props.btnStyle}}
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		)
	}
		return (
			<div style={{display: "flex",
				height: props.heightStyle,
					justifyContent: "space-evenly",
					marginLeft: "10%",
					marginRight: "10%"
			}}>
				{props.categories.map(categoryId => {
					return (
							<div style={{backgroundImage: "url(./assets/categorias/" + categoryId.imagemCatergoria + ")", backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "contain", backgroundPosition: "center", display: "flex", justifyContent: "center"}}>
								<div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", }}>
									<div style={{marginTop: "auto", marginBottom: "32px"}}>
										<DividerLine width="25px" height="3px" color="white" style={{flexShrink: "0", flexGrow: "0", flexBasis: "0"}} />
										<h1 style={{color: "white", ...props.titleStyle}}>{categoryId.titulo}</h1>
										<ScrollToBtn
											nome="VER MAIS"
											categoria={categoryId.titulo.toUpperCase()}
											btnStyle={{...props.btnStyle}}
										/>
									</div>
								</div>
							</div>
					)
				})}
			</div>
		)
	}

export default CategoriesBanner;


    // <div className="banner--categories">
			// <div className="categories">
				// {props.categories.map(categoryId => {
					// return (
						// <div className="category--card" style={{backgroundImage: "url(./assets/categorias/" + categoryId.imagemCatergoria + ")"}}>
							// <div className="category--card--info">
									// <DividerLine width="30px" height="3px" color= "white"/>
									// <h1>{categoryId.titulo}</h1>
									// <ScrollToBtn className="category--btn"
										// nome="VER MAIS"
										// categoria={categoryId.titulo.toUpperCase()}
										// btnStyle={{...props.btnStyle, width: "128px", marginTop: "10px"}}
									// />
						// </div>
					// </div>
					// )
				// })}
			// </div>
		// </div>
