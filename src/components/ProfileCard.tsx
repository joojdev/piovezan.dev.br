import profile from "../assets/profile.png";
import saucer from "../assets/saucer.webp";
import alien from "../assets/walking-alien.gif";
import LoadingText from "./LoadingText";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="card">
      <img
        src={alien}
        alt="walking alien"
        className="alien"
        draggable={false}
      />
      <img
        src={saucer}
        alt="rotating saucer"
        className="saucer"
        draggable={false}
      />
      <img
        src={profile}
        alt="profile image"
        className="profile"
        draggable={false}
      />
      <div className="content">
        <h1>
          <LoadingText delay={500}>João Vitor Piovezan</LoadingText>
        </h1>
        <div className="titles">
          <p>
            <LoadingText
              delay={1200}
              href="https://portais.ifsp.edu.br/scl/index.php/cursos/62-ensino/1762-bacharelado-em-engenharia-de-software.html"
            >
              Bacharelando em Engenharia de Software
            </LoadingText>
          </p>
          <p>
            <LoadingText
              delay={1600}
              href="https://portais.ifsp.edu.br/scl/index.php/cursos/62-ensino/102-curso-tecnico-em-informatica-para-internet-integrado-ao-ensino-medio.html"
            >
              Técnico em Informática para Internet
            </LoadingText>
          </p>
        </div>
      </div>
    </div>
  );
}
