import profile from "../assets/profile.png";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="card">
      <img
        src={profile}
        alt="profile image"
        className="profile"
        draggable={false}
      />
      <div className="content">
        <h1>
          João Vitor Piovezan
        </h1>
        <div className="titles">
          <p>
            <a
              href="https://portais.ifsp.edu.br/scl/index.php/cursos/62-ensino/1762-bacharelado-em-engenharia-de-software.html"
            >
              Bacharelando em Engenharia de Software↗
            </a>
          </p>
          <p>
            <a
              href="https://portais.ifsp.edu.br/scl/index.php/cursos/62-ensino/102-curso-tecnico-em-informatica-para-internet-integrado-ao-ensino-medio.html"
            >
              Técnico em Informática para Internet↗
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
