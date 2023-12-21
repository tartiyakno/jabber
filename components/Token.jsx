import React from 'react'

const Token = () => {
  const token = [
    {
      title: "Address",
      desc: "0x71B32a9DD0075cb11dB32FFD389a164fdec59b88 ",
    },
    {
      title: "Decimal",
      desc: "18",
    },
    {
      title: "Network",
      desc: "ETH",
    },
    {
      title: "Token symbol",
      desc: "HD$",
    }
  ]
  return (
    <div className='flex justify-center items-center flex-col w-full h-full gap-10 pt-16 pb-24 border-b-[1px] border-[#FFF000]'>
      <p className="text-yellow text-[48px] leading-[120%] font-bold flex flex-col justify-center items-center gap-3">
        <span>Token Details</span>
        <div style={{ background: "linear-gradient(90deg, #FFF000 0%, #232323 100%)" }} className='w-[475px] h-[6px]'></div>
      </p>
      <div className="flex justify-center items-center gap-6">
        {token.map((item, index) => (
          <div className={`flex justify-start items-start gap-3 pt-2 pb-5 px-1 flex-col  ${index < 3 ? 'border-r-[1px] border-[#FFF000]' : ''} ${index === 0 ? '' : 'w-[280px]'}`} key={item.title}>
            {item.svgPath}
            <p className="text-[38px] leading-[155%] font-bold mt-3 mb-2">{item.title}</p>
            <p className="text-[16px] leading-[150%] text-[#C9C4BD] opacity-60 capitalize">{item.desc}
              {index === 0 &&
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M9.64331 6.27332H2.97664C2.24131 6.27332 1.64331 6.87132 1.64331 7.60665V14.2733C1.64331 15.0086 2.24131 15.6066 2.97664 15.6066H9.64331C10.3786 15.6066 10.9766 15.0086 10.9766 14.2733V7.60665C10.9766 6.87132 10.3786 6.27332 9.64331 6.27332Z" fill="#C9C4BD" />
                  <path d="M13.6433 2.27332H6.97664C6.62302 2.27332 6.28388 2.41379 6.03384 2.66384C5.78379 2.91389 5.64331 3.25303 5.64331 3.60665V4.93998H10.9766C11.3303 4.93998 11.6694 5.08046 11.9195 5.33051C12.1695 5.58055 12.31 5.91969 12.31 6.27332V11.6066H13.6433C13.9969 11.6066 14.3361 11.4662 14.5861 11.2161C14.8362 10.9661 14.9766 10.6269 14.9766 10.2733V3.60665C14.9766 3.25303 14.8362 2.91389 14.5861 2.66384C14.3361 2.41379 13.9969 2.27332 13.6433 2.27332Z" fill="#C9C4BD" />
                </svg>
              }
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Token