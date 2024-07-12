import "./About.css";
import image from "../Assets/images/principal.png";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="container">
      <Menu />
      <img src={image} alt="" />
      <div className="texto">
        <h1 style={{ background: "white", color: "#191919" }}>
          Bem-vindo à Delicius Burguer
        </h1>
        <h3>
          Na Delicius Burguer, a nossa missão é trazer a você a experiência
          perfeita de saborear um hambúrguer artesanal, feito com ingredientes
          frescos e selecionados. Cada mordida é uma explosão de sabor,
          resultado da nossa dedicação em criar receitas únicas e deliciosas.
        </h3>
        <h2 style={{ background: "white", color: "#191919" }}>
          Nossa História
        </h2>
        <h3>
          Tudo começou com uma paixão por hambúrgueres de qualidade e um desejo
          de criar um lugar onde amigos e famílias pudessem se reunir para
          desfrutar de uma refeição inesquecível. Na Delicius Burguer,
          combinamos técnicas tradicionais com um toque moderno para oferecer
          hambúrgueres que você não encontrará em nenhum outro lugar.
        </h3>
        <h2 style={{ background: "white", color: "#191919" }}>Nosso Menu</h2>
        <h3>
          Desde o clássico cheeseburger até criações exclusivas, nosso menu é
          projetado para agradar a todos os paladares. Utilizamos carne bovina
          100% fresca, pães artesanais e uma variedade de acompanhamentos e
          molhos caseiros que complementam perfeitamente cada hambúrguer.
        </h3>
        <h2 style={{ background: "white", color: "#191919" }}>
          Ambiente Acolhedor
        </h2>
        <h3>
          Na Delicius Burguer valorizamos o ambiente tanto quanto a comida.
          Nossa decoração é aconchegante e convidativa, ideal para um almoço
          rápido ou um jantar descontraído. Queremos que cada visita seja
          especial e que você se sinta em casa.
        </h3>
      </div>
      <Footer />
    </div>
  );
}

export default About;
