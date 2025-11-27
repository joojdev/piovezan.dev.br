import './DesktopIcon.css'

export default function DesktopIcon({
  icon,
  name,
  onclick,
}: {
  icon: string
  name: string
  onclick: () => void
}) {
  return (
    <div className="desktopIcon" onClick={onclick}>
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  )
}
