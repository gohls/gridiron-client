import React, { useState, useEffect } from 'react';
import '@/index.css';

interface TypewriterProps {
  text: string;
  delay: number;
  delayStart?: boolean;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay,
  delayStart = true,
  onComplete,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex === -1) {
      // Initial 2-second pause (show blinking cursor)
      if (delayStart) {
        const initialPause = setTimeout(() => {
          setCurrentIndex(0);
        }, 2000);

        return () => clearTimeout(initialPause);
      } else {
        setCurrentIndex(0);
      }
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className={`typewriter ${showCursor ? 'with-cursor' : ''}`}>
      {currentText}
    </span>
  );
};

export default Typewriter;
