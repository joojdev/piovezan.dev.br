import ProfileCard from './components/ProfileCard'
import SocialMediaButtonRow from './components/SocialMediaButtonRow'
import './App.css'

function App() {
  function handlePreview() {
    window.open('/cv_ptbr.pdf')
  }

  return (
    <>
      <ProfileCard />
      <SocialMediaButtonRow />
      <button className="previewButton" onClick={handlePreview}>
        Ver currículo
      </button>
      <div className="bottomMargin"></div>
      <div className="backdropFilter"></div>
    </>
  )
}

export default App
