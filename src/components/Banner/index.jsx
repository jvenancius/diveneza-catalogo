import './Banner.css'

function Banner() {
	let styleImage = {
		backgroundImage:'url(' + '../otica_conceito/2.jpg'+')',
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"}
  return (
    <div className="banner" style={styleImage}>
		<h1 className='banner--short--title'>Lorem ipsum</h1>
		<div>
			<div className="divider--line"></div>
		</div>
		<h1 className='banner--title'>Lorem ipsumLorem </h1>
		<p className='banner--description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus imperdiet nulla vitae tristique. Praesent ultricies tempor purus, eu vehicula erat volutpat in. Nulla facilisi. Sed aliquet mi sed elit cursus, a suscipit nibh sodales. Nulla in suscipit metus. Morbi leo lorem, mollis sed leo in, imperdiet dictum turpis. Proin eu urna dolor. Vivamus vehicula sem vel nisi egestas, ullamcorper aliquam libero hendrerit. </p>
				<a href="./" target="_blank">
					<button className="banner--button">COMPRE AGORA</button></a> </div>
  );
}

export default Banner;
