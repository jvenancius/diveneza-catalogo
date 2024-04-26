import Banner from '../index.jsx'
import DividerLine from '../../DividerLine'
import React, { useLayoutEffect, useState } from "react";

function Banner2() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const img = size[0] < 750 ? "./assets/capa mobile - banner 2_limpo.png" : size[0] < 1250 ? "./assets/banner 2 - cupom_semi_mobile.png" : "./assets/banner 2 - cupom_limpo.png"

	let text = (
				<div className="banner--content--inside" style={ size[0] < 1250 ? size[0] > 930 ? {position:"relative", left:"-200px"} : {margin:"auto", marginTop: size[0] < 750 ? "68%" : "auto", marginLeft: size[0] < 750 ? "10vw" : "5vw" } : {position:"relative", left:"-300px"}}>
									<h2 style={{marginBottom: size[0] < 750 ? "4%" : "5%", fontSize:size[0] > 750 ? "32px" : "5vw",color: size[0] >= 750 ? "black" : "white" }}>Especial Dia das Mães</h2>
			<DividerLine width={size[0] > 750 ? "200px" : "24vw"} height="4px" color={size[0] >= 750 ? "black" : "white"} />
									<h1 style={{marginTop:size[0] < 750 ? "3%" : "3%", marginBottom:size[0] < 750 ? "4%" : "6%", color: size[0] >= 750 ? "black" : "white",lineHeight: "1.18", fontWeight: 700, textJustify:"none", width: size[0] > 750 ? "400px" : "50vw", fontSize: size[0] > 750 ? "54px" : "7vw"}}>GANHE 10% DE DESCONTO</h1>
									<p style={{color: size[0] >= 750 ? "black" : "white",textJustify:"none", fontSize: size[0] > 750 ? "26px" : "3.5vw", width: size[0] > 730 ? "450px" : "60vw", lineHeight:"1.18", marginBottom:size[0] < 750 ? "6%" : "8%"}}>Celebre o Dia das Mães com um presente especial! Aproveite este cupom exclusivo para obter 10% de desconto em lentes de alta qualidade.</p>
									<h3 style={{fontWeight:"700", fontSize: size[0] > 750 ? "24px" : "3vw", color: size[0] >= 750 ? "black" : "white"}}>Código do cupom: MAES10</h3>
								</div>
	)
  return (
		<Banner
								bannerStyle={{height: size[0] < 750 ? "auto": "571px", aspectRatio: size[0] >= 750 ?  "auto" : "200/261", backgroundPosition: "right", backgroundSize: size[0] >= 640 ? "cover" : "contain"}}
								bannerImg={img}
								contentWidth="100%"
							>
							{text}
							</Banner>
  );
}

export default Banner2;
