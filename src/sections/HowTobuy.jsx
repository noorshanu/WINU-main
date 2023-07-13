function HowTobuy() {
  return (
    <section className=" mt-[78px] sm:mt-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center text-3xl sm:text-5xl">
          <h1 className="text-[#fff] font-bold mb-4">How To Buy</h1>
          <div className="bg-[#FD7D00] w-[96px] h-[2px] mx-auto"></div>
        </div>

        <div className=" mt-8 sm:mt-16">
          <div className="grid max-w-6xl mx-auto sm:grid-cols-3 gap-x-8 gap-y-4 px-4">
            <div className="box-bg rounded-2xl px-[57px] py-[46px] text-center">
              <h1 className="font-[700] text-2xl text-white mb-3">STEP 1</h1>
              <p className=" text-[#91949A] text-xs font-[500]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the i{' '}
              </p>
            </div>

              <div className="relative bg-black border-white border-opacity-30 border  rounded-2xl px-[57px] py-[46px] text-center">
            <div className="how-to-buy absolute w-full h-full top-[22px] right-[20px] -z-10 hidden sm:block"/>
                
                <h1 className="font-[700] text-2xl text-white mb-3">STEP 2</h1>
                <p className=" text-[#91949A] text-xs font-[500]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the i{' '}
                </p>
              </div>
          

            <div className="  block sm:hidden bg-black border-white border-opacity-30 border  rounded-2xl px-[57px] py-[46px] text-center">
              <h1 className="font-[700] text-2xl text-white mb-3">STEP 2</h1>
              <p className=" text-[#91949A] text-xs font-[500]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the i{' '}
              </p>
            </div>

            <div className="box-bg rounded-2xl px-[57px] py-[46px] text-center  block sm:hidden">
              <h1 className="font-[700] text-2xl text-white mb-3">STEP 3</h1>
              <p className=" text-[#91949A] text-xs font-[500]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the i{' '}
              </p>
            </div>
            <div className="box-bg rounded-2xl px-[57px] py-[46px] text-center">
              <h1 className="font-[700] text-2xl text-white mb-3">STEP 4</h1>
              <p className=" text-[#91949A] text-xs font-[500]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the i{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowTobuy
