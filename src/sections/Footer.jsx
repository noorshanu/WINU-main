import {BsTwitter,BsFacebook} from 'react-icons/bs'

function Footer() {
  return (
    <section className=" mt-12">
      <div className="mx-auto text-center relative">
        <img src="/assets/logos/text-logo.svg" alt="" className="mx-auto z-40" />

        <p className="text-white text-sm font-[500] mt-3 z-40">
          Clarity gives you the blocks and components you need to <br /> create
          a truly professional website.
        </p>
       
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
        <div className="">
            <div className="flex">
                <a href=""><BsTwitter/></a>
                <a href=""><BsFacebook/></a>

            </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;
