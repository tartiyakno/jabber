import React from 'react'

const Roadmap = () => {
  const phase = [
    {
      desc: [
        'Presale Launch',
        'Community Engagement',
        'Marketing & Advertising Campaigns',
        'Token Burn (10%)',
        'Continuous Improvement'
      ]
    },
    {
      desc: [
        'Presale Conclusion',
        'DEX Listing',
        'Expanded Community Initiatives',
        'Amplified Marketing Efforts',
        'Token Burn (10%)',
      ]
    },
    {
      desc: [
        'Additional Token Burn (5%)',
        'Advanced Community Building',
        'CEX Listing',
        'Sustainable Development',
        'Long-Term Vision'
      ]
    }
  ]
  return (
    <div className='flex justify-center items-center flex-col w-full h-full gap-10 pt-16 pb-24 border-b-[1px] border-[#FFF000]'>
      <p className="text-yellow text-[48px] leading-[120%] font-bold flex flex-col justify-center items-center gap-3">
        <span>Jabber World Roadmap</span>
        <div style={{ background: "linear-gradient(90deg, #FFF000 0%, #232323 100%)" }} className='w-[475px] h-[6px]'></div>
      </p>

      <div className="flex justify-center items-center gap-6">
        {phase.map((item, index) => (
          <div className={`w-[410px] h-[320px] flex justify-start items-start gap-3 py-5 px-1 flex-col rounded-xl border-[1px] border-[#FFF000]`} key={item.title}>
            {item.svgPath}
            <p className="text-[28px] leading-[120%] font-bold mt-1 mb-2 w-full text-center text-yellow">Phase {index + 1}</p>
            <p className="text-[16px] leading-[150%] capitalize pl-12 mt-1 gap-5 flex justify-start items-start flex-col">
              {item.desc.map((list, index1) => (
                <div key={index1} className="flex">{list}</div>
              ))}
            </p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Roadmap