import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden text-slate-gray">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="#"> Sign in </a>
          <span>/</span>
          <a href="#"> Explore now </a>
        </div>

        {/* Hamburger Menu */}
        <div>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="lg:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
