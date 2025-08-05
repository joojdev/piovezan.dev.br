
import profile from "../assets/profile.png";
import LoadingText from "./LoadingText";
import "./ProfileCard.css";

export default function ProfileCard() {
 

  return (
    <div className="card">
      <img src={profile} alt="profile image" draggable={false} />
      <div className="content">
        <h1><LoadingText delay={200}>joão vitor piovezan</LoadingText></h1>
        <div className="titles">
          <p><LoadingText delay={1200} href="https://portais.ifsp.edu.br/scl/index.php/cursos/62-ensino/1762-bacharelado-em-engenharia-de-software.html">bacharelando em engenharia de software</LoadingText></p>
          <p><LoadingText delay={2200} href="https://portais.ifsp.edu.br/scl/index.php/cursos/62-ensino/102-curso-tecnico-em-informatica-para-internet-integrado-ao-ensino-medio.html">técnico em informática para internet</LoadingText></p>
        </div>
      </div>
    </div>
  );
}
