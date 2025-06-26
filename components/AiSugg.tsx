import React from 'react'

const AiSugg = ({name, desc}: {name: string, desc: string}) => {
  return (
    <div className='text-white flex justify-center items-center gap-2 font-medium border border-white/40 max-w-[14rem] py-1.5 px-4 rounded-lg text-sm'>
        <div>{name}</div>
        <span>|</span>
        <div>{desc}</div>
    </div>
  )
}

export default AiSugg