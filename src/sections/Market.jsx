import React from 'react'

function Market() {
  return (
    <section className="mt-36 sm:px-5">
      <div className="h-auto sm:h-[670px] max-w-7xl flex items-center relative mx-auto ">
        <img src='/assets/images/marketing-ring.svg' className='h-full w-auto absolute sm:h-[370px] my-auto right-0  top-0 bottom-0 hidden sm:flex'/> 
        <img
          className="absolute left-0 top-0 bottom-0 w-[75%] max-w-5xl sm:m-auto xl:m-0 h-auto z-20 self-center hidden sm:flex "
          src="/assets/images/marketing-dog.svg"
        />

        <div className="mx-auto max-w-[1200px] w-full h-auto sm:h-[370px] items-center  relative market-blur bg-transparent rounded-[32px] flex flex-col sm:flex-row gap-y-[66px]">
          <div className="w-[43%] hidden sm:flex" />
          <img
            src="/assets/images/marketing-dog-sm.svg"
            className="w-full h-auto flex sm:hidden"
          />
          <div className="w-[90%] mx-auto  sm:w-[60%]">
            <div className="max-w-lg">
              <h1 className="font-montserrat text-white text-4xl sm:text-5xl font-bold">
                MARKETING PLAN
              </h1>
              <p className="text-sm text-white font-montserrat sm:mt-8 mt-4 text-opacity-80 leading-[24px]">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <img
            src="/assets/images/marketing-line-bg-sm.svg"
            className="w-full h-auto flex sm:hidden"
          />
        </div>
      </div>
    </section>
  )
}

export default Market
