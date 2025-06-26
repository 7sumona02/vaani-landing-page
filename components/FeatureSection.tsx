import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-12 leading-[5rem] text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide">
          Why Creators Choose Vaani
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-neutral-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant download</h3>
            <p className="text-gray-600">
              WAV, MP3, OGG, 48 kHz—ready for post-production or direct publish.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Extensive voice library</h3>
            <p className="text-gray-600">
              70 + voices—including celebrity / influencer styles and rich regional speakers—for instant narration.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">7 + Indian-language coverage</h3>
            <p className="text-gray-600">
              Launch in every major market first; new languages appear automatically in your dashboard.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">All-in-one creative workstation</h3>
            <p className="text-gray-600">
              TTS, personal-voice dubbing, and AI Sound FX in one browser-based tool—no installs, no code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;