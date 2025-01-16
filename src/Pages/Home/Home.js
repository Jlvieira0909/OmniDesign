import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos do Swiper
import "swiper/css/pagination"; // Estilos para a paginação
import "swiper/css/navigation"; // Estilos para os botões de navegação
import { Pagination, Navigation } from "swiper/modules";
import DynamicLink from "../../Components/DynamicLink/DynamicLink";
import ProjectsImage from "../../Images/GalleryImages/GalleryImage01.png";
import AboutUsImage from "../../Images/GalleryImages/GalleryImage02.png";
import TestimonialsImage from "../../Images/GalleryImages/GalleryImage18.png";
import ImageSwiper01 from "../../Images/SwiperImages/ImageSwiper01.png";
import ImageSwiper02 from "../../Images/SwiperImages/ImageSwiper02.png";
import ImageSwiper03 from "../../Images/SwiperImages/ImageSwiper03.png";
import ImageSwiper04 from "../../Images/SwiperImages/ImageSwiper04.png";
import ImageSwiper05 from "../../Images/SwiperImages/ImageSwiper05.png";
import ImageSwiper06 from "../../Images/SwiperImages/ImageSwiper06.png";
import ImageSwiper07 from "../../Images/SwiperImages/ImageSwiper07.png";
import Footer from "../../Components/Footer/Footer";

import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
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

      <div className="HomeContainer">
        <div className="SideMenu"></div>
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
        <div className="HomeContent">
          <h1 className="HomeTitle">
            Há mais de 20 anos transformando sonhos em realidade!
          </h1>
          <img className="MagicPhoto" alt=""></img>
          <DynamicLink
            DynamicLink="/aboutUs"
            DynamicTitle="Quem Somos"
            DynamicText="Conheca um pouco melhor nossa jornada!"
            DynamicImg={AboutUsImage}
          />
          <DynamicLink
            DynamicLink="/projects"
            DynamicTitle="Nossos Projetos"
            DynamicText="Sinta se a vontade para olhar nosso projetos"
            DynamicImg={ProjectsImage}
          />
          <DynamicLink
            DynamicLink="/contact"
            DynamicTitle="Entre em Contato"
            DynamicText="Gostou do que viu? entre em contato conosco!"
            DynamicImg={TestimonialsImage}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
