import { useState } from "react"

function Slider({ children, time, style, containerWidth,containerHeight }) {
	const [currentIndex, setCurrentIndex] = useState(0)
	let slideStyle = {
		translate: `${-100 * currentIndex}%`,
		display: "block",
		flexShrink: 0,
		flexGrow: 0,
		transition: `translate ${time}ms`,
	}

	function goToPrevious() {
		const isFirst = currentIndex === 0
		const newIndex = isFirst ? children.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	function goToNext() {
		const isLast = currentIndex === children.length - 1
		const newIndex = isLast ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}
	return (
		<div style={{...style, position: "relative", height: containerHeight, display:"flex", justifyContent:"center", alignItems: "center", marginTop:"32px",marginBottom:"32px" }}>
			<div style={{position: "absolute", top: "50%", transform: "translate(0, -50%)", left: "32px", zIndex: 1, cursor: "pointer"}} onClick={goToPrevious}>&lt;</div>
			<div className="slider--container" style={{display: "flex", flexGrow: 0, flexShrink: 0,overflow: "hidden", margin: "auto", width: containerWidth }}>

		{children.map(e => <e.type {...e.props} propsStyle={{...e.props.propsStyle, ...slideStyle }}/>)}
			</div>
			<div style={{position: "absolute", top: "50%", transform: "translate(0, -50%)", right: "32px", zIndex: 1, cursor: "pointer"}}onClick={goToNext}>&gt;</div>
		</div>
	)
}

export default Slider;
