import Image from 'next/image'
import React from 'react'

const Ecosystem = () => {
  const ecosystem = [
    {
      title: "Thorough Analysis",
      desc: "Conduct comprehensive research into emerging technologies and industries exhibiting strong growth potential. Focus your attention onsectors like artificial intelligence, biotechnology, renewable energy, blockchain, and electric vehicles. Stay updated on the most recent advancements, company updates, and trends within these sectors."
    },
    {
      title: "Diversification",
      desc: "Distribute your investments across various assets within your chosen sectors. Consider investing in individual stocks, exchange-traded funds (ETFs), and possibly explore opportunities in venture capital within promising startups."
    },
    {
      title: "Long-Term Outlook",
      desc: "Prepare for a sustained investment horizon. Emerging technologies and high-growth sectors may require time to fully develop, but patient investors could reap substantial rewards as these industries expand and disrupt traditional markets."
    }
  ]
  return (
    <div id='ecosystem' style={{
      backgroundImage: `url('/assets/Group1.svg')`,
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
    }} className='flex justify-center items-center flex-col w-full h-full  pt-16 pb-32  '>
      <p className="text-yellow text-[48px] leading-[120%] font-bold flex flex-col justify-center items-center gap-3">
        <span>Ecosystem</span>
        <div style={{ background: "linear-gradient(90deg, #FFF000 0%, #232323 100%)" }} className='w-80 h-[6px]'></div>
      </p>
      <div className='flex justify-center items-center flex-col md:flex-row w-full h-full pt-28 pb-8 px-32 xl:px-72 '>
        <div className="flex justify-center items-center flex-col w-7/12 gap-6">
          {ecosystem.map((item) => (
            <div className="flex justify-start items-start gap-3 flex-col" key={item.title}>
              <p className="text-yellow text-[25px] leading-[120%] font-bold capitalize ">{item.title}</p>
              <p className="text-[16px] leading-[150%] opacity-60 w-10/12 capitalize">{item.desc}</p>
            </div>
          ))}
        </div>
        <Image src="/assets/pic2.webp" width={420} height={500} className='rounded-3xl' />
      </div>


    </div>
  )
}

export default Ecosystem