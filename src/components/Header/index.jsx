import './Header.css'
import WppButton from '../Buttons/wppBtn'

function Header(props) {
  return (
    <div className="header">
			<img src="./assets/CONHEÇA O CATÁLOGO DE DIA DAS MÃES.png" alt=""/>
			<WppButton
				icone={props.icone}
				mensagem={props.mensagem}
				texto={props.btnTexto}
				btnStyle={{...props.btnStyle, marginTop: "32px"}}
			/>
		</div>
  );
}

export default Header;
