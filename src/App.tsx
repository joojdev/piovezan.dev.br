import ProfileCard from "./components/ProfileCard";
import SocialMediaButtonRow from "./components/SocialMediaButtonRow";
import FadeInComponent from "./components/FadeInComponent";
import "./App.css";

function App() {
  function handleDownload() {
    location.href = "/cv_ptbr.pdf";
  }

  return (
    <>
      <FadeInComponent>
        <ProfileCard />
      </FadeInComponent>
      <FadeInComponent duration={3}>
        <SocialMediaButtonRow />
      </FadeInComponent>
      <FadeInComponent duration={3}>
        <button className="downloadButton" onClick={handleDownload}>
          Baixar currículo
        </button>
      </FadeInComponent>
    </>
  );
}

export default App;
