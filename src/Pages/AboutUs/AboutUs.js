import "./AboutUs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos do Swiper
import "swiper/css/pagination"; // Estilos para a paginação
import "swiper/css/navigation"; // Estilos para os botões de navegação
import { Pagination, Navigation } from "swiper/modules";

import ImageSwiper01 from "../../Images/SwiperImages/ImageSwiper01.png";
import ImageSwiper02 from "../../Images/SwiperImages/ImageSwiper02.png";
import ImageSwiper03 from "../../Images/SwiperImages/ImageSwiper03.png";
import ImageSwiper04 from "../../Images/SwiperImages/ImageSwiper04.png";
import ImageSwiper05 from "../../Images/SwiperImages/ImageSwiper05.png";
import ImageSwiper06 from "../../Images/SwiperImages/ImageSwiper06.png";
import ImageSwiper07 from "../../Images/SwiperImages/ImageSwiper07.png";

import NavBar from "../../Components/NavBar/NavBar";

import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  const images = [
    ImageSwiper01,
    ImageSwiper02,
    ImageSwiper03,
    ImageSwiper04,
    ImageSwiper05,
    ImageSwiper06,
    ImageSwiper07,
  ];

  return (
    <>
      <NavBar />
      <div className="AboutUsContainer">
        <h1 className="AboutUsTitle">CONECTANDO SONHOS A REALIDADE</h1>
        <div className="ImageSwiper">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="SwiperImage"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="DetailsWrapper">
          <h2 className="DetailsTitle">
            30 anos de experiência em Design Gráfico
          </h2>
          <p className="DetailsText">
            Fernando Vieira é Bacharel em Design Gráfico com MBA em Marketing.
            Possuo vasta experiência nas áreas de Design, Comercial, Marketing e
            Engenharia. Sou especializado em prestar suporte estratégico à rede
            de vendas, integrando eficientemente departamentos para otimizar
            operações e resultados. Minha trajetória profissional inclui:
          </p>
          <h3 className="DetailsFlavorText">
            * Desenvolvimento de materiais diversos de Design Gráfico.
          </h3>
          <h3 className="DetailsFlavorText">
            * Criação de materiais de divulgação e estratégias de marketing para
            promover produtos e serviços.
          </h3>
          <h3 className="DetailsFlavorText">
            * Elaboração de projetos inovadores na área de Comunicação Visual de
            Frotas, garantindo identidade visual e eficiência operacional.
          </h3>
          <p className="DetailsText">
            Sou apaixonado por colaborar em projetos que exigem criatividade,
            precisão técnica e foco no cliente. Meu objetivo é continuar
            contribuindo para o crescimento sustentável e a excelência
            operacional em organizações dos setores Industrial, Comercial,
            Transportes e Serviços.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
