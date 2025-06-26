"use client";

import { Box, Lock, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Choose() {
  return (
        <div className='h-fit w-full bg-black pt-20 pb-20 relative'>
        <div className='container max-w-6xl mx-auto text-white/60 px-20 pt-14 pb-6 relative flex flex-col gap-4'>
           <div className='font-bold pb-12  leading-[5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide'>Why Creators Choose Vaani</div>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <GridItem
                area="md:[grid-area:1/1/2/3]"
                icon={<Box className="h-4 w-4 text-[#e9e9e9]" />}
                title="Instant download"
                description="WAV, MP3, OGG, 48 kHz—ready for post-production or direct publish."
            />

            <GridItem
                area="md:[grid-area:1/3/2/4]"
                icon={<Settings className="h-4 w-4 text-[#e9e9e9]" />}
                title="7 + Indian-language coverage"
                description="Launch in every major market first; new languages appear automatically in your dashboard."
            />

            <GridItem
                area="md:[grid-area:2/1/2/1]"
                icon={<Lock className="h-4 w-4 text-[#e9e9e9]" />}
                title="Extensive voice library"
                description="70 + voices—including celebrity / influencer styles and rich regional speakers—for instant narration."
            />

            <GridItem
                area="md:[grid-area:2/2/2/4]"
                icon={<Sparkles className="h-4 w-4 text-[#e9e9e9]" />}
                title="All-in-one creative workstation"
                description="TTS, personal-voice dubbing, and AI Sound FX in one browser-based tool—no installs, no code."
            />
            </ul>
        </div>
        </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/30 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={45}
          glow={true}
          disabled={false}
          proximity={65}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-[#e9e9e9]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-[#e9e9e9] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
