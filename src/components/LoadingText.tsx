import { useEffect, useState } from "react";

const randomChars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()-_=+£¢.,;/\\|?";

export default function LoadingText({
  children,
  delay,
  href,
}: {
  children: string;
  delay?: number;
  href?: string;
}) {
  const [text, setText] = useState<string>(createRandomString(children));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [waited, setWaited] = useState<boolean>(delay ? false : true);

  function createRandomString(text: string): string {
    return Array.from(text).map((character) =>
        character != ' ' ? randomChars.charAt(Math.floor(Math.random() * randomChars.length)) : ' ').join("");
  }


  function handleNextChar(index: number) {
    setTimeout(
      () => {
        if (currentIndex <= children.length) {
          setText(
            children.substring(0, index) +
              createRandomString(children).substring(index),
          );
          setCurrentIndex(index + 1);
        }
      },
      Math.round(Math.random() * 100),
    );
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

  return (
    <span
      className={`loadingText${href ? " hoverable" : ""}`}
      onClick={handleClick}
    >
      {text}
      {href ? "↗" : ""}
    </span>
  );
}
