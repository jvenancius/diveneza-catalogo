function WppBtn(props) {
	console.log(props.botao_estilo)
	console.log("props.botao_card_estilo")
	const wppIcon = <i class="fa fa-whatsapp" aria-hidden="true" style={{marginRight:"8px", fontSize: "24px"}}></i>
	return (
				<a href={"https://wa.me/553598254687?text=" + props.mensagem} target="_blank" rel="noreferrer">
			<button style={props.btnStyle}>{props.icone && wppIcon}{props.texto}</button>
		</a>
	)
}

export default WppBtn;
