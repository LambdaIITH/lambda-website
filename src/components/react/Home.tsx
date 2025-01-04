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
      <div className="h-[50vh] md:h-[100vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Welcome to Lambda Dev Club
        </h1>
      </div>
      <div ref={container} className="py-10 md:py-20">
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
      <TechStackSlider />
      <div className="h-[50vh] md:h-[100vh] flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
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

const Slide: React.FC<SlideProps> = ({ src, direction, left, progress, text }) => {
  const directionMultiplier = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * directionMultiplier, -150 * directionMultiplier]
  );

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap mb-10 md:mb-20"
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
      <p className="text-[5vw] md:text-[3vw] lg:text-[2vw] font-bold text-primary">{text}</p>
      <span className="relative h-[10vw] md:h-[5vw] lg:h-[3vw] aspect-[4/3] rounded-lg overflow-hidden">
        <img
          src={src}
          alt="Lambda Dev Club"
          className="object-cover w-full h-full"
        />
      </span>
    </div>
  );
};





