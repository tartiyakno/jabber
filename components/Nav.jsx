"use client";
import { useScrollLock } from '@/container/ScrollLockContext'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';


const Nav = ({ check }) => {

  const { isScrollLocked, toggleScrollLock } = useScrollLock();
  const [toggleNav, setToggleNav] = useState(false)

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const toggleNavHandler = () => {
      setToggleNav(prevState => !prevState);
      navLinks.classList.toggle("open");
      links.forEach(link => {
        link.classList.toggle("fade");
      });
    };
    hamburger.addEventListener("click", toggleNavHandler);
    return () => {
      hamburger.removeEventListener("click", toggleNavHandler);
    };
  }, []);

  // check screen width to active mobile navigation

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const screenSize = screenWidth > 768 ? true : false;

  return (
    <div className="main-content w-full z-50 border-b-[1px] border-[#FFF000] px-20 py-4">
      <style>
        {`
          /* Add this style in your CSS-in-JS or styled-components */
          body {
            overflow: ${isScrollLocked ? 'hidden' : 'auto'};
          }
        `}
      </style>
      <nav className='z-30 flex lg:hidden'>
        <div onClick={() => { setToggleNav(prevState => !prevState); toggleScrollLock() }} className="hamburger mt-6">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <ul class="nav-links text-2xl leading-[40px] font-righ text-center text-white flex flex-col justify-center items-center gap-20 md:gap-20 ">
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[24px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#ecosystem" : "/#ecosystem"} >Ecosystem</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[24px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#about" : "/#about"} >About</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[24px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#presale-details" : "/presale-details"} >Presale Details</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[24px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#token-contract" : "/#token-contract"} >Token Contract</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[24px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#roadmap" : "/#roadmap"} >Roadmap</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[24px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#faq" : "/#faq"} >Faq</a></motion.li>
          <li className=' flex justify-center items-center gap-3'>
            <div className="bg-white w-[1px] h-8"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <path d="M27.7375 8.25026C26.8411 8.63698 25.8655 8.9153 24.8606 9.02369C25.9039 8.40388 26.6852 7.42467 27.0579 6.26979C26.0789 6.85218 25.0064 7.26056 23.8879 7.47682C23.4205 6.97709 22.8551 6.57899 22.2271 6.30731C21.5991 6.03563 20.9218 5.89621 20.2375 5.89772C17.469 5.89772 15.2424 8.14186 15.2424 10.8958C15.2424 11.2825 15.2893 11.6692 15.3655 12.0413C11.22 11.8245 7.52271 9.84401 5.0647 6.81178C4.61682 7.57677 4.38212 8.44779 4.38501 9.33424C4.38501 11.0686 5.26685 12.5979 6.61157 13.4973C5.8191 13.4661 5.04519 13.2483 4.35278 12.8616V12.9231C4.35278 15.3518 6.06958 17.3645 8.35767 17.8274C7.92805 17.939 7.4861 17.9961 7.04224 17.9973C6.71704 17.9973 6.40942 17.9651 6.09888 17.9212C6.73169 19.9016 8.57446 21.3401 10.7688 21.387C9.052 22.7317 6.90161 23.5227 4.56665 23.5227C4.14771 23.5227 3.76099 23.5081 3.35962 23.4612C5.57446 24.8821 8.20239 25.7024 11.0325 25.7024C20.22 25.7024 25.2473 18.0911 25.2473 11.4846C25.2473 11.2678 25.2473 11.051 25.2327 10.8342C26.2053 10.1223 27.0579 9.24049 27.7375 8.25026Z" fill="white" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
              <g clip-path="url(#clip0_469_1640)">
                <path d="M30 15.8C30 19.7783 28.4197 23.5936 25.6066 26.4067C22.7936 29.2197 18.9783 30.8 15 30.8C11.0218 30.8 7.20649 29.2197 4.39344 26.4067C1.5804 23.5936 4.57764e-05 19.7783 4.57764e-05 15.8C4.57764e-05 11.8218 1.5804 8.00649 4.39344 5.19345C7.20649 2.3804 11.0218 0.800049 15 0.800049C18.9783 0.800049 22.7936 2.3804 25.6066 5.19345C28.4197 8.00649 30 11.8218 30 15.8ZM15.5382 11.8738C14.0794 12.4813 11.1619 13.7375 6.78942 15.6425C6.08067 15.9238 5.70755 16.2013 5.6738 16.4713C5.61755 16.9269 6.18942 17.1069 6.96755 17.3525L7.29567 17.4557C8.06067 17.705 9.09192 17.9957 9.6263 18.0069C10.1138 18.0182 10.6557 17.8194 11.2538 17.4069C15.3394 14.6488 17.4488 13.2557 17.58 13.2257C17.6738 13.2032 17.805 13.1769 17.8913 13.2557C17.9794 13.3325 17.97 13.4807 17.9607 13.52C17.9044 13.7619 15.66 15.8469 14.4994 16.9269C14.1375 17.2644 13.8807 17.5025 13.8282 17.5569C13.7126 17.6751 13.595 17.7913 13.4757 17.9057C12.7632 18.5919 12.2307 19.1057 13.5038 19.9457C14.1169 20.3507 14.6082 20.6825 15.0975 21.0163C15.63 21.38 16.1625 21.7419 16.8525 22.1957C17.0269 22.3082 17.1957 22.43 17.3588 22.5463C17.9794 22.9888 18.54 23.3863 19.2282 23.3225C19.6294 23.285 20.0438 22.91 20.2538 21.785C20.7507 19.1282 21.7275 13.3738 21.9525 11.0019C21.9663 10.8048 21.9581 10.6067 21.9282 10.4113C21.9105 10.2537 21.8342 10.1084 21.7144 10.0044C21.5438 9.88665 21.3404 9.82564 21.1332 9.83005C20.5707 9.83942 19.7025 10.1413 15.5382 11.8738Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_469_1640">
                  <rect width="30" height="30" fill="white" transform="translate(4.57764e-05 0.800049)" />
                </clipPath>
              </defs>
            </svg>

          </li>
        </ul>
      </nav>
      <div className='flex justify-between items-center w-full mt-[-5rem] lg:mt-0 p-4 lg:p-0 pt-2'>
        <a href="/">
          <div className='flex justify-center items-center gap-2'>
            <Image src="/assets/pic1.webp" alt="" className="rounded-full" width={74} height={74} />
            <p className='text-[36px] font-semibold text-yellow'>Jabber World</p>
          </div>
        </a>
        <ul className='leading-[30px] text-center  justify-center items-center gap-9 xl:gap-14 hidden lg:flex text-[13px] lg:text-[12px] xl:text-[14px]'>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[16px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#ecosystem" : "/#ecosystem"} >Ecosystem</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[16px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#about" : "/#about"} >About</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[16px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#presale-details" : "/presale-details"} >Presale Details</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[16px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#token-contract" : "/#token-contract"} >Token Contract</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[16px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#roadmap" : "/#roadmap"} >Roadmap</a></motion.li>
          <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 1000, damping: 17 }} className='cursor-pointer flex flex-col justify-center items-center rounded-full font-bold text-sm'>
            <a className='text-[16px] font-semibold tracking-[1.5px] leading-[150%] hover:text-[#FFF000]' href={check ? "#faq" : "/#faq"} >Faq</a></motion.li>
          <li className=' flex justify-center items-center gap-3'>
            <div className="bg-white w-[1px] h-8"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <path d="M27.7375 8.25026C26.8411 8.63698 25.8655 8.9153 24.8606 9.02369C25.9039 8.40388 26.6852 7.42467 27.0579 6.26979C26.0789 6.85218 25.0064 7.26056 23.8879 7.47682C23.4205 6.97709 22.8551 6.57899 22.2271 6.30731C21.5991 6.03563 20.9218 5.89621 20.2375 5.89772C17.469 5.89772 15.2424 8.14186 15.2424 10.8958C15.2424 11.2825 15.2893 11.6692 15.3655 12.0413C11.22 11.8245 7.52271 9.84401 5.0647 6.81178C4.61682 7.57677 4.38212 8.44779 4.38501 9.33424C4.38501 11.0686 5.26685 12.5979 6.61157 13.4973C5.8191 13.4661 5.04519 13.2483 4.35278 12.8616V12.9231C4.35278 15.3518 6.06958 17.3645 8.35767 17.8274C7.92805 17.939 7.4861 17.9961 7.04224 17.9973C6.71704 17.9973 6.40942 17.9651 6.09888 17.9212C6.73169 19.9016 8.57446 21.3401 10.7688 21.387C9.052 22.7317 6.90161 23.5227 4.56665 23.5227C4.14771 23.5227 3.76099 23.5081 3.35962 23.4612C5.57446 24.8821 8.20239 25.7024 11.0325 25.7024C20.22 25.7024 25.2473 18.0911 25.2473 11.4846C25.2473 11.2678 25.2473 11.051 25.2327 10.8342C26.2053 10.1223 27.0579 9.24049 27.7375 8.25026Z" fill="white" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
              <g clip-path="url(#clip0_469_1640)">
                <path d="M30 15.8C30 19.7783 28.4197 23.5936 25.6066 26.4067C22.7936 29.2197 18.9783 30.8 15 30.8C11.0218 30.8 7.20649 29.2197 4.39344 26.4067C1.5804 23.5936 4.57764e-05 19.7783 4.57764e-05 15.8C4.57764e-05 11.8218 1.5804 8.00649 4.39344 5.19345C7.20649 2.3804 11.0218 0.800049 15 0.800049C18.9783 0.800049 22.7936 2.3804 25.6066 5.19345C28.4197 8.00649 30 11.8218 30 15.8ZM15.5382 11.8738C14.0794 12.4813 11.1619 13.7375 6.78942 15.6425C6.08067 15.9238 5.70755 16.2013 5.6738 16.4713C5.61755 16.9269 6.18942 17.1069 6.96755 17.3525L7.29567 17.4557C8.06067 17.705 9.09192 17.9957 9.6263 18.0069C10.1138 18.0182 10.6557 17.8194 11.2538 17.4069C15.3394 14.6488 17.4488 13.2557 17.58 13.2257C17.6738 13.2032 17.805 13.1769 17.8913 13.2557C17.9794 13.3325 17.97 13.4807 17.9607 13.52C17.9044 13.7619 15.66 15.8469 14.4994 16.9269C14.1375 17.2644 13.8807 17.5025 13.8282 17.5569C13.7126 17.6751 13.595 17.7913 13.4757 17.9057C12.7632 18.5919 12.2307 19.1057 13.5038 19.9457C14.1169 20.3507 14.6082 20.6825 15.0975 21.0163C15.63 21.38 16.1625 21.7419 16.8525 22.1957C17.0269 22.3082 17.1957 22.43 17.3588 22.5463C17.9794 22.9888 18.54 23.3863 19.2282 23.3225C19.6294 23.285 20.0438 22.91 20.2538 21.785C20.7507 19.1282 21.7275 13.3738 21.9525 11.0019C21.9663 10.8048 21.9581 10.6067 21.9282 10.4113C21.9105 10.2537 21.8342 10.1084 21.7144 10.0044C21.5438 9.88665 21.3404 9.82564 21.1332 9.83005C20.5707 9.83942 19.7025 10.1413 15.5382 11.8738Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_469_1640">
                  <rect width="30" height="30" fill="white" transform="translate(4.57764e-05 0.800049)" />
                </clipPath>
              </defs>
            </svg>

          </li>

        </ul>

      </div>
    </div >
  )
}

export default Nav;

