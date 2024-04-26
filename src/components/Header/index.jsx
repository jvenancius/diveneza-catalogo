import './Header.css'
import WppButton from '../Buttons/wppBtn'

function Header(props) {
  return (
		<div className="header" style={{...props.headerStyle, backgroundSize:"cover", width:"100%", backgroundRepeat:"no-repeat", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
		<div style={{display:"flex", marginLeft:"auto", flexDirection:"row", width:"100%"}}>
		<div style={{display: "flex", alignSelf:"center", marginBottom:"3%",...props.logoStyle, flexDirection:"column", justifyContent:"space-between", alignContent:"center", alignItems:"center", rowGap:"16px"}}>
			<img style={{width:"100%"}}src="./assets/CATÁLOGO DE DIA DAS MÃES-simbolo1.png" alt=""/>
			<WppButton
				icone={props.icone}
				mensagem={props.mensagem}
				texto={props.btnTexto}
				btnStyle={{...props.btnStyle, aspectRatio:"5/1", marginLeft:"8%" }}
				iconeSize={props.iconeSize}
				btnSize={props.btnSize}
			/>
		</div>
		<div style={{marginLeft:"auto", marginTop:"auto", ...props.promoStyle, alignSelf:"center"}}>
			<img style={{height:"100%"}} src="./assets/CATÁLOGO DE DIA DAS MÃES-simbolo2.png" alt=""/>
		</div>
</div>
		</div>
  );
}

export default Header;

			// <img loading="lazy" src="./assets/capa.png" alt="" style={props.imgStyle}/>
