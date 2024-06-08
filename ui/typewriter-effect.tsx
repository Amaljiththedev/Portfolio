"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <motion.div ref={scope} className={cn("inline", className)}>
      {wordsArray.map((word, idx) => (
        <span key={`word-${idx}`} className="inline-block" style={{ fontSize: "40px" }}>
          {word.text.map((char, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={`char-${index}`}
              className={cn(
                "dark:text-white text-white opacity-0",
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("text-36xl font-bold text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block bg-blue-500", cursorClassName)}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div className={cn("flex space-x-3 my-6", className)}>
      {wordsArray.map((word, idx) => (
        <span key={`word-${idx}`} className="inline-block" style={{ fontSize: "40px" }}>
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("dark:text-white text-white text-32", word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
    </div>
  );

  return (
    <div className="text-32xl font-bold">
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div style={{ whiteSpace: "nowrap" }}>{renderWords()}</div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("block bg-blue-500", cursorClassName)}
      ></motion.span>
    </div>
  );
};
