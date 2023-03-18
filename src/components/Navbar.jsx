import { useState } from "react";
import ButtonBlue, { ButtonGhost } from "./Button";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  let openNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className="py-5 md:py-10 lg:py-5 fixed w-full z-10 backdrop-blur-md bg-opacity-30 lg:px-20 overflow-hidden">
      <div className="flex justify-between items-center px-8">
        <div className="w-[30%] md:w-[15%] lg:w-[8%]">
          <div className="flex items-center gap-20">
            <img src="./images/brand.png" alt="" className="" />

            <div className="hidden lg:flex justify-center items-center gap-20 font-bold text-[#394360]">
              <p className="w-full">Home</p>
              <p className="w-full">Learnings</p>
              <p className="w-full">About</p>
              <p className="w-full">Testimonial</p>
            </div>
          </div>
        </div>
        <img
          src="./images/nav-btn.png"
          alt=""
          onClick={openNavbar}
          className="lg:hidden"
        />

        {/* navbar large screen */}
        <div className="hidden lg:block">
        <button className="py-3 lg:py-4 px-6 md:px-10 mt-5 rounded-lg text-black font-bold">
            Log in
        </button>
            <ButtonBlue name={"Sign Up"} />
        </div>
      </div>
      <div
        style={
          open
            ? {
                height: "300px",
                transition: ".5s",
                overflow: "hidden",
              }
            : { height: "0px", overflow: "hidden" }
        }
        className={open == false ? "backdrop-blur-md bg-opacity-30" : ""}
      >
        <div className="py-5 px-10 flex flex-col gap-4 font-semibold text-lg">
          <p>Home</p>
          <p>Learnings</p>
          <p>About Us</p>
          <p>Testimonial</p>

          <div>
            <ButtonGhost name={"Log in"} />
            <ButtonBlue name={"Sign Up"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
