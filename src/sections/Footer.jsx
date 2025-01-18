import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="text-white-400 flex gap-10 lg:gap-24 max-md:flex-col pt-2">
        <div className="">
          <a href="/" className="pointer-cursor text-white-400">
            <img
              src={footerLogo}
              alt="nike logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="font-montserrat mt-6 text-base text-white-400 sm:max-w-lg leading-7">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex flex-row gap-5 items-center">
            {socialMedia.map((media) => (
              <span key={media.alt} className="w-12 h-12 mt-8">
                <img
                  src={media.src}
                  alt={media.alt}
                  className="bg-white rounded-full p-3"
                />
              </span>
            ))}
          </div>
        </div>
        {/* Other links */}
        <div className="flex flex-wrap gap-10 w-full justify-between">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h4 className="text-2xl text-white m-0 p-0 leading-normal font-medium font-montserrat">
                {link.title}
              </h4>
              <ul className="">
                {link.links.map((l, i) => (
                  <li
                    key={i}
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <a href={l.link}>{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-white-400 font-montserrat flex-1 gap-2 leading-[16px] mt-20 lg:mt-35">
        <div className="flex justify-center items-center gap-2 cursor-pointer font-montserrat">
          {" "}
          <img src={copyrightSign} alt="copyright sign" /> Copyright, All rights
          reserved.
        </div>
        <p className=" cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
