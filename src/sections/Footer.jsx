import {BsTwitter,BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <section className=" mt-12">
      <div className="mx-auto text-center relative">
        <img src="/assets/logos/text-logo.svg" alt="" className="mx-auto z-40" />

        <p className="text-white text-sm font-[500] mt-3 z-40">
          Clarity gives you the blocks and components you need to <br /> create
          a truly professional website.
        </p>
        <div className=" absolute bottom-[-178%] left-[46%] z-50">
            <div className="flex gap-3 items-center">
                <a href="" className='text-[#fff] border rounded-full px-1 py-1 border-[#fff] text-base'><BsTwitter/></a>
                <a href="" className='text-[#fff] border rounded-full px-1 py-1 border-[#fff] text-base'><BsFacebook/></a>
                <a href="" className='text-[#fff] border rounded-full px-1 py-1 border-[#fff] text-base'><BsInstagram/></a>
                <a href="" className='text-[#fff] border rounded-full px-1 py-1 border-[#fff] text-base'><BsGithub/></a>

            </div>

        </div>
      </div>

      <div className="relative mt-[16rem]">
   
    <div className="black-blur">

    </div>
   
        <img
          src="images/footer-bg.png"
          alt=""
          className="w-full absolute bottom-0"
        />
        <img
          src="images/footer-bt.png"
          alt=""
          className=" absolute bottom-0 w-full z-10"
        />
       
      </div>
    </section>
  );
}

export default Footer;
