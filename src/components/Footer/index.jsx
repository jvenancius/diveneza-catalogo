import './Footer.css'

function Footer() {
  return (
    <div className="footer">
			<div className="footer--fields">
				<div className='endereço'>
					<h1>ENDEREÇO</h1>
					<p>Rua prefeito chagas, 212 - Centro</p>
					<p>Poços de Caldas - MG, 37701-010</p>
				</div>
				<div className='contato'>
					<h1>CONTATO</h1>
					<p>Telefone: (35) 9825-4687</p>
				</div>
				<div className='funcionamento'>
					<h1>HORÁRIO DE FUNCIONAMENTO</h1>
					<p>Segunda a Sexta: 9h as 18h</p>
					<p>Sábado: 9h as 17h</p>
				</div>
			</div>
			<div className='footing--note'>
				<p>© 2024 Ótica Diveneza. Todos os direitos reservados.</p>
				<div className="socials">
					<i className="fa fa-facebook-f"></i>
					<i className="fa fa-instagram"></i>
				</div>
			</div>
    </div>
  );
}

export default Footer;
