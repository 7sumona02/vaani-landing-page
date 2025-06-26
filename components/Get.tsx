'use client';
// import { ReactLenis } from '@studio-freight/react-lenis'
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
const projects = [
  {
    num: '01',
    title: 'Text-to-Speech (TTS)',
    description:
      'Type or paste any script—Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Gujarati—and pick a voice. Vaani speaks it back with human realism, perfect pronunciation, and emotion.',
  },
  {
    num: '02',
    title: 'Voice Dubbing',
    description:
      'Type or paste any script—Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Gujarati—and pick a voice. Vaani speaks it back with human realism, perfect pronunciation, and emotion.',
  },
  {
    num: '03',
    title: 'AI Sound Effects',
    description:
      'Type or paste any script—Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Gujarati—and pick a voice. Vaani speaks it back with human realism, perfect pronunciation, and emotion.',
  }
];
export default function Get() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
      <main className='bg-black pt-54' ref={container}>
           <div className='font-bold pb-32 leading-[5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide max-w-[67rem] mx-auto'>Inside Vaani, You Get:</div>
        <section className='text-white   w-full bg-slate-950  '>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                num={project.num}
                title={project?.title}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
  );
}
interface CardProps {
  i: number;
  num: string;
  title: string;
  description: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  num,
  title,
  description,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start end', 'start start'],
  // });

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='container max-w-8xl mx-auto h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
        }}
        className={`flex flex-col relative -top-[18%] h-fit w-[70%] rounded-md p-10 origin-top`}
      >
        <img src='/GetBg.svg' className='absolute inset-0 w-screen rounded-2xl' />
        <div className='relative z-50 h-[34rem] flex md:flex-row flex-col items-center justify-center space-x-12'>
            <div className='font-medium text-[12rem] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 '>{num}</div>
            <div>
                <div className='flex flex-col items-start gap-4 justify-center max-w-2xl z-50'>
                    <h1 className='font-semibold text-4xl'>{title}</h1>
                    <p className='font-medium text-xl text-[#e9e9e9]'>{description}</p>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};