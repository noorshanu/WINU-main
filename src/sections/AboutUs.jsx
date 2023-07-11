import Marquee from "react-fast-marquee";

function AboutUs() {
  return (
    <section className="mt-4 mb-3">
      <div className=" mx-auto max-w-7xl mt-32">
        <div className="flex justify-between items-center mx-auto">
          <div>
            <h1 className="text-[#fff] font-bold mb-4">About us</h1>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
              industry. Lorem Ipsum has been the industry's.Lorem Ipsum is<br/>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's.
            </p>
          </div>
          <div className="text-center">
            <h1>image</h1>
          </div>
        </div>
      </div>
      <div className=" mt-6">
    <Marquee speed={30} className="" >
   
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
  );
}

export default AboutUs;
