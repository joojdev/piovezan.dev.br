import './App.css'
import DesktopIcon from './components/DesktopIcon'
import TaskBar from './components/TaskBar'
import document from './assets/document_icon.png'

function App() {
  function handleClickCV() {
    window.open('/cv_ptbr.pdf')
  }

  return (
    <div className="background">
      <DesktopIcon
        icon={document}
        name="curriculum_vitae.pdf"
        onclick={handleClickCV}
      />
      <TaskBar />
    </div>
  )
}

export default App
