import React from 'react'

const Faq = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full h-full gap-10 pt-16 pb-24 border-b-[1px] border-[#FFF000]'>
      <p className="text-yellow text-[48px] leading-[120%] font-bold flex flex-col justify-center items-center gap-3">
        <span>Jabber FAQ</span>
        <div style={{ background: "linear-gradient(90deg, #FFF000 0%, #232323 100%)" }} className='w-[475px] h-[6px]'></div>
      </p>
      <p className="text-center text-[#C9C4BD] text-[16px] leading-[150%] w-10/12 capitalize">Welcome to our comprehensive FAQ section dedicated to addressing common inquiries about Haku Doge Token and its associated features. If your question isn't answered here, feel free to reach out to our dedicated support team. You can get in touch via the provided contact form or use our AI assistant for further assistance. We're here to ensure you have a smooth and enjoyable experience with Haku Doge.</p>

      

    </div>
  )
}

export default Faq