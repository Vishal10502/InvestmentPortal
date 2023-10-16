import { GithubIcon } from "../icons/github";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  // in scrollYProgress = 0, opacity = 1, and so on
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen absolute top-20 py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-80"
    >
      <motion.div
        style={{ position, scale, x: "-50%" }}
        className="fixed left-1/2 z-10 flex flex-col items-center"
      >
        <p className="mb-2 text-base font-dark text-slate-800 scale-125 transition duration-500 cursor-pointer scale-150">
          <span className="font-large text-8xl text-black font-bold">
            IncedoInvest
          </span>{" "}
          Beta
        </p>
        <p className="mb-8 text-center text-base font-light text-slate-800 font-bold hover:scale-125 transition duration-500 cursor-pointer">
          by{" "}
          <a
            href="https://www.incedoinc.com/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className="text-base text-black font-bold"
          >
            Incedo Inc. - Iselin, USA
          </a>
          ,
          <br />
          built by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener nofollow noreferrer "
            className="text-black font-bold"
          >
            Team-1
          </a>
        </p>
        <br />

        <h1 className="mb-20 text-center font-heading text-5xl text-blue-700 font-semibold scale-150">
          Investment Reimagined..
        </h1>

        <div className="grid grid-cols-2 gap-40">
          <Link href="/login">
            <Button
              className="w-full bg-gradient-to-r from-black to-black w-full hover:scale-150 transition duration-500 cursor-pointer"
              type="submit"
            >
              Login
            </Button>
          </Link>
          <h3 className="absolute left-80 text-center text-blue-800 font-bold text-4xl">
            /
          </h3>
          <Link href="/register">
            <Button
              className="w-full bg-gradient-to-r from-black to-black w-full hover:scale-150 transition duration-500 cursor-pointer"
              type="submit"
            >
              Register
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};
