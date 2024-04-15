import ScrollToBtn from '../Buttons/ScrollToBtn'

function CategoriesBanner(props) {
  function buttonPress(e, section) {
    e.preventDefault();
		document.getElementById(section).scrollIntoView({block: "center", behavior: "smooth"})
  }
  return (
    <div className="banner--categories">
			<div className="categories">
				{props.categories.map(categoryId => {
					return (<div className="category--card" style={{backgroundImage: "url(" + categoryId.imagemCatergoria + ")"}}>
						<ScrollToBtn
							name={categoryId.nome}
							btnStyle={props.btnStyle}
						/>
						dsadasd
					</div>
					)
				})}
			</div>
		</div>
  );
}

export default CategoriesBanner;
