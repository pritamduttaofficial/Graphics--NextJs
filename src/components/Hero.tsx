"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 mb-10 md:mb-0">
          Master the Art of Graphics
        </div>
        <div className="hidden md:block font-extralight text-base md:text-xl dark:text-opacity-80 dark:hover:text-opacity-100 duration-200 dark:text-neutral-200 py-4 text-center">
          Learn design principles, tools, and techniques to create
          <br />
          stunning visuals. Start your creative journey today
          <br /> with expert-led tutorials and hands-on projects.
        </div>

        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-transparent bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Explore Us</span>
        </HoverBorderGradient>
      </motion.div>
    </AuroraBackground>
  );
}
