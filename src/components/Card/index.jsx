import './Card.css'
import WppBtn from '../Buttons/wppBtn';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Card(props) {
	let formater = new Intl.NumberFormat('pt-BR', {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	let precoFormatado = formater.format(props.preco/10)
  return (
		<div className="card" style={{...props.propsStyle, borderRadius: "50px"}}>
			<div className="card--image--div">
				<img className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
				<img className="card--image" src={"/assets/" + props.img} alt={props.marca + " " + props.modelo}/>
			</div>
			<div className="card--description">
				<h2>{props.marca}</h2>
				<h3 className="card--desciption--price">{"10x " + precoFormatado}</h3>
				<WppBtn
					icone={true}
					mensagem= {props.btnMensagemPrefixo + props.marca + " nº" + props.id + "."}
					texto="COMPRE AGORA"
					btnStyle={props.btnStyle}
					iconeSize="24px"
				/>
			</div>
    </div>
  );
}

export default Card;


				// <a href={"https://wa.me/553598254687?text=" + props.mensagem + props.produto} target="_blank" rel="noreferrer">
				// 	<button className="card--desciption--button">
				// 	<p><i class="fa fa-whatsapp" aria-hidden="true"></i> COMPRE AGORA</p></button></a>
			// </div>
