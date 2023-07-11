function Token() {
  return (
    <section>
      <div className=" mx-auto max-w-7xl mt-32">
        <div className="text-center text-3xl sm:text-5xl">
          <h1 className="text-[#fff] font-bold mb-4">Tokenomics</h1>
          <div className="bg-[#fff] w-[96px] h-[2px] mx-auto"></div>
        </div>

        <div className="text-center mt-[-250px] sm:mt-24">
          <img
            src="assets/images/token.png"
            alt=""
            className="mx-auto w-full h-auto max-w-4xl px-5 text-center hidden sm:block"
          />
          <img
            src="assets/images/tokenomics-sm.svg"
            alt=""
            className="w-full h-auto text-center block sm:hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Token;
