import ButtonBlue, { ButtonTransparent } from "../components/Button";

const MainHeader = () => {
  return (
    <section className="pt-10 lg:px-32">
      <div className="lg:flex flex-row-reverse items-start">
        <div className="px-12 lg:px-0 md:w-[50%] lg:w-[40%] md:mx-auto flex-shrink-0">
          <div className="relative">
            <img
              src="./images/people-1.png"
              alt=""
              className="w-[80%] mx-auto z-30"
            />
            <img
              src="./images/rectangle-header-1.png"
              alt=""
              className="absolute top-1/2 -translate-y-1/2 -z-10"
            />
            <img
              src="./images/rectangle-header-2.png"
              alt=""
              className="absolute top-2 -right-5 -z-20"
            />
            <div className="bg-white shadow-2xl shadow-shadow-color p-5 absolute -top-12 lg:-top-0 -left-20 rounded-md scale-50 lg:scale-75">
                <h1 className="text-[#BAB8D2] font-bold text-sm">Members</h1>
                <p className="font-bold text-lg mt-2">70,200</p>
                <div className="mt-5 flex items-end gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#8EF6E4] w-8 h-10 rounded-md"></div>
                        <p className="text-text-grayy text-xs mt-1">JAN</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#8EF6E4] w-8 h-14 rounded-md"></div>
                        <p className="text-text-grayy text-xs mt-1">FEB</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#8EF6E4] w-8 h-16 rounded-md"></div>
                        <p className="text-text-grayy text-xs mt-1">MAR</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#8EF6E4] w-8 h-20 rounded-md"></div>
                        <p className="text-text-grayy text-xs mt-1">APR</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="px-8 mt-10 md:px-20 lg:px-0">
            <h1 className="text-primary-blue font-semibold">S U X Z &nbsp; M A K E &nbsp; I T &nbsp; E A S Y </h1>
            <h1 className="font-extrabold text-[40px] mt-1 leading-snug w-[90%] lg:text-[64px] lg:leading-tight text-text-dark">Find Your Way Of Success</h1>
            <p className="font-medium mt-2 md:w-[80%] lg:text-[24px] lg:w-[80%] lg:py-5 text-text-dark">We help you to increase self-confidence and train yourself in a direction, and make you more creative in developing a work</p>
            <div className="flex items-center gap-5">
                <ButtonBlue name={"Get Started"}/>
                <ButtonTransparent name={"Our Services"} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
