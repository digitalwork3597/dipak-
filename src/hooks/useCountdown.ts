import { useState, useEffect } from 'react';

export const PROMO_CONFIG = {
  DURATION_HOURS: 48,
  STORAGE_KEY: 'borcelle_promo_end_timestamp',
};

export interface CountdownState {
  hours: string;
  minutes: string;
  seconds: string;
  formattedTime: string;
  isExpired: boolean;
  totalSeconds: number;
}

export function useCountdown(): CountdownState {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(PROMO_CONFIG.STORAGE_KEY);
      const now = Date.now();
      if (stored) {
        const endTime = parseInt(stored, 10);
        if (!isNaN(endTime)) {
          const remaining = Math.floor((endTime - now) / 1000);
          return Math.max(0, remaining);
        }
      }
      // Initialize new 48-hour timestamp
      const newEndTime = now + PROMO_CONFIG.DURATION_HOURS * 3600 * 1000;
      localStorage.setItem(PROMO_CONFIG.STORAGE_KEY, newEndTime.toString());
      return PROMO_CONFIG.DURATION_HOURS * 3600;
    } catch {
      return PROMO_CONFIG.DURATION_HOURS * 3600;
    }
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = Math.floor(timeLeft % 60);

  const hoursStr = h < 10 ? `0${h}` : `${h}`;
  const minutesStr = m < 10 ? `0${m}` : `${m}`;
  const secondsStr = s < 10 ? `0${s}` : `${s}`;

  return {
    hours: hoursStr,
    minutes: minutesStr,
    seconds: secondsStr,
    formattedTime: `${hoursStr}:${minutesStr}:${secondsStr}`,
    isExpired: timeLeft <= 0,
    totalSeconds: timeLeft,
  };
}
