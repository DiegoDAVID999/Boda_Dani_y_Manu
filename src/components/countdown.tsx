"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-09-04T19:00:00-05:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) {
    return (
      <div className="mx-auto grid max-w-md grid-cols-4 gap-3 opacity-0" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-16" />
        ))}
      </div>
    );
  }

  const items = [
    { label: "Días", value: time.days },
    { label: "Horas", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Seg", value: time.seconds },
  ];

  return (
    <div
      className="mx-auto grid max-w-md grid-cols-4 gap-2 sm:gap-4"
      aria-label="Cuenta regresiva para la boda"
    >
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <div className="font-serif text-2xl tracking-wide text-cream sm:text-3xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/70 sm:text-xs">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
