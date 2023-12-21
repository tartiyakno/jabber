import Image from 'next/image'
import React from 'react'

const Presale = () => {
  return (
    <div id='presale-details' className='flex justify-center items-center flex-col w-full h-full gap-10 pt-16 pb-24 border-b-[1px] border-[#FFF000]'>
      <p className="text-yellow text-[48px] leading-[120%] font-bold flex flex-col justify-center items-center gap-3">
        <span>What Sets Apart Haku Doge</span>
        <div style={{ background: "linear-gradient(90deg, #FFF000 0%, #232323 100%)" }} className='w-[475px] h-[6px]'></div>
      </p>
      <div className='flex justify-center items-center flex-col md:flex-row gap-28 w-full h-full pt-28 pb-8 px-32 xl:px-72 '>
        <Image src="/assets/pic3.webp" width={420} height={500} className='rounded-3xl' />
        <div className="flex justify-start items-start flex-col w-7/12 gap-16">
          <div className="flex justify-start items-start gap-4 flex-col" >
            <p className="text-yellow text-[25px] leading-[120%] font-bold capitalize ">Tokenomics</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• 50% Presale</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• 25% Burn</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• 20% Liquidity</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• 5% Development/Marketing</p>
          </div>
          {/* <div className="flex justify-start items-start gap-4 flex-col" >
            <p className="text-yellow text-[25px] leading-[120%] font-bold capitalize ">Public Launch on Bitmart and Uniswap.</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• Round 1 Price : $0.005</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• Round 2 Price : $0.006</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• Round 3 Price : $0.007</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• Round 4 Price : $0.008</p>
            <p className="text-[20px] leading-[150%] capitalize font-medium">• Listing Price : $0.01</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Presale