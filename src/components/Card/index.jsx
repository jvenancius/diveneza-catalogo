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
		<div className="card" style={{...props.propsStyle, display:"flex", justifyContent:"space-between", height: "100%", borderRadius: "50px", overflow:"hidden", alignItems:"center", minHeight:"400px"}}>
			<div className="card--image--div" style={{width:"100%",height:"100%", aspectRatio:"8/7", marginTop:"0", backgroundColor:props.frameColor, backgroundImage: "url(\"/assets/" + props.img + "\")", backgroundPosition:"center", backgroundSize:"contain", backgroundRepeat: "no-repeat", borderRadius:"50px"}}>
			</div>
			<img src="./assets/frame_shadow.png" zIndex="-1" style={{position:"absolute", bottom:"30.5%", width:"85%"}}></img>
			<div className="card--description" style={{width:"100%"}}>
				<h2 style={{marginTop:"2%"}}>{props.marca}</h2>
				<h3 className="card--desciption--price">{"10x " + precoFormatado}</h3>
				<WppBtn
					icone={true}
					mensagem= {props.btnMensagemPrefixo + props.marca + " nº" + props.id + "."}
					texto="COMPRE AGORA"
					btnStyle={{...props.btnStyle, width:"70%", aspectRatio:"9/2", margin:0}}
					iconeSize={props.iconeSize}
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
//
//
//
//
				// <img loading='lazy' className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
//
//
//
					// <img loading="lazy" className="card--image" src={"/assets/" + props.img} alt={props.marca + " " + props.modelo}/>
//
//
				// <img loading='lazy' className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
