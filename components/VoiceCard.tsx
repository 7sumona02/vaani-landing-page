import { Play } from 'lucide-react'
import React from 'react'

const VoiceCard = () => {
  return (
    <div className='bg-[#9C70DE26] p-6 rounded-lg text-[#e9e9e9] flex items-center justify-between'>
        <div className='flex gap-4'>
            <div>
                <img src='/VC.svg' className='w-12' />
            </div>
            <div className='flex flex-col'>
                <div className='text-lg font-medium'>Lily</div>
                <div className='text-sm'>Original</div>
            </div>
        </div>
        <div>
            <div className="bg-white/20 rounded-full flex justify-center items-center p-3"><Play className="text-white size-4" fill="white" /></div>
        </div>
    </div>
  )
}

export default VoiceCard