import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import TechStackSlider from "./TechStackSlider";

interface HomeProps {
  picture1: string;
  picture2: string;
  picture3: string;
}

export default function Home({ picture1, picture2, picture3 }: HomeProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}

    {/* Purple glow effects */}
    <div
      className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-purple-500/5 dark:from-purple-900/20 dark:via-transparent dark:to-purple-900/20 pointer-events-none"
    >
    </div>

    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('/grid-dark.svg')] pointer-events-none opacity-50"
    >
    </div>

      <div className="h-[60vh] lg:h-[100vh] flex items-center justify-center bg-gradient-to-r from-violet-700 to-purple-900 dark:from-violet-900 dark:to-purple-950">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-5">
          Welcome to Lambda Dev Club
        </h1>
      </div>


      {/* Sliding Sections - Mobile Only */}
      <div ref={container} className="py-10 md:py-20 lg:hidden">
        <Slide
          src={picture1}
          direction="left"
          left="-40%"
          progress={scrollYProgress}
          text="Innovate"
        />
        <Slide
          src={picture2}
          direction="right"
          left="-25%"
          progress={scrollYProgress}
          text="Create"
        />
        <Slide
          src={picture3}
          direction="left"
          left="-75%"
          progress={scrollYProgress}
          text="Collaborate"
        />
      </div>

      {/* Tech Stack Section */}
      <TechStackSlider />

      {/* CTA Section */}
      <div className="h-[60vh] lg:h-[100vh] flex items-center justify-center bg-gradient-to-r from-purple-900 to-violet-700 dark:from-purple-950 dark:to-violet-900">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center px-5">
          Join Us in Shaping the Future
        </h2>
      </div>
    </main>
  );
}

interface SlideProps {
  src: string;
  direction: "left" | "right";
  left: string;
  progress: any;
  text: string;
}

const Slide: React.FC<SlideProps> = ({
  src,
  direction,
  left,
  progress,
  text,
}) => {
  const directionMultiplier = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * directionMultiplier, -150 * directionMultiplier]
  );

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap mb-10"
    >
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
    </motion.div>
  );
};

interface PhraseProps {
  src: string;
  text: string;
}

const Phrase: React.FC<PhraseProps> = ({ src, text }) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-3xl md:text-4xl font-bold text-violet-600 dark:text-violet-400">
        {text}
      </p>
      <span className="relative h-[20vw] md:h-[15vw] aspect-[4/3] rounded-lg overflow-hidden">
        <img src={src} alt={text} className="object-cover w-full h-full" />
      </span>
    </div>
  );
};
