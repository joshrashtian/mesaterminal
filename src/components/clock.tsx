"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Clock() {
  const [time, setTime] = useState<{
    hour: number;
    minute: number;
    second: number;
  }>();

  useEffect(() => {
    const interval = setInterval(() => {
      const dateObject = new Date();

      const hour = dateObject.getHours();
      const minute = dateObject.getMinutes();
      const second = dateObject.getSeconds();

      setTime({ hour: hour, minute, second });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return;
  return (
    <motion.time
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="font-bold drop-shadow-xl bg-gradient-to-br from-orange-500 to-orange-800 inline-flex items-end bg-clip-text text-transparent text-7xl"
    >
      {`${time?.hour}:${time?.minute < 10 ? `0${time.minute}` : time.minute}`}
      <pre className="text-3xl">:{time?.second}</pre>
    </motion.time>
  );
}
