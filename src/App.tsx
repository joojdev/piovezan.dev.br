import ProfileCard from "./components/ProfileCard";
import SocialMediaButtonRow from "./components/SocialMediaButtonRow";
import FadeInComponent from "./components/FadeInComponent";
import "./App.css";

function App() {
  function handlePreview() {
    window.open("/cv_ptbr.pdf");
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
        <button className="previewButton" onClick={handlePreview}>
          Ver currículo
        </button>
      </FadeInComponent>
    </>
  );
}

export default App;
