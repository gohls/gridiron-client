import { useState, useCallback } from 'react';

const usePasswordStrength = () => {
  const [strength, setStrength] = useState(0);

  const calculateStrength = useCallback((password: string): number => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score++;
    if (password.length >= 12) score++;

    setStrength(score);
    return score;
  }, []);

  return { strength, calculateStrength };
};

export default usePasswordStrength;
