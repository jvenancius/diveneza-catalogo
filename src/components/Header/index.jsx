import './Header.css'
import WppButton from '../Buttons/wppBtn'

function Header(props) {
  return (
		<div className="header" style={{...props.headerStyle, width:"100vw"}}>
			<img loading="lazy" src="./assets/CONHEÇA O CATÁLOGO DE DIA DAS MÃES.png" alt="" style={props.imgStyle}/>
			<WppButton
				icone={props.icone}
				mensagem={props.mensagem}
				texto={props.btnTexto}
				btnStyle={{...props.btnStyle, margin:"auto"}}
				iconeSize={props.iconeSize}
				btnSize={props.btnSize}
			/>
		</div>
  );
}

export default Header;


