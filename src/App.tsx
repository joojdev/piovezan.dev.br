import ProfileCard from "./components/ProfileCard";
import SocialMediaButtonRow from "./components/SocialMediaButtonRow";
import FadeInComponent from "./components/FadeInComponent";
import "./App.css";

function App() {
  return (
    <>
      <FadeInComponent>
        <ProfileCard />
      </FadeInComponent>
      <FadeInComponent duration={3}>
        <SocialMediaButtonRow />
      </FadeInComponent>
    </>
  );
}

export default App;
