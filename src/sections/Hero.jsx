

const Hero = () => {
  return (
    <div className="h-[725px] ">
      <img
        src="/assets/images/hero-bg.svg"
        className="w-screen h-[900px] absolute inset-0"
      />
      <div className="relative mx-auto max-w-7xl px-2  h-[725px] flex justify-center items-center">
        <div className="hidden sm:flex gradient mx-auto left-0 right-0 absolute" />
        <img
          src="/assets/images/hero-dog.svg"
          className="hidden sm:flex w-[36vw] h-[auto] left-0 right-0 mx-auto z-20 absolute "
        />
        <div className="flex gap-x-28 items-center flex-col justify-between w-full sm:flex-row z-10">
          <div>
            <h1 className="mt-6 tracking-tighter text-left text-white  text-[48px] font-normal italic font-power">
              FIRST WRAPPED
            </h1>
            <h1 className="mt-6 tracking-tighter text-center text-white  text-[48px] font-normal italic font-power">
              AND  SWAP 
            </h1>
            <h1 className="mt-6 tracking-tighter text-right text-white  text-[48px]  font-normal italic font-power">
              LAunchpad
            </h1>
          </div>
          <div className='relative flex sm:hidden'>
            <div className="gradient mx-auto inset-0 absolute" />
            <img
              src="/assets/images/hero-dog.svg"
              className="w-full h-auto  z-20  "
            />
          </div>
          <div />
          <div className=" max-w-md px-16 py-7  rounded-[19px] rounded-tl-none  text-white bg-blur">
            <p> Must unique and</p>
            <p>best launchpad on shibarium chain</p>
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}

export default Hero
