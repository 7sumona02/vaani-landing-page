"use client";

import { Download, Play } from "lucide-react";
import { SelectButton } from "./SelectButton";
import { Tabs } from "./ui/tabs";
import AiSugg from "./AiSugg";
import VoiceCard from "./VoiceCard";

export function TabsDemo() {
  const tabs = [
    {
      title: "Text to Speech",
      value: "tts",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/20 shadow-xl shadow-[#7840FF60]">
           <div className="relative h-full">
                <div className="container max-w-3xl mx-auto">
                    <p className="pt-10 text-white text-xl">In the ancient land of Eldoria, where skies shimmered and forests [whispering] whispered secrets to the wind, lived a dragon named Zephyros. [sarcastic] Not the “burn it all down” kind - [exhales] he was gentle, wise, with eyes like old stars. [softly] Even the birds fell silent when he passed.</p>
                </div>
                <div className="md:translate-y-14">
                     <div className="container max-w-3xl mx-auto flex md:flex-row flex-col gap-3 pt-32">
                    <AiSugg name="Jessica" desc="Narrate a story" />
                    <AiSugg name="Athena" desc="Narrate a story" />
                    <AiSugg name="Luna" desc="Narrate a story" />
                </div>
                <div className="py-6">
                    <div className="container mx-auto max-w-3xl h-[0.8px] bg-white/30"></div>
                </div>
                <div className="container mx-auto max-w-3xl flex items-center justify-between">
                    <div>
                        <SelectButton />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#928FFF] rounded-full flex justify-center items-center p-3"><Play className="text-white size-4" fill="white" /></div>
                        <div className="bg-transparent rounded-full flex justify-center items-center p-3 border border-white/40"><Download className="text-white size-4" /></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      ),
    },
    {
      title: "Voice Cloning",
      value: "vc",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/20 shadow-xl shadow-[#7840FF60]">
         <div className="relative h-full flex items-center justify-center">
                <div className="container mx-auto max-w-3xl grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-5">
                        <div className="text-xl font-medium text-[#e9e9e9]">Original</div>
                        <VoiceCard />
                        <VoiceCard />
                        <VoiceCard />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-xl font-medium text-[#e9e9e9]">Voice Clone</div>
                        <VoiceCard />
                        <VoiceCard />
                        <VoiceCard />
                    </div>
                </div>
            </div>
        </div>
      ),
    },
    {
      title: "SFX Generation",
      value: "sfx",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/20 shadow-xl shadow-[#7840FF60]">
          <div className="relative h-full">
                <div className="container max-w-3xl mx-auto">
                    <p className="pt-10 text-white text-xl">In the ancient land of Eldoria, where skies shimmered and forests [whispering] whispered secrets to the wind, lived a dragon named Zephyros. [sarcastic] Not the “burn it all down” kind - [exhales] he was gentle, wise, with eyes like old stars. [softly] Even the birds fell silent when he passed.</p>
                </div>
                <div className="pt-54">
                <div className="py-6">
                    <div className="container mx-auto max-w-3xl h-[0.8px] bg-white/30"></div>
                </div>
                <div className="container mx-auto max-w-3xl flex items-center justify-between">
                    <div>
                        <SelectButton />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#928FFF] rounded-full flex justify-center items-center p-3"><Play className="text-white size-4" fill="white" /></div>
                        <div className="bg-transparent rounded-full flex justify-center items-center p-3 border border-white/30"><Download className="text-white size-4" /></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-40 mb-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
