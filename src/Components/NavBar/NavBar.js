import "./NavBar.css";
import Signature from "../../Images/Signature.png";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <img className="Signature" src={Signature} alt="" />
      <div className="NavigationButtons">
        <a className="LinkToPage" href="/">
          <h1 className="LinkLabel">Home</h1>
        </a>
        <a className="LinkToPage" href="/projects">
          <h1 className="LinkLabel">Projetos</h1>
        </a>
        <a className="LinkToPage" href="/aboutUs">
          <h1 className="LinkLabel">Sobre Nós</h1>
        </a>
        <a className="LinkToPage" href="/contact">
          <h1 className="LinkLabel">Contato</h1>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
