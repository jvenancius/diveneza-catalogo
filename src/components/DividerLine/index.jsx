import './DividerLine.css'

function CategoriesBanner(props) {
  return (
		<div className="divider--line" style={{color: props.color, width: props.width, height: props.height, backgroundColor: props.color}}></div>
  );
}

export default CategoriesBanner;
