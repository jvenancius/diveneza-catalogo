import './App.css';
import Category from './components/Category'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import ScrolltoBtn from './components/Buttons/ScrollToBtn'
import CategoriesBanner from './components/CategoriesBanner';
import BrandsCarousel from './components/BrandsCarousel'
import DividerLine from './components/DividerLine'

function App() {
	const logos = {
		CH: "carolina herrera.png",
		Burberry: "burberry.png",
		Tiffany: "TIFFANY.png",
		TomFord: "TOM FORD.png",
		Carrera: "carrera.png",
		Swarovski: "swarovski.png",
		Fendi: "Fendi.png",
		Prada: "PRADA.png",
		Versace: ""

	}
	const paleta = {
		colorido: "#EFC4B7",
		branco: "#FFFFFF",
		cinza: "#F4F4F4",
		escrita: "#444040"

	}
	const cardsEstilos = {
	comBordas:
		{
			border: "4px solid" + paleta.colorido,
			backgroundColor: paleta.branco
		},
	semBordas:
		{
			border: "none",
			backgroundColor: paleta.colorido
		}
	}

	const estilosBotao = {
		bannerBtn: {
			backgroundColor: "white",
			marginTop: "32px",
			width: "200px",
			height: "40px",
			display: "inline-block",
			borderRadius: "50px",
			fontSize: "16px",
		},
		produtoBtn: {
			backgroundColor: "black",
			color: "white",
			marginTop: "16px",
			width: "280px",
			height: "64px",
			borderRadius: "50px",
			fontSize: "20px",
		}
	}

	// let categoriesBannerData = [
	// 	{
	// 		nome: "óculos de grau",
	// 		imageUrl: "https://source.unsplash.com/random",
	// 	}
	// ]

	let categoriesData = [
		{
			titulo: "Mãe Clássica",
			imagemCatergoria: "Classica.png",
			bgCategoria: "#F4F4F4",
			banner: "",
			// cardStyle: cardsEstilos.comBordas,
			// btnBg: paleta.colorido,
			// btnFg: paleta.escrita,
			// frameColor: paleta.colorido,


			cardStyle: cardsEstilos.semBordas,
			btnBg: paleta.branco,
			btnFg: paleta.escrita,
			frameColor: paleta.branco,
			cards: [
				{
					marca: "Carolina Herrera",
					logo: logos.CH,
					modelo: "HER0249GS 8079O",
					preco: 1291,
					img: "HER0249GS_8079O.png"
				},
				{
					marca: "Carolina Herrera",
					logo: logos.CH,
					modelo: "HER0250/S TUIHA",
					img: "HER0250S_TUIHA.png",
					preco: 1291,
				},
				{
					marca: "Tiffany & Co.",
					modelo: "TF4215 8015T5",
					logo: logos.Tiffany,
					preco: 3317,
					img: "TF4215_8015T5_1.png"
				},
				{
					marca: "Burberry",
					modelo: "B13761343",
					logo: logos.Burberry,
					preco: 1557,
					img: "B1376_1343_1(2).png"
				},
			]
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
								bannerStyle={{height: "570px", backgroundPosition: "right", backgroundColor:"#939392"}}
								bannerImg="./assets/capa site - compre online.png"
								contentWidth="100%"					
			>
			<div className="banner--content--inside" style={{width: "300px"}}>
				<h2 style={{fontSize:"20px", fontWeight: "700", marginBottom: "8px"}}>Atendimento  Personalizado</h2>
			<DividerLine width="62px" height="3px" color="white" />
			<h1 style={{fontWeight: 700, textJustify:"inter-character", marginTop: "8px"}}>
			COMPRE SEM SAIR DE CASA
			</h1>
					<p style={{paddingTop: "8px", fontSize: "18px" }}>
			Confira&ensp;nossos&ensp;modelos&ensp;disponíveis,&ensp;compre&ensp;e&ensp;receba&ensp;no&ensp;conforto&ensp;da&ensp;sua&ensp;casa&ensp;óculos&ensp;das&ensp;melhores&ensp;e&ensp;mais&ensp;renomadas&ensp;marcas&ensp;do&ensp;mundo.
			</p>
</div>
			<div></div>
									</Banner>
			,

			cards: [
				{
					marca: "Carolina Herrera",
					modelo: "HER0186 82UM2",
					logo: logos.CH,
					preco: 2214,
					img: "HER0186-S_82UM2_1.png"
				},
				{
					marca: "Prada",
					modelo: "SPRA014 18Q",
					logo: logos.Prada,
					preco: 3495,
					img: "SPRA01_14O-50B_1.png"
				},
				{
					marca: "Fendi",
					modelo: "FE50072I 050",
					logo: logos.Fendi,
					preco: 3122,
					img: "fe500721_050_1.png"
				},
				{
					marca: "Fendi",
					modelo: "FE50065I 001",
					logo: logos.Fendi,
					img: "fe500651_001_1.png",
					preco: 3657,
				}
			]
		},
		{
			titulo: "Mãe Esportiva",
			bgCategoria: "#F4F4F4",
			imagemCatergoria: "Moderna.png",
			banner: "",
			// cardStyle: cardsEstilos.comBordas,
			// btnBg: paleta.colorido,
			// btnFg: paleta.escrita,
			// frameColor: paleta.colorido,


			cardStyle: cardsEstilos.semBordas,
			btnFg: paleta.escrita,
			btnBg: paleta.branco,
			frameColor: paleta.branco,
			banner: "",

			cards: [
				{
					marca: "Carrera",
					modelo: "CARDUCUC017/S",
					logo: logos.Carrera,
					img: "CARDUC017S_OITUZ_1.png",
					preco: 1135
				},
				{
					marca: "Carrera",
					modelo: "FLAGLAB 16KY21V",
					logo: logos.Carrera,
					img: "FLAGLAB16_KY21V_1.png",
					preco: 1237
				},
				{
					marca: "Carrera",
					modelo: "1061/S10AHA59",
					logo: logos.Carrera,
					img: "1061S_10AHA_1.jpg",
					preco: 1330
				},
				{
					marca: "Swarovski",
					modelo: "SK6014 103655",
					logo: logos.Swarovski,
					preco: 2385,
					img: "SK6014_103655_1.png"
				}
			]
		},
		{
			titulo: "Mãe Elegante",
			imagemCatergoria: "Elegante.png",
			bgCategoria: "#F4F4F4",
			cardStyle: cardsEstilos.semBordas,
			btnBg: paleta.escrita,
			btnFg: paleta.branco,
			frameColor: paleta.branco,
			banner: <Banner 
								bannerStyle={{height: "571px", backgroundPosition: "right", backgroundColor:"white"}}
								bannerImg="./assets/capa site - orçamento de lentes.png"
								contentWidth="25%"					
			>
				<h2 style={{fontSize:"20px", fontWeight: "700", marginBottom: "8px", color:"black"}}>Atendimento Personalizado</h2>
			<DividerLine width="62px" height="3px" color="black" />
			<h1 style={{fontWeight: 700, width:"268px", marginTop: "8px", color:"black"}}>COMPRE SEM SAIR DE CASA</h1>
			<p style={{width: "300px", paddingTop: "8px",color:"black"}}>
Confira nossos modelos disponíveis, compre e receba no conforto da sua casa seus óculos e relógios das melhores e mais renomadas marcas do mundo.
</p>
									</Banner>
			,
			cards: [
				{
					marca: "VERSACE",
					modelo: "MOD1292 1507",
					logo: logos.Versace,
					preco: 1637,
					img: "MOD1292_1507_1.png"
				},
				{
					marca: "Tom Ford",
					modelo: "TF1089 01P",
					logo: logos.TomFord,
					preco: 3190,
					img: "TF1089_01P_1.png"
				},
				{
					marca: "Carolina Herrera",
					modelo: "HER0224FWM",
					logo: logos.CH,
					preco: 1811,
					img: "HER0224_FWM_1.png"
				},
			]
		},
	]


  return (
    <div className="App">
		<Header
			btnStyle={estilosBotao.bannerBtn}
			mensagem={"Conheça nosssos produtos."}
			btnTexto="COMPRE AGORA"
		/>
		<CategoriesBanner 
				categories={categoriesData}
				btnStyle={{...estilosBotao.bannerBtn}}
		/>
		<BrandsCarousel/>
		{categoriesData.map(e => (
			<Category
				bg={e.bgCategoria}
				btnStyle={{...estilosBotao.produtoBtn, backgroundColor: e.btnBg, color: e.btnFg}}
				btnTexto="COMPRE AGORA"
				btnMensagemPrefixo="Olá! Quero ver mais fotos do "
				titulo={e.titulo.toUpperCase()}
				cardStyle={e.cardStyle}
				cards={e.cards}
				banner={e.banner}
				frameColor={e.frameColor}
			/>
		))}
		<Footer/>
    </div>
  );
}
export default App;


		// <h1> ROLAR PARA </h1>
		// {categoriesData.map(e => (
		// 	<ScrolltoBtn name={e.titulo.toUpperCase()} />
		// ))}
