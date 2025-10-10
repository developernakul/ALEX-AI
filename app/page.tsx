"use client";

import { Assistant } from "./assistant";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Assistant />

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-[13px] text-black pointer-events-none z-50 font-light"
      >
        @Nakul 😉
      </motion.div>
    </>
  );
}
