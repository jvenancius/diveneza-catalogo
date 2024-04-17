import Card from '../Card'
import CardTeste from '../CardTeste'
import './Category.css'
import Banner from '../Banner'

function Category(props) {
	console.log(props.index)
  return (
    <div id={props.titulo.replaceAll(" ", "_")} className="category"style={{backgroundColor: props.bg}}>
		<h1 className='category--title'>{props.titulo.toUpperCase()}</h1>
			<div className='cards' style={{backgroundColor: props.cards_bg}}>
		{props.cards.map((e,i) => (
			<Card 
				cardStyle={props.cardStyle}
				logo={e.logo}
				frameColor={props.frameColor}
				marca={e.marca}
				modelo={e.modelo}
				preco={e.preco}
				img={e.img}
				btnStyle={props.btnStyle}
				btnMensagemPrefixo={props.btnMensagemPrefixo}
			/>
		))}
			</div>
			{props.banner}
    </div>
  );
}

export default Category;
				// <Card 
				// 	imagem="../temp_Luciano/1.jpg"
				// 	card_estilo={props.cards_estilo}
				// 	btnStyle={props.btnStyle}
				// />
