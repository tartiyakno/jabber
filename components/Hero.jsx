import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div style={{
      backgroundImage: `url('/assets/Group.svg')`,
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
    }} className='flex justify-between items-center flex-col md:flex-row w-full h-full px-32 xl:px-72 py-16 border-b-[1px] border-[#FFF000]'>
      <div className="flex flex-col justify-start items-start gap-4 w-7/12">
        <p className="text-yellow text-[36px] leading-[120%] font-bold capitalize w-8/12">Jabber World: Next Generation meme coin to rule world.</p>
        <p className="text-[16px] leading-[150%] w-10/12">At Haku Doge, we're not just a cryptocurrency project; we're a tight-knit
          community of individuals who share a common vision: to see our beloved
          coin ascend to new heights. Haku Doge may be an old dog in the crypto
          world, but our spirit is as vibrant as ever. Our mission is simple but
          profound: to build a thriving and prosperous community that benefits each
          and every one of its members.</p>
        <div className="flex justify-center items-center gap-6">
          <button className='text-black p-[15px] bg-yellow rounded-xl flex justify-center items-center leading-[150%] font-bold'>Telegram</button>
          <button className='text-black p-[15px] bg-yellow rounded-xl flex justify-center items-center leading-[150%] font-bold'>Twitter</button>
        </div>
      </div>
      <Image src="/assets/pic1.webp" width={420} height={500} className='rounded-3xl'/>
    </div >
  )
}

export default Hero