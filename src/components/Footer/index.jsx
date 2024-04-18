import './Footer.css'
import React, { useLayoutEffect, useState } from "react";

function Footer() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
	let styleMobile = {
		display: "flex",
		flexDirection: "column",
	}
  return (
    <div className="footer">
			<div className="footer--fields" style={size[0] < size[1] ? styleMobile:{}}>
				<div className='endereço f--field'>
					<h1>ENDEREÇO</h1>
					<div className="paragraphs--footer">
						<p>Rua prefeito chagas, 212 - Centro</p>
						<p>Poços de Caldas - MG, 37701-010</p>
					</div>
				</div>
				<div className='contato f--field'>
					<h1>CONTATO</h1>
					<div className="paragraphs--footer">
					<p>Telefone: (35) 9825-4687</p>
					<p>Telefone: (35) 3721 0400</p>
					</div>
				</div>
				<div className='funcionamento f--field'>
					<h1>HORÁRIO DE FUNCIONAMENTO</h1>
					<div className="paragraphs--footer">
					<p>Segunda a Sexta: 9h as 18h</p>
					<p>Sábado: 9h as 17h</p>
					</div>
				</div>
			</div>
			<div className='footing--note'>
				<p>© 2024 Ótica Diveneza. Todos os direitos reservados.</p>
				<div className="socials">
					<a href="https://www.facebook.com/diveneza/"><i className="fa fa-facebook-f"></i></a>
					<a href="https://www.instagram.com/divenezaotica/"><i className="fa fa-instagram"></i></a>
				</div>
			</div>
    </div>
  );
}

export default Footer;
