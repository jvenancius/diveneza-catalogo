import Card from "../Card";
import "./Category.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
// import Slider from '../Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import React, { useLayoutEffect, useState } from "react";

function Version(props) {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (size[0] < size[1]) {
    return (
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {props.cards.map((e) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              propsStyle={props.cardStyle}
              logo={e.logo}
              frameColor={props.frameColor}
              marca={e.marca}
              modelo={e.modelo}
              preco={e.preco}
              img={e.img}
              btnStyle={props.btnStyle}
              btnMensagemPrefixo={props.btnMensagemPrefixo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <div style={{ display: "flex", marginBottom: "64px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "auto",
						gridGap: "50px"
        }}
      >
        {props.cards.map((e) => (
          <Card
            propsStyle={{ ...props.cardStyle }}
            logo={e.logo}
            frameColor={props.frameColor}
            marca={e.marca}
            modelo={e.modelo}
            preco={e.preco}
            img={e.img}
            btnStyle={props.btnStyle}
            btnMensagemPrefixo={props.btnMensagemPrefixo}
          />
        ))}
      </div>
    </div>
  );
}

function Category(props) {
  return (
    <div
      id={props.titulo.replaceAll(" ", "_")}
      className="category"
      style={{ backgroundColor: props.bg}}
    >
      <h1 className="category--title" >{props.titulo.toUpperCase()}</h1>
      <Version {...props} />
      {props.banner}
    </div>
  );
}

export default Category;
// <Card
// 	imagem="../temp_Luciano/1.jpg"
// 	card_estilo={props.cards_estilo}
// 	btnStyle={props.btnStyle}
// />
