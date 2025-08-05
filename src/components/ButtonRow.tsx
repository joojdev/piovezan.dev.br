import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import Button from './Button';
import './ButtonRow.css';

export default function ButtonRow() {
  return (
    <div className="buttonRow">
      <Button href="https://github.com/joojdev">{github}</Button>
      <Button href="https://linkedin.com/in/joao-vitor-piovezan">{linkedin}</Button>
      <Button href="https://instagram.com/piovezan.jv">{instagram}</Button>
    </div>
  );
}