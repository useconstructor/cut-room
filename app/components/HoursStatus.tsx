"use client";

import { useState, useEffect } from "react";

type DayHours = { open: number; close: number } | null;

const HOURS: DayHours[] = [
  null, // Sunday: 10am-4pm = index 0
  null, // Monday: Closed = index 1
  { open: 9, close: 19 }, // Tuesday
  { open: 9, close: 19 }, // Wednesday
  { open: 9, close: 19 }, // Thursday
  { open: 9, close: 19 }, // Friday
  { open: 8, close: 18 }, // Saturday
];

// Reorder: 0=Sun, 1=Mon ... 6=Sat
const SCHEDULE: DayHours[] = [
  { open: 10, close: 16 }, // Sunday
  null,                     // Monday
  { open: 9, close: 19 },  // Tuesday
  { open: 9, close: 19 },  // Wednesday
  { open: 9, close: 19 },  // Thursday
  { open: 9, close: 19 },  // Friday
  { open: 8, close: 18 },  // Saturday
];

function checkOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hours = SCHEDULE[day];
  if (!hours) return false;
  const currentHour = now.getHours() + now.getMinutes() / 60;
  return currentHour >= hours.open && currentHour < hours.close;
}

export default function HoursStatus() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOpen(checkOpen());
    const interval = setInterval(() => setIsOpen(checkOpen()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (isOpen === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-heading font-semibold tracking-widest uppercase ${
        isOpen
          ? "bg-emerald-900/40 text-emerald-400 border border-emerald-700/50"
          : "bg-[#C41E3A]/20 text-[#C41E3A] border border-[#C41E3A]/40"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${isOpen ? "bg-emerald-400 animate-pulse" : "bg-[#C41E3A]"}`}
      />
      {isOpen ? "Open Now" : "Closed"}
    </span>
  );
}
