import './App.css';
import Category from './components/Category'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import ScrolltoBtn from './components/Buttons/ScrollToBtn'
import CategoriesBanner from './components/CategoriesBanner';
import BrandsCarousel from './components/BrandsCarousel'
import DividerLine from './components/DividerLine'
import CardCarousel from './components/CardCarousel'
import React, { useLayoutEffect, useState, useEffect } from "react";
import cardsData from './data/cards.json'

function App() {
	const [size, setSize] = useState([0, 0]);
	const minWidth = 1170
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	const paleta = {
		colorido: "#ead8ca",
		branco: "#FFFFFF",
		cinza: "#F4F4F4",
		escrita: "#444040"

	}
	const cardsEstilos = {
		comBordas:
		{
			border: "4px solid" + paleta.colorido,
			backgroundColor: paleta.branco,
			aspectRatio: size[0] < size[1] ? "7/9" : "7/9",
		},
		semBordas:
		{
			border: "none",
			backgroundColor: paleta.colorido,
			aspectRatio: size[0] < size[1] ? "7/9" : "6/9",
		}
	}

	const estilosBotao = {
		bannerBtn: {
			backgroundColor: "white",
			color: "black",
			// marginTop: "32px",
			// width: size[0] < size[1] ? "120px":"200px",
			// width: "100%",
			// height: "40px",
			borderRadius: "50px",
			fontSize: size[0] < size[1] ? minWidth > size[0] ? size[0]/42 + "px" : "32px" : Math.min(size[0]/110, 32) + "px",
			aspectRatio: size[0] < size[1] ? "4/1" : "5/1",
			width: size[0] < size[1] ? "30%" : size[0] > (minWidth + 350) ? "10%" : "180px",
			// flexShrink: "0",
			paddingLeft: "2%",
			paddingRight: "2%",
			display: "flex",
			justifyContent: "center",
			alignContent:"center",
			alignItems: "center",
			textDecoration: "none"
		},
		produtoBtn: {
			backgroundColor: "black",
			color: "white",
			marginTop: "16px",
			// width: "280px",
			// height: "64px",
			borderRadius: "50px",
			fontSize: size[0] < size[1] ? Math.min(size[0] / 16, 20) + "px" : size[0] < minWidth ? size[0] / 60 + "px" : "22px",
		}
	}

	const [categoriesData, setCategoriesData] = useState([
		{
			titulo: "Mãe Clássica",
			imagemCatergoria: "Classica.png",
			bgCategoria: "#F4F4F4",
			banner: "",
			cardStyle: cardsEstilos.semBordas,
			btnBg: paleta.branco,
			btnFg: paleta.escrita,
			frameColor: paleta.branco,
			cards: []
		},
		{
			titulo: "Mãe Moderna",
			imagemCatergoria: "Moderna.png",
			bgCategoria: "#F4F4F4",
			cardStyle: cardsEstilos.semBordas,
			btnFg: paleta.escrita,
			btnBg: paleta.branco,
			frameColor: paleta.branco,
			banner: <Banner 
								bannerStyle={{height: "570px", backgroundPosition: "right", backgroundColor:"#bcafac"}}
								bannerImg="./assets/capa site - compre online.png"
								contentWidth="100%"					
							>
								<div className="banner--content--inside" style={{width: "300px"}}>
									<h2 style={{fontSize:"20px", fontWeight: "700", marginBottom: "8px"}}>Atendimento  Personalizado</h2>
									<DividerLine width="62px" height="3px" color="white" />
									<h1 style={{fontWeight: 700, textJustify:"inter-character", marginTop: "8px"}}> COMPRE SEM SAIR DE CASA </h1>
									<p style={{paddingTop: "8px", fontSize: "18px" }}>Confira&ensp;nossos&ensp;modelos&ensp;disponíveis,&ensp;compre&ensp;e&ensp;receba&ensp;no&ensp;conforto&ensp;da&ensp;sua&ensp;casa&ensp;óculos&ensp;das&ensp;melhores&ensp;e&ensp;mais&ensp;renomadas&ensp;marcas&ensp;do&ensp;mundo.</p>
								</div>
							</Banner>
			,
		},
		{
			titulo: "Mãe Esportiva",
			bgCategoria: "#F4F4F4",
			imagemCatergoria: "Moderna.png",
			banner: "",
			cards: [],
			cardStyle: cardsEstilos.semBordas,
			btnFg: paleta.escrita,
			btnBg: paleta.branco,
			frameColor: paleta.branco,
		},
		{
			titulo: "Mãe Elegante",
			imagemCatergoria: "Elegante.png",
			bgCategoria: "#F4F4F4",
			cardStyle: cardsEstilos.semBordas,
			btnFg: paleta.escrita,
			btnBg: paleta.branco,
			frameColor: paleta.branco,
			banner: "",
			cards: []
		},
	])

	useEffect(() => {
		let tempCategoriesData = categoriesData
		let idCounter = 0


		tempCategoriesData.forEach(i => {
			cardsData[i.titulo] = cardsData[i.titulo].sort((a, b) => a.modelo >= b.modelo)
		})
		tempCategoriesData.forEach(i => {
			cardsData[i.titulo] = cardsData[i.titulo].sort((a, b) => a.preco >= b.preco)
			cardsData[i.titulo] = cardsData[i.titulo].map(e => {
				idCounter += 1
				return {...e, id: idCounter}
			})
			i.cards = cardsData[i.titulo]
		})
		setCategoriesData(tempCategoriesData)
}, [])



  return (
    <div className="App">
		<Header
				btnStyle={{...estilosBotao.bannerBtn, marginTop: "8px", marginBottom: "8px", fontSize: size[0] < size[1] ?size[0]/40 + "px" : size[0] > (minWidth + 350) ? Math.min(size[0] / 110,16) + "px" : size[0]/80 + "px"}}
				// headerStyle={{height: size[0] < size[1] ? "55vh" :"60vh"}}
				headerStyle={{height: size[0] < size[1] ? "80%" : "720px", display:"flex", alignItems:"center", paddingBottom: size[0] < size[1] ? "16px" : "32px", justifyContent:"center", alignContent:"center"}}
				imgStyle={{width: size[0] < size[1] ? "95%" : "100%", marginBottom:"1%"}}
				mensagem={"Conheça nosssos produtos."}
				btnTexto="COMPRE AGORA"
				icone={true}
				iconeSize={size[0] < size[1] ? "180%" : size[0] > (minWidth + 350) ? Math.min(size[0] / 72,32) + "px" : "24px"}
		/>
		<BrandsCarousel 
				brands={[
					"carrera.png",
					"swarovski.png",
					"Fendi.png",
					"PRADA.png",
					"carolina herrera.png",
					"burberry.png",
					"TOM FORD.png",
				]}		
				imgWidth = {size[0] < size[1] ? "64px" : "96px"}
			containerSize = {size[0] < size[1] ? "100%" : "39%"}
		translation = {size[0] < size[1] ? -831 : -788}
		/>
		<CategoriesBanner 
				categories={categoriesData}
				btnStyle={{...estilosBotao.bannerBtn, fontSize: "12px", width: size[0] < size[1] ? "120px" : size[0] < 1185 ?"70%" : "76%"}}
				descriptionStyle={{marginLeft: size[0] < size[1] ? "0" : size[0] < minWidth ? "10%" : "0"}}
				titleStyle={{fontSize: size[0] < size[1] ? "24px" : "32px"}}
				size={size}
			heightStyle={size[0] < size[1] ? size[0] > 720 ? "280px" : "400px" : "400px"}
		/>
		{categoriesData.map((e) => (
			<Category
				categoryStyle={ size[0] < minWidth ? {marginRight:"5%", marginLeft:"5%"} : {marginLeft:"auto", marginRight:"auto"}}
				bg={e.bgCategoria}
				iconeSize={size[0] < size[1] ? Math.min(size[0] / 16, 32) + "px" : size[0] < minWidth ? size[0] / 45 + "px" : "32px"}
				btnStyle={{...estilosBotao.produtoBtn, backgroundColor: e.btnBg, color: e.btnFg, WebkitTextFillColor: e.btnFg}}
				btnTexto="COMPRE AGORA"
				btnMensagemPrefixo="Olá! Quero ver mais fotos do "
				titulo={e.titulo.toUpperCase()}
				cardStyle={{...e.cardStyle, width: size[0] < size[1] ? "353px" : size[0] < minWidth ? "100%" : "353px"}}
				cards={e.cards}
				banner={e.banner}
				frameColor={e.frameColor}
				key={"categoria--" + e.titulo}
				delay={1000}
			/>
		))}
		<Footer/>
    </div>
  );
}


export default App;

// <Banner 
// 								bannerStyle={{height: "571px", backgroundPosition: "right", backgroundColor:"white"}}
// 								bannerImg="./assets/capa site - orçamento de lentes.png"
// 								contentWidth="25%"					
// 			>
// 				<h2 style={{fontSize:"20px", fontWeight: "700", marginBottom: "8px", color:"black"}}>Atendimento Personalizado</h2>
// 			<DividerLine width="62px" height="3px" color="black" />
// 			<h1 style={{fontWeight: 700, width:"268px", marginTop: "8px", color:"black"}}>COMPRE SEM SAIR DE CASA</h1>
// 			<p style={{width: "300px", paddingTop: "8px",color:"black"}}>
// Confira nossos modelos disponíveis, compre e receba no conforto da sua casa seus óculos e relógios das melhores e mais renomadas marcas do mundo.
// </p>
// 									</Banner>
// 			,
