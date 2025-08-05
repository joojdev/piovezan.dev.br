export default function Button({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  function handleClick() {
    window.open(href);
  }

  return (
    <button className="logoButton" onClick={handleClick}>
      <img draggable={false} src={children} alt="button logo" />
    </button>
  );
}
