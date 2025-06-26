'use client'
import newStyled from "@emotion/styled";
import { StarsBackground } from "./stars";
import {animate, motion, useMotionTemplate, useMotionValue, useTransform} from 'motion/react'
import { useEffect, useRef } from "react";

 const RotationWrapper = newStyled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

export default function Testimonial() {

  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
);
const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
);

// handle mouse move on document
useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        // animate mouse x and y
        animate(mouseX, e.clientX);
        animate(mouseY, e.clientY);
    };
    if (typeof window === 'undefined') return;
    // recalculate grid on resize
    window.addEventListener('mousemove', handleMouseMove);
    // cleanup
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
}, []);

const cardRef = useRef<HTMLDivElement>(null);

const dampen = 40;
const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
});
const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
});

const diagonalMovement = useTransform<number, number>(
  [rotateX, rotateY],
  ([newRotateX, newRotateY]) => {
      const position: number = newRotateX + newRotateY;
      return position;
  }
);
const sheenPosition = useTransform(
  diagonalMovement,
  [-5, 5],
  [-100, 200]
);

const sheenOpacity = useTransform(
  sheenPosition,
  [-100, 0, 100, 200],
  [0, 0.1, 0.1, 0]
);

const sheenGradient = useMotionTemplate`linear-gradient(
  55deg,
  transparent,
  rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
  transparent)`;
  return (
    <StarsBackground className="flex w-full h-[40rem] justify-center items-center perspective-[1000px]">
      <div className="flex w-full min-h-screen justify-center items-center ">
        {/* <div className="font-sans font-bold text-7xl text-[#444444]">
          Stars
        </div> */}
        <RotationWrapper style={{ rotateX, rotateY }}>
        <div className="relative h-[50vw] w-[50vw]"></div>       
          <motion.div ref={cardRef} style={{ backgroundImage: sheenGradient }} className="absolute top-1/4 z-10 translate-z-40 backdrop-blur-[2px]">
            <motion.div className='h-80 w-[60rem] flex flex-col items-end gap-4  bg-white/10 backdrop-blur-lg rounded-xl px-10 text-center text-white'>
                <div className="mt-24">
                    <div className='text-[#e9e9e9] text-3xl font-bold'>“Vaani&apos;s AI voice cloning and dubbing deliver studio-quality results with unmatched speed and ease.”</div>
                    <div className="text-[#e9e9e9] text-right mt-12 -space-y-1">
                        <div className="text-2xl font-bold">Gishant Chopra</div>
                        <div className='font-medium text-lg text-white/40'>Founder</div>
                        <div className="text-lg font-medium text-white/40">RoughDraft Studios</div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
      </RotationWrapper>
      </div>
    </StarsBackground>
  );
}



