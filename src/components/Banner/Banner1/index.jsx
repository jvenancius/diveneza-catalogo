import Banner from '../index.jsx'
import DividerLine from '../../DividerLine'
import React, { useLayoutEffect, useState } from "react";

function Banner1() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const img = size[0] < 600 ? "./assets/capa mobile - banner 1.png" : size[0] < 1000 ? "./assets/capa site - compre online_mobile.png" : "./assets/capa site - compre online.png"

	let text = (
					<div className="banner--content--inside" style={{width: "300px", margin: "auto", display: "flex", flexDirection: "column", marginLeft: size[0] < 600 ? "5%" : "auto", marginRight: size[0] < 600 ? "auto" : size[0] < 1000 ? "45%" : size[0] <= 1250 ? "60%" : size[0] <= 1520 ? "50%" : "40%"}}>
									<h2 style={{fontSize:"20px", fontWeight: "700", marginBottom: "8px"}}>Atendimento Personalizado</h2>
									<DividerLine width="62px" height="3px" color="white" />
			<h1 style={{fontWeight: 700, marginTop: "8px", fontSize: "250%", width: size[0] < 750 ? "50%" : "100%", textJustify:"none"}}> COMPRE SEM SAIR DE CASA</h1>
									<p style={{paddingTop: "8px", textJustify: size[0] > 750 ? "inter-character" : "none", width: size[0] < 750 ? "90%" : "100%", fontSize: size[0] < 750 ? "120%" : "130%", lineHeight:"1.2" }}>Confira nossos modelos disponíveis, compre e receba no conforto da sua casa óculos das melhores e mais renomadas marcas do mundo.</p>
								</div>
	)
  return (
		<Banner
								bannerStyle={{height: size[0] <= 400 ? "522px": "570px", backgroundPosition: "right", backgroundColor: size[0] >= 400 ? "#bcafac" : "transparent", backgroundSize: size[0] >= 400 ? "cover" : "contain"}}
								bannerImg={img}
								contentWidth="100%"
							>
							{text}
							</Banner>
  );
}

export default Banner1;
