import "./Contact.css";
import InstaLogo from "../../Images/FooterImages/Insta.svg";
import LinkedinLogo from "../../Images/FooterImages/Linkedin.svg";
import WhatsLogo from "../../Images/FooterImages/Whats.svg";
import BehanceLogo from "../../Images/FooterImages/Behance.svg";
import EmailLogo from "../../Images/FooterImages/Email.svg";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="ContactContainer">
        <h2 className="ContactTitle">GOSTOU DO QUE VIU? ENTRE EM CONTATO!</h2>
        <a
          className="SocialLink"
          href="https://www.instagram.com/omnidesignbr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SocialButton">
            <img className="ButtonIcon" src={InstaLogo} alt="" />
            <h1 className="ButtonText">Acompanhe nosso Instagram!</h1>
          </button>
        </a>
        <a
          className="SocialLink"
          href="https://www.instagram.com/vfernandoroberto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SocialButton">
            <img className="ButtonIcon" src={InstaLogo} alt="" />
            <h1 className="ButtonText">Instagram Pessoal</h1>
          </button>
        </a>
        <a
          className="SocialLink"
          href="https://www.linkedin.com/in/fernando-vieira-2995b11a0/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SocialButton">
            <img className="ButtonIcon" src={LinkedinLogo} alt="" />
            <h1 className="ButtonText">Meu Perfil no Linkedin</h1>
          </button>
        </a>{" "}
        <a
          className="SocialLink"
          href="https://www.behance.net/fernandovieira42"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SocialButton">
            <img className="ButtonIcon" src={BehanceLogo} alt="" />
            <h1 className="ButtonText">Meus Projetos no Behance</h1>
          </button>
        </a>
        <a
          className="SocialLink"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SocialButton">
            <img className="ButtonIcon" src={EmailLogo} alt="" />
            <h1 className="ButtonText">Me Envie um Email!</h1>
          </button>
        </a>
        <a
          className="SocialLink"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SocialButton">
            <img className="ButtonIcon" src={WhatsLogo} alt="" />
            <h1 className="ButtonText">Entre em Contato!</h1>
          </button>
        </a>
        <div className="InstaFeed"></div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
