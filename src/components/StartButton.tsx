import windows from '../assets/windows_icon.png'
import './StartButton.css'

export default function StartButton() {
  return (
    <button className="start">
      <img src={windows} alt="Windows Logo" />
      Start
    </button>
  )
}
