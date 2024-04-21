import './CheckCard.css'

function CheckCard(props) {
	let formater = new Intl.NumberFormat('pt-BR', {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	let precoFormatado = formater.format(props.preco/10)
	return (
		<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "900px", marginBottom:"64px"}} className="check--card">
				<img style={{width:"350px", margin:"auto"}} src={"/assets/" + props.img} alt={props.marca + " " + props.modelo}/>
				<div style={{display: "flex", flexDirection:"column", justifyContent: "space-around", backgroundColor:"#eee", padding: "32px"}}>
					<div className='card--field'>
						<h2 ><b>Marca</b> </h2><p>{props.marca}</p>
					</div>
					<div className='card--field'>
						<h2 ><b>Modelo</b></h2><p>{props.modelo}</p>
					</div>
					<div className='card--field'>
						<h2><b>Preço parcelado </b></h2><p>{"10x " + precoFormatado}</p>
					</div>
					<div className='card--field'>
						<h2><b>Preço a vista </b></h2><p>{formater.format(props.preco)}</p>
					</div>
			</div>
		</div>
	);
}

export default CheckCard;


// <a href={"https://wa.me/553598254687?text=" + props.mensagem + props.produto} target="_blank" rel="noreferrer">
// 	<button className="card--desciption--button">
// 	<p><i class="fa fa-whatsapp" aria-hidden="true"></i> COMPRE AGORA</p></button></a>
// </div>
