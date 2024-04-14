function ScrollToBtn(props) {
	function buttonPress(e, section) {
		e.preventDefault();
		const yOffset = -10; 
		const element = document.getElementById(section);
		const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({top: y, behavior: 'smooth'});
		// document.getElementById(section).scrollIntoView({block: "center", behavior: "smooth"})
	}
	return (<button style={props.btnStyle} onClick={(e) => buttonPress(e, props.name.replaceAll(" ", "_"))}>{props.name}</button>)
}

export default ScrollToBtn;
