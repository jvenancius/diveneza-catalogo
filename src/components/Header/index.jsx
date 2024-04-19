import './Header.css'
import WppButton from '../Buttons/wppBtn'

function Header(props) {
  return (
    <div className="header" style={props.headerStyle}>
			<img src="./assets/CONHEÇA O CATÁLOGO DE DIA DAS MÃES.png" alt=""/>
			<WppButton
				icone={props.icone}
				mensagem={props.mensagem}
				texto={props.btnTexto}
				btnStyle={{...props.btnStyle}}
			/>
		</div>
  );
}

export default Header;


