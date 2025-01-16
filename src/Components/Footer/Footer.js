import InstaLogo from "../../Images/FooterImages/Insta.svg";
import LinkedinLogo from "../../Images/FooterImages/Linkedin.svg";
import WhatsLogo from "../../Images/FooterImages/Whats.svg";
import EmailLogo from "../../Images/FooterImages/Email.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="HomeFooter">
      <div className="FooterLogo">
        <img className="FooterSign" src="Signed" alt="" />
      </div>
      <div className="FooterSocials">
        <a
          href="https://www.instagram.com/omnidesignbr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="FooterContactImg" src={InstaLogo} alt="" />
        </a>
        <a
          href="https://www.instagram.com/omnidesignbr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="FooterContactImg" src={LinkedinLogo} alt="" />
        </a>
        <a
          href="https://www.instagram.com/omnidesignbr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="FooterContactImg" src={EmailLogo} alt="" />
        </a>
        <a
          href="https://www.instagram.com/omnidesignbr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="FooterContactImg" src={WhatsLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
