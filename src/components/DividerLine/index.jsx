import './DividerLine.css'

function CategoriesBanner(props) {
  function buttonPress(e, section) {
    e.preventDefault();
		document.getElementById(section).scrollIntoView({block: "center", behavior: "smooth"})
  }
  return (
		<div className="divider--line" style={{width: props.width, height: props.height, backgroundColor: props.color}}> </div>
  );
}

export default CategoriesBanner;
