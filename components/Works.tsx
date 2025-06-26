import { ChevronRight } from "lucide-react"

const Works = () => {
  return (
     <div className='min-h-screen w-full bg-black pt-20 pb-16 relative overflow-hidden'>
        <div className='container max-w-6xl mx-auto text-white/60 md:px-20 px-5 pt-14 pb-6 relative flex flex-col gap-4'>
          <div className='pb-12'>
             <div className='font-bold leading-[5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide'>How it Works</div>
             <p className='text-xl text-white/60 font-semibold'>No code. No setup. Everything runs in your browser.</p>
          </div>
          <div className="flex items-center justify-end pb-6">Scroll <ChevronRight className="text-white/60 w-4 ml-0.5" /></div>
          <div className='w-full overflow-x-scroll'>
            <img 
                src='/works.svg' 
                className='min-w-[120vw]' 
                alt='Works illustration'
            />
            </div>
        </div>
    </div>
  )
}

export default Works