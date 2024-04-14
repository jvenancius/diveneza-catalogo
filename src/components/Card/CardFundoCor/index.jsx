import WppBtn from '../../Buttons/wppBtn';
import moldura from './moldura.png'

function CardFundoCor(props) {
	const estiloCard = {
		backgroundColor: "#E2C0BF"
	}

		return (
    <div className="card" 
			style={props.card_estilo}
		>
			<div className="card--image--div">
				<img className="card--image--frame" src={moldura} alt=""/>
				<img className="card--image" src={props.imagem} alt=""/>
			</div>
			<div className="card--description">
				<h2 className="card--description--name">{props.nome}</h2>
				<h3 className="card--desciption--price">{"10x R$ " + props.preco / 10}</h3>
				<WppBtn
					icone={true}
					texto={props.btnTexto}
					mensagem={props.btnMensagemPrefixo + props.nome}
					btnStyle={props.btnStyle}
				/>
			</div>
    </div>
  );
}

export default CardFundoCor;
