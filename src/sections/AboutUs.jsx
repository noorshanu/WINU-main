import Marquee from 'react-fast-marquee'

function AboutUs() {
  return (
    <section className="mt-[18rem] sm:mt-4 mb-3">
      <div className=" mx-auto max-w-7xl mt-32">
        <div className="flex flex-col sm:flex-row justify-between px-0 sm:px-4 gap-y-8 sm:gap-y-7 mx-auto place-items-center">
          <div className='px-4 sm:px-0'>
            <h1 className="text-[#fff] font-bold mb-4 font-montserrat text-5xl ">About us</h1>
            <p className="text-white max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's.
            </p>
          </div>
          <div className="text-center">
            <img src="/assets/images/about.svg" className=" w-full h-auto hidden sm:flex" />
            <img src="/assets/images/about-sm.svg" className=" w-screen h-auto flex sm:hidden" />
          </div>
        </div>
      </div>
      <div className=" mt-12 hidden sm:block">
        <Marquee speed={30} className="mt-20">
          <img src="images/img1.png" alt="" className=" mx-4" />
          <img src="images/img2.png" alt="" className="mx-4" />
          <img src="images/img3.png" alt="" className=" mx-4" />
          <img src="images/img4.png" alt="" className=" mx-4" />
          <img src="images/img5.png" alt="" className=" mx-4" />
          <img src="images/img1.png" alt="" className=" mx-4" />
          <img src="images/img2.png" alt="" className=" mx-4" />
          <img src="images/img3.png" alt="" className=" mx-4" />
          <img src="images/img4.png" alt="" className=" mx-4" />
          <img src="images/img5.png" alt="" className=" mx-4" />
        </Marquee>
      </div>
    </section>
  )
}

export default AboutUs
