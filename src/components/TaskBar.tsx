import StartButton from './StartButton'
import Clock from './Clock'
import './TaskBar.css'

export default function TaskBar() {
  return (
    <div className="task-bar">
      <StartButton />
      <Clock />
    </div>
  )
}
