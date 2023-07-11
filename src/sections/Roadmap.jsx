import React from 'react'

function Roadmap() {
  return (
    <section className="mt-4 mb-3">
      <div className=" mx-auto max-w-7xl mt-32">
        <div className="text-center text-3xl sm:text-5xl">
          <h1 className="text-[#fff] font-bold mb-4">Road Map</h1>
          {/* <div className="mt-12 max-w-xl mx-auto flex justify-center">
            <div className="flex flex-col items-end w-full">
              <div className="w-96 h-60 rounded-lg bg-white">.</div>
              <img
                src="/assets/images/roadmap-arrow.svg"
                className="w-full h-auto rotate-180"
              />
            </div>
            <img
              className="h-full w-auto"
              src="/assets/images/roadmap-line.svg"
            />
            <div className="flex flex-col items-end w-full">
              <img
                src="/assets/images/roadmap-arrow.svg"
                className="w-full h-auto "
              />

              <RoadmapCard
                text={
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
                }
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Roadmap

let RoadmapCard = ({ text }) => {
  return (
    <div className="bg-[url('/public/assets/images/roadmap-box.svg')] bg-cover w-auto relative">
      <img src="/assets/images/roadmap-box.svg" className="-z-50 w-auto h-[300px] " />
      {/* <div className="px-[48px] py-[93px] w-[430px]  rounded-3xl bg-[#393939] flex justify-center items-center text-white font-montserrat  text-base">
        {text}
      </div> */}
      <div className="px-[48px] py-[93px] absolute inset-0 text-white font-montserrat  text-base">
        {/* {text} */}
      </div>
    </div>
  )
}
