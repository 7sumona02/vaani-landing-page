import React from 'react'

const CTA = () => {
  return (
    <div className='h-fit w-full bg-black pt-20 pb-80 relative'>
        <div className='container max-w-6xl mx-auto text-[#e9e9e9] md:px-20 px-5 pt-14 pb-6 relative flex flex-col items-center gap-4'>
            <div className='text-5xl font-bold text-center text-white'>Bring every Indian story to life instantly.</div>
            <div className='text-[#9f9f9f] font-medium text-2xl'>Need a custom workflow or high-volume quote?</div>
            <div className='flex items-center gap-4 pt-10'>
                <button className='cursor-pointer bg-gradient-to-b from-[#938BFF] to-[#7167FF85] text-lg font-semibold rounded-lg px-6 py-2'>Start Creating</button>
                <button className='cursor-pointer bg-[#333333] text-lg font-semibold rounded-lg px-6 py-2'>Talk to Sales</button>
            </div>
        </div>
    </div>
  )
}

export default CTA