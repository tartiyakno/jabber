"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';


const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = ({ theme, setTheme }) => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="bg-transparent my-4 shadow-xl hover:scale-105 duration-500 ease-out ">
      <h2 style={{
        // border: "1px solid #9C60BB80",
      }}
        onClick={toggleAccordion}
        className="faq-bg border-b border-[#ffffff33]  flex flex-row justify-between items-center gap-4 font-semibold py-4 cursor-pointer text-black dark:text-yellow md:text-xl lg:text-[24px] leading-[150%]  w-full capitalize"
      >
        <p className="w-10/12 md:w-full py-1">{title}</p>
        <svg className={`h-[30px] sm:h-[unset] fill-current flex justify-end float-right items-end transform transition-transform duration-500 ${isOpen ? "rotate-180" : ""
          }`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="white" />
        </svg>
      </h2>
      <div
        className="border-l-2 border-[#02E6B1] overflow-hidden max-h-0 duration-500 transition-all"
        style={isOpen ? { maxHeight: "1000px" } : { maxHeight: "0" }}
      >
        <p className="py-3 px-8 text-gray-900 dark:text-white-2lite">{content}</p>
      </div>
    </li>
  );
};

const Faq = () => {
  return (
    <div id='faq' className='flex justify-center items-center flex-col w-full h-full gap-10 pt-16 pb-24 border-b-[1px] border-[#FFF000]'>
      <p className="text-yellow text-[48px] leading-[120%] font-bold flex flex-col justify-center items-center gap-3">
        <span>Jabber FAQ</span>
        <div style={{ background: "linear-gradient(90deg, #FFF000 0%, #232323 100%)" }} className='w-[475px] h-[6px]'></div>
      </p>
      <p className="text-center text-[#C9C4BD] text-[16px] leading-[150%] w-10/12 capitalize">Welcome to our comprehensive FAQ section dedicated to addressing common inquiries about Haku Doge Token and its associated features. If your question isn't answered here, feel free to reach out to our dedicated support team. You can get in touch via the provided contact form or use our AI assistant for further assistance. We're here to ensure you have a smooth and enjoyable experience with Haku Doge.</p>

      <motion.div
        whileInView={{ y: [-150, -70, 0], opacity: [0, 0.5, 1] }}
        transition={{ duration: 0.5 }} id="faq" className=' w-7/12 flex justify-center items-center flex-col gap-16 relative '>
        <section id="faq" className="w-full flex justify-center items-start">
          <ul className="flex flex-col w-full">
            <AccordionItem
              title="What is JABBER WORLD Token?"
              content="Jabber world Token isn't just any token; it's a key element of the Haku Doge community, an exclusive
              group of forward-thinking supporters. This close-knit community collaborates on impactful projects,
              carefully chosen through democratic voting led by esteemed board members."
            />
            <AccordionItem
              title="Why Choose JABBER WORLD?"
              content="Jabber world Token isn't just any token; it's a key element of the Haku Doge community, an exclusive
              group of forward-thinking supporters. This close-knit community collaborates on impactful projects,
              carefully chosen through democratic voting led by esteemed board members."
            />
            <AccordionItem
              title="How Can I Purchase $JAB?"
              content="Jabber world Token isn't just any token; it's a key element of the Haku Doge community, an exclusive
              group of forward-thinking supporters. This close-knit community collaborates on impactful projects,
              carefully chosen through democratic voting led by esteemed board members."
            />
            <AccordionItem
              title="What's Next for JABBER WORLD Token?"
              content="Jabber world Token isn't just any token; it's a key element of the Haku Doge community, an exclusive
              group of forward-thinking supporters. This close-knit community collaborates on impactful projects,
              carefully chosen through democratic voting led by esteemed board members."
            />

          </ul>
        </section>

      </motion.div>


    </div>
  )
}

export default Faq