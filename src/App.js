import './App.css';
import Category from './components/Category'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import ScrolltoBtn from './components/Buttons/ScrollToBtn'
import CategoriesBanner from './components/CategoriesBanner';
import BrandsCarousel from './components/BrandsCarousel'

function App() {
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
			imagemCatergoria: "https://source.unsplash.com/random",
			bgCategoria: "#F4F4F4",
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
					modelo: "HER0249GS 8079O",
					preco: 1291,
					img: "HER0249GS_8079O.png"
				},
				{
					marca: "Carolina Herrera",
					modelo: "HER0250/S TUIHA",
					img: "HER0250S_TUIHA.png",
					preco: 1291,
				},
				{
					marca: "Tiffany & Co.",
					modelo: "TF4215 8015T5",
					preco: 3317,
					img: "TF4215_8015T5_1.png"
				},
				{
					marca: "Burberry",
					modelo: "B13761343",
					preco: 1557,
					img: "B1376_1343_1(2).png"
				},
			]
		},
		{
			titulo: "Mãe Moderna",
			imagemCatergoria: "https://source.unsplash.com/random",
			bgCategoria: "#F4F4F4",
			cardStyle: cardsEstilos.semBordas,
			btnFg: paleta.escrita,
			btnBg: paleta.branco,
			frameColor: paleta.branco,
			cards: [
				{
					marca: "Carolina Herrera",
					modelo: "HER0186 82UM2",
					preco: 2214,
					img: "HER0186-S_82UM2_1.png"
				},
				{
					marca: "PRADA",
					modelo: "SPRA014 18Q",
					preco: 3495,
					img: "SPRA01_14O-50B_1.png"
				},
				{
					marca: "FENDI",
					modelo: "FE50072I 050",
					preco: 3122,
					img: "fe500721_050_1.png"
				},
				{
					marca: "FENDI",
					modelo: "FE50065I 001",
					img: "fe500651_001_1.png",
					preco: 3657,
				}
			]
		},
		{
			titulo: "Mãe Esportiva",
			imagemCatergoria: "https://source.unsplash.com/random",
			bgCategoria: "#F4F4F4",
			// cardStyle: cardsEstilos.comBordas,
			// btnBg: paleta.colorido,
			// btnFg: paleta.escrita,
			// frameColor: paleta.colorido,


			cardStyle: cardsEstilos.semBordas,
			btnFg: paleta.escrita,
			btnBg: paleta.branco,
			frameColor: paleta.branco,

			cards: [
				{
					marca: "Carrera",
					modelo: "CARDUCUC017/S",
					img: "CARDUC017S_OITUZ_1.png",
					preco: 1135
				},
				{
					marca: "Carrera",
					modelo: "FLAGLAB 16KY21V",
					img: "FLAGLAB16_KY21V_1.png",
					preco: 1237
				},
				{
					marca: "Carrera",
					modelo: "1061/S10AHA59",
					img: "1061S_10AHA_1.jpg",
					preco: 1330
				},
				{
					marca: "Swarovski",
					modelo: "SK6014 103655",
					preco: 2385,
					img: "SK6014_103655_1.png"
				}
			]
		},
		{
			titulo: "Mãe Elegante",
			imagemCatergoria: "https://source.unsplash.com/random",
			bgCategoria: "#F4F4F4",
			cardStyle: cardsEstilos.semBordas,
			btnBg: paleta.escrita,
			btnFg: paleta.branco,
			frameColor: paleta.branco,
			cards: [
				{
					marca: "VERSACE",
					modelo: "MOD1292 1507",
					preco: 1637,
					img: "MOD1292_1507_1.png"
				},
				{
					marca: "Tom Ford",
					modelo: "TF1089 01P",
					preco: 3190,
					img: "TF1089_01P_1.png"
				},
				{
					marca: "Carolina Herrera",
					modelo: "HER0224FWM",
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
		/>
		<BrandsCarousel/>
		{categoriesData.map(e => (
			<Category
				bg={e.bg}
				btnStyle={{...estilosBotao.produtoBtn, backgroundColor: e.btnBg, color: e.btnFg}}
				btnTexto="COMPRE AGORA"
				btnMensagemPrefixo="Prefixo do "
				titulo={e.titulo.toUpperCase()}
				cardStyle={e.cardStyle}
				cards={e.cards}
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
