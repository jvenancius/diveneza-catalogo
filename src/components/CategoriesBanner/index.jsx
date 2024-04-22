import ScrollToBtn from '../Buttons/ScrollToBtn'
import DividerLine from '../DividerLine'
import './CategoriesBanner.css'

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CategoriesBanner(props) {
	if (props.size[0] < props.size[1] && props.size[0] < 820) {
		return (
			<Swiper
				slidesPerView={1}
				loop={true}
				centeredSlides={true}
				spaceBetween={(props.size[0] - 332) * -1}
				navigation={true}
				modules={[Navigation]}
				style={{height: props.heightStyle}}
				className='categories--banner--swiper'
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
							<div loading="lazy" style={{minWidth: "500px", backgroundImage: "url(./assets/categorias/" + categoryId.imagemCatergoria + ")", backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "contain", backgroundPosition: "center", display: "flex", justifyContent: "center"}}>
								<div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
									<div style={{marginTop: "auto", marginBottom: "32px"}}>
						<div style={{flexDirection: "column", display:"flex", justifyContent: "space-evenly", alignItems:"flex-start"}}>
										<DividerLine width="25px" height="3px" color="white" style={{flexShrink: "0", flexGrow: "0", flexBasis: "0"}} />
										<h1 style={{marginBottom:"12px", color: "white", ...props.titleStyle}}>{categoryId.titulo}</h1></div>
										<ScrollToBtn
											nome="VER MAIS"
											categoria={categoryId.titulo.toUpperCase()}
											btnStyle={{...props.btnStyle, width:"70%", aspectRatio:"8/2"}}
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
					width: "100%",
					aspectRatio:"20/5",
					justifyContent: "space-around",
					marginLeft: props.size[0] < 720 ? "10%" : "0",
					marginRight: props.size[0] < 720 ? "10%" : "0",
			}}>
				{props.categories.map(categoryId => {
					return (
							<div key={categoryId.titulo} style={{backgroundImage: "url(./assets/categorias/" + categoryId.imagemCatergoria + ")", backgroundRepeat: "no-repeat", width: "20%", aspectRatio:"4/5", flexGrow:"0", backgroundSize: "contain", backgroundPosition: "center", display: "flex", justifyContent: "center"}}>
								<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%",...props.descriptionStyle }}>
									<div style={{marginTop: "auto", marginBottom: "30%"}}>

								<div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
										<DividerLine width="25px" height="3px" color="white" style={{flexShrink: "0", flexGrow: "0", flexBasis: "0"}} />
										<h1 style={{color: "white", ...props.titleStyle}}>{categoryId.titulo}</h1>
						</div>
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
