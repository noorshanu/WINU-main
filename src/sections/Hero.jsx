import React from 'react'

const Hero = () => {
  return (
    <div className="h-fit ">
      <img
        src="/assets/images/hero-bg.svg"
        className="w-screen sm:h-[900px] sm:block hidden absolute -z-10 inset-0"
      />
      <img
        src="/assets/images/hero-bg-sm.svg"
        className="w-screen sm:h-[900px] sm:hidde block absolute -z-10 inset-0"
      />
      <div class="relative mx-auto max-w-7xl px-2 h-fit mt-[100px] sm:mt-0 sm:h-[620px] flex flex-col justify-end sm:justify-center items-center">
        <div className="hidden sm:flex gradient mx-auto left-0 right-0 absolute" />
        <img
          src="/assets/images/hero-dog.svg"
          className="hidden sm:flex sm:w-[50vw] lg:w-[36vw] h-[auto] left-0 right-0 mx-auto lg:z-20 absolute "
        />
        <div class="flex gap-x-28 items-center flex-col justify-around w-full sm:flex-row z-30">
          <div className="z-10 uppercase  sm:w-[50%]">
            <div className="w-fit mb-[-30px] sm:mb-0 z-30">
              <h1 class=" tracking-tighter text-left text-white font-serif  text-[9vw] sm:text-[4.5vw] lg:text-[3.5vw] font-normal  font-power">
                First wrapped
              </h1>
              <h1 class=" tracking-tighter text-center sm:text-left text-white font-serif leading-[1.5] text-[12vw] sm:text-[5.5vw] lg:text-[4.5vw] font-semibold font-no-bills">
                and 2.0 Swap <span className="ml-3 sm:ml-8 hidden sm:inline"> + </span>
              </h1>
              <h1 class="tracking-tighter text-right sm:text-left text-white font-serif leading-[0.4] text-[9vw] sm:text-[4.5vw] lg:text-[3.5vw]  font-normal  font-power">
                LAunchpad
              </h1>
            </div>
          </div>
          <div className="relative flex sm:hidden">
            <img
              src="/assets/images/hero-dog.svg"
              className="w-full h-auto  z-20  "
            />
          </div>
          <div className="hidden xl:flex" />
          <div className="sm:w-[50%]  max-w-md px-2 py-7 z-30 rounded-[19px] rounded-tl-none  text-white bg-blur hidden sm:flex">
            <div className="mx-auto w-fit">
              <p> Must unique and</p>
              <p>best launchpad on shibarium chain</p>
            </div>
          </div>
          <div className="hidden xl:flex" />
        </div>
      </div>
      <div className="flex justify-center mt-3 gap-x-5 font-montserrat text-sm font-bold z-30">
        <button className="bg-white text-black rounded-full border border-transparent py-3.5 px-8 hover:bg-transparent hover:border-[#FD7D00] hover:text-[#FD7D00]">
          Join Telegram
        </button>
        <button className="bg-white text-black rounded-full border border-transparent py-3.5 px-8 hover:bg-transparent hover:border-[#FD7D00] hover:text-[#FD7D00]">
          Read Whitepaper
        </button>
      </div>
    </div>
  )
}

export default Hero
