"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";

const WEDDING_DATE = new Date(wedding.dateISO);

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft());

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Días", value: time.days },
    { label: "Horas", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Seg", value: time.seconds },
  ];

  return (
    <div
      className="mx-auto grid max-w-lg grid-cols-4 gap-1.5 xs:gap-2 sm:gap-6"
      aria-label="Cuenta regresiva"
    >
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <div className="font-display text-[1.35rem] font-medium tracking-wide text-ivory sm:text-4xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-0.5 text-[8px] uppercase tracking-[0.18em] text-ivory/55 sm:mt-1 sm:text-[10px] sm:tracking-[0.28em]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
