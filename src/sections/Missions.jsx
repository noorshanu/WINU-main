import React from 'react'

const Missions = () => {
  return (
    <section className="mt-[75px] sm:mt-4 mb-3 relative overflow-hidden">
      <img src='/assets/images/mission-sm.svg' className='w-full h-auto block sm:hidden'/>
        <img src='/assets/images/mission-gradient.svg' className='absolute top-0 right-0 sm:flex hidden -z-10 sm:max-w-xs md:max-w-none'/>
      <div className=" mx-auto max-w-7xl mt-[35px] sm:mt-32">
        <div className="flex flex-col sm:flex-row justify-between px-4 gap-y-7 mx-auto place-items-center">
          <div className='relative'>
            <img src='/assets/images/mission-bone-gradient.svg' className='hidden sm:flex top-[-200px] absolute'/>
            <h1 className="text-[#fff] font-bold mb-4 font-montserrat text-5xl ">
              Mission
            </h1>
            <p className="text-white max-w-md text-opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's.
            </p>
            <div className="flex mt-7 gap-x-4">
              <button className="font-bold   bg-[#FD7D00] text-white  rounded-full border border-transparent py-2.5 px-8 hover:bg-transparent hover:border-[#FD7D00] hover:text-[#FD7D00] transition-colors duration-300">
                Read more
              </button>
              <button className="bg-white  text-black font-bold w-[140px] rounded-full border border-transparent py-2.5 px-8 hover:bg-transparent hover:border-[#FD7D00] hover:text-[#FD7D00]">
                Buy
              </button>
            </div>
          </div>
          <div className="flex justify-end w-full sm:w-fit">
            <img
              src="/assets/images/mission.svg"
              className=" w-full h-auto hidden sm:flex"
            />
            <img src='/assets/images/mission-line.svg' className='rotate-90 flex sm:hidden mr-[-50px]'/>
            
          </div>
        </div>
      </div>
      <img src='/assets/images/mission-line.svg' className='sm:mt-[-70px] md:mt-[-150px] lg:mt-[-200px] hidden sm:flex'/>

    </section>
  )
}

export default Missions
