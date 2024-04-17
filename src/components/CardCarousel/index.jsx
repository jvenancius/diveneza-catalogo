import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './CardCarousel.css'
import Card from '../Card'

function CardCarousel(props) {
	let style = {
		backgroundColor: "green"
	}
  return (
			<Carousel className="card--carousel" style={style} indicators={false}>
				<Carousel.Item className='card--carousel--item' >
					<Card 
					cardStyle={props.cardStyle}
					logo={props.logo}
					frameColor={props.frameColor}
					marca={props.marca}
					modelo={props.modelo}
					preco={props.preco}
					img={props.img}
					btnStyle={props.btnStyle}
					btnMensagemPrefixo={props.btnMensagemPrefixo}
					/>
				</Carousel.Item >
				<Carousel.Item className='card--carousel--item' >
					<Card 
					cardStyle={props.cardStyle}
					logo={props.logo}
					frameColor={props.frameColor}
					marca={props.marca}
					modelo={props.modelo}
					preco={props.preco}
					img={props.img}
					btnStyle={props.btnStyle}
					btnMensagemPrefixo={props.btnMensagemPrefixo}
					/>
				</Carousel.Item >
			</Carousel>
	)
	}

export default CardCarousel;
