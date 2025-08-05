import { useEffect, useState } from "react";

const randomChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()-_=+£¢.,;/\\|?';

export default function LoadingText({ children, delay, href }: { children: string, delay?: number, href?: string }) {
  const [text, setText] = useState<string>(createRandomString(children.length));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [waited, setWaited] = useState<boolean>(delay ? false : true);

  function createRandomString(size: number): string {
    return Array.from({ length: size }).fill(undefined).map(() => randomChars.charAt(Math.floor(Math.random() * randomChars.length))).join('');
  }

  function handleNextChar(index: number) {
    setTimeout(() => {
      if (currentIndex <= children.length) {
        setText(children.substring(0, index) + createRandomString(children.length - index));
        setCurrentIndex(index + 1);
      }
    }, Math.round(Math.random() * 100));
  }

  useEffect(() => {
    if (!waited) {
      setTimeout(() => {
        handleNextChar(currentIndex);
        setWaited(true);
      }, delay);
    } else {
      handleNextChar(currentIndex);
    }
  }, [currentIndex]);

  function handleClick() {
    if (!href) return;
    window.open(href);
  }

  return <span className={`loadingText${href ? ' hoverable' : ''}`} onClick={handleClick}>{text}{href ? '↗' : ''}</span>;
}