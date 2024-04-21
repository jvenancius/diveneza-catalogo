function WppBtn(props) {
	const wppIcon = <i class="fa fa-whatsapp" aria-hidden="true" style={{marginRight:"5%", fontSize: props.iconeSize}}></i>
	return (
				<a href={"https://wa.me/553598254687?text=" + encodeURIComponent(props.mensagem)} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
			<button style={props.btnStyle}>{props.icone && wppIcon}{props.texto}</button>
		</a>
	)
}

export default WppBtn;
