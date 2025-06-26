import { PricingCard } from "./PricingCard"

const Pricing = () => {
  return (
     <div className='h-fit w-full bg-black pt-20 pb-54 relative'>
        <div className='container max-w-6xl mx-auto text-white/60 md:px-20 px-5 pt-14 pb-6 relative flex flex-col gap-4'>
           <div className='font-bold pb-12  leading-[5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide'>Pricing</div>
               <section className="relative overflow-hidden text-foreground">
      <div className="relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            tier="Creator"
            price="Free"
            bestFor="Watermarked preview."
            CTA="Get Started"
            benefits={[
              { text: "10 hr TTS", checked: true },
              { text: "2 hr dubbing", checked: true },
              { text: "250 SFX", checked: true },
            ]}
          />
          <PricingCard
            tier="Pro"
            price="1,999/mo"
            bestFor="Commercial license and Priority rendering."
            CTA="Get Started"
             benefits={[
              { text: "30 min TTS", checked: true },
              { text: "10 min dubbing", checked: true },
              { text: "25 SFX", checked: true },
            ]}
          />
          <PricingCard
            tier="Custom"
            price="Contact Sales"
            bestFor="SLAs, On-prem / VPC deploy, Dedicated voices."
            CTA="Contact us"
            benefits={[
              { text: "Custom", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
        </div>
    </div>
  )
}

export default Pricing