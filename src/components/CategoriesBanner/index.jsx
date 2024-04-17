import ScrollToBtn from '../Buttons/ScrollToBtn'
import DividerLine from '../DividerLine'
import './CategoriesBanner.css'

function CategoriesBanner(props) {
  return (
    <div className="banner--categories">
			<div className="categories">
				{props.categories.map(categoryId => {
					return (<div className="category--card" style={{backgroundImage: "url(./assets/categorias/" + categoryId.imagemCatergoria + ")"}}>
						<div>
							<DividerLine width="30px" height="3px" color= "white"/>
							<h1>{categoryId.titulo}</h1>
						</div>
						<ScrollToBtn className="category--btn"
							nome="VER MAIS"
							categoria={categoryId.titulo.toUpperCase()}
							btnStyle={{...props.btnStyle, width: "128px", marginTop: "10px"}}
						/>
					</div>
					)
				})}
			</div>
		</div>
  );
}

export default CategoriesBanner;
