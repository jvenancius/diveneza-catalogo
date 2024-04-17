import './CardTeste.css'
import WppBtn from '../Buttons/wppBtn';

function CardTeste(props) {
	let formater = new Intl.NumberFormat('pt-BR', {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	let precoFormatado = formater.format(props.preco/10)
  return (
		<div className="card--teste" style={{...props.cardStyle, borderRadius: "20px"}}>
			<div className="card--image--div--teste">
				<img className="card--image--frame--teste" src={"/assets/moldurateste.png"} alt=""/>
				<img className="card--image--teste" src={"/assets/" + props.img} alt={props.marca + " " + props.modelo}/>
			</div>
			<div className="card--description--teste">
				<h2>{props.marca}</h2>
				<h3 className="card--desciption--price--teste">{"10x " + precoFormatado}</h3>
				<WppBtn
					icone={true}
					mensagem= {props.btnMensagemPrefixo + props.marca + "."}
					texto="COMPRE AGORA"
					btnStyle={props.btnStyle}
				/>
			</div>
    </div>
  );
}

export default CardTeste;


				// <a href={"https://wa.me/553598254687?text=" + props.mensagem + props.produto} target="_blank" rel="noreferrer">
				// 	<button className="card--desciption--button">
				// 	<p><i class="fa fa-whatsapp" aria-hidden="true"></i> COMPRE AGORA</p></button></a>
			// </div>
