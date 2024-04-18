import ScrollToBtn from '../Buttons/ScrollToBtn'
import DividerLine from '../DividerLine'
import './CategoriesBanner.css'

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CategoriesBanner(props) {
  return (
<Swiper 
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
		style={{height:"80vh"}}

>
			{props.categories.map(categoryId => {
				return (
					<SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
								height: "80%"
            }}
					>
						<div style={{backgroundImage: "url(./assets/categorias/" + categoryId.imagemCatergoria + ")", backgroundRepeat:"no-repeat", height: "100%", width: "100%", backgroundSize:"contain", backgroundPosition:"center", display: "flex", justifyContent: "center"}}>
							<div style={{position:"absolute", bottom: "64px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "20%", alignContent:"flex-end"}}>
								<DividerLine width="20%" height="2%" color="white" />
								<h1 style={{color:"white"}}>{categoryId.titulo}</h1>
								<ScrollToBtn
									nome="VER MAIS"
									categoria={categoryId.titulo.toUpperCase()}
									btnStyle={{...props.btnStyle, width: "148px"}}
								/>
							</div>
						</div>
					</SwiperSlide>
				)
			})}
      </Swiper>
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
