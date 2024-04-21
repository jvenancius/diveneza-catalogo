import { useState, useEffect } from "react";
import cardsData from "./data/cards.json"
import CheckCard from "./components/CheckCard"

function Checagem() {
	const [id, setId] = useState(1)
	const [cardElement, setCardElement] = useState("")
	const [total, setTotal] = useState(0)
	const [sortedArray, setSortedArray] = useState([])

	useEffect(()=> {
		let counter = 0
		let tempSorted = []

		Object.keys(cardsData).forEach(i => {
			cardsData[i] = cardsData[i].sort((a,b) => a.modelo > b.modelo)
		})
		Object.keys(cardsData).forEach(i => {
			counter += cardsData[i].length
			tempSorted.push(...cardsData[i].sort((a,b) => a.preco >= b.preco))
			// tempSorted.push(...cardsData[i].sort((a,b) a.preco >= b.preco))
		})
		setTotal(counter)
		setSortedArray(tempSorted)
	},[])

	function getCard(e) {
		e.preventDefault()
		let counter = 0
		for (let i = 0; i < sortedArray.length; i++) {
			counter++
			if (counter == id) {
				let data = sortedArray[i]
		setCardElement(<CheckCard
			marca={data.marca}
			modelo={data.modelo}
			preco={data.preco}
			img={data.img}
		/>)
				return
			}
		}
		// for (let cardData = 0; cardData < keys.length; cardData++) {
		// 	for (let card = 0; card < sortedArray.length; card++) {
		// 		counter++
		// 		if (counter == (id)) {
		// 			let data = sortedArray[card]
		// setCardElement(<CheckCard
		// 	marca={data.marca}
		// 	modelo={data.modelo}
		// 	preco={data.preco}
		// 	img={data.img}
		// />)
					return
				// }
			// }
		// }
	}
	return (
		<div style={{height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
		<div style={{width:"300px", display:"flex", justifyContent: "space-evenly"}}>
<label for="id" style={{textAlign:"left", margin:"0"}}>Id do produto</label>
				<input style={{width: "64px"}} onChange={(e) => setId(Math.min(e.target.value, total))} value={id} type="number" name="id" min="1" />
		<button onClick={getCard}>Pesquisar</button>
</div>
		{cardElement}
		</div>
	)
}


export default Checagem;
