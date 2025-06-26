import React from 'react'
import UseCard from './UseCard'

const Uses = () => {
  return (
    <div className='h-fit w-full bg-black pt-20 pb-48 relative'>
        <div className='container max-w-6xl mx-auto text-white/60 md:px-20 px-5 pt-14 pb-6 relative flex flex-col gap-4'>
           <div className='font-bold pb-12  leading-[5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide'>Popular Use Cases</div>
           <div className='flex md:flex-row flex-col items-center gap-8'>
                <UseCard title='Advertising & IVR' subtitle='Hyper-localised radio spots and call flows' image='/u1.svg' />
                <UseCard title='Gaming' subtitle='Hyper-localised radio spots and call flows' image='/u2.svg' />
                <UseCard title='Advertising & IVR' subtitle='Hyper-localised radio spots and call flows' image='/u3.svg' />
           </div>
        </div>
    </div>
  )
}

export default Uses