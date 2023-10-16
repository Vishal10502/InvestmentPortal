import { Flow } from "../icons/flow";
import { Intellisense } from "../icons/intellisense";
import { Keyboard } from "../icons/keyboard";
import { MagicBranch } from "../icons/magic-branch";
import { Prebuilds } from "../icons/prebuilds";
import { Preview } from "../icons/preview";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  {
    icon: Prebuilds,
    title: "Expert Insights",
    text: "Access expert insights, in-depth market analyses, and actionable investment recommendations to make confident decisions.",
  },
  {
    icon: Intellisense,
    title: "Automatic Portfolio Balancing",
    text: "Keep your portfolio aligned with your investment objectives through automated rebalancing.",
  },
  {
    icon: Flow,
    title: "Built for flow",
    text: "A completely redesigned experience to keep you in flow.",
  },
  {
    icon: MagicBranch,
    title: "Responsive Support",
    text: "Receive expert assistance from our dedicated customer support team, ready to address your queries and provide guidance.",
  },
  {
    icon: Keyboard,
    title: "Invest Anywhere, Anytime",
    text: "Manage your investments on the go with our mobile app, available for both iOS and Android devices.",
  },
  {
    icon: Preview,
    title: "Effortless Auto-Investing",
    text: "Set up automatic investments to steadily grow your wealth without the burden of manual transactions.",
  },
];

export const MoreFeatures = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, y }}
      className="mx-auto grid w-full max-w-[70rem] grid-cols-3 gap-20 py-96"
    >
      {content.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <span className="padding-10 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#2196F3]">
            <Icon className="h-10 w-10" />
          </span>
          <h3 className="mb-2 text-xl text-black font-bold text-start">{title}</h3>
          <p className="text-md font-semibold text-start">{text}</p>
        </div>
      ))}
    </motion.section>
  );
};
