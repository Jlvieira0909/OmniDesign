import "./Testimonials.css";
import ClientCard from "../../Components/ClientCard/ClientCard";
import Footer from "../../Components/Footer/Footer";

import Busscar from "../../Images/ClientsStamps/Busscar.png";

const AboutUs = () => {
  return (
    <>
      <div className="TestimonialsContainer">
        <ClientCard
          CardText="Po namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk brabo"
          CardName="Um mano muito pica da busscar"
          ClientSignature={Busscar}
        />
        <ClientCard
          CardText="Po namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk brabo"
          CardName="Um mano muito pica da busscar"
          ClientSignature={Busscar}
        />{" "}
        <ClientCard
          CardText="Po namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk brabo"
          CardName="Um mano muito pica da busscar"
          ClientSignature={Busscar}
        />{" "}
        <ClientCard
          CardText="Po namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk braboPo namoral o fernando roberto trabalha pra krl pensa num mlk brabo"
          CardName="Um mano muito pica da busscar"
          ClientSignature={Busscar}
        />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
