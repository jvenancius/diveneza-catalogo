import './Card.css'
import WppBtn from '../Buttons/wppBtn';
import moldura from './moldura.png'

function Card(props) {
  return (
    <div className="card" style={props.card_estilo}>
			<div className="card--image--div">
				<img className="card--image--frame" src={moldura} alt=""/>
				<img className="card--image" src={props.imagem} alt=""/>
			</div>
			<div className="card--description">
				<h2 className="card--description--name">Armação Armani</h2>
				<h3 className="card--desciption--price">10x R$ 200,00</h3>
				<WppBtn
					icone={true}
					mensagem="testando mensagem"
					texto="Um botão"
					btnStyle={props.btnStyle}
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
