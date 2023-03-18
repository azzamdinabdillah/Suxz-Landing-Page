import MainText, { MainTextSide } from "../components/MainText";

const AboutUs = () => {
  return (
    <section className="px-8 mt-10 lg:mt-32 md:px-20 lg:px-32">
      <div className="lg:flex justify-between items-center gap-32">
        <div className="relative md:w-[50%] lg:w-[70%] mx-auto">
          <img src="./images/aboutus-1.png" alt="" className="rounded" />
          <div className="bg-white absolute -bottom-10 left-1/2 -translate-x-1/2 inline-block w-60 p-5 rounded-lg scale-75 shadow-2xl shadow-shadow-color lg:scale-95">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src="./images/aboutus-profile.png" alt="" />
                <img
                  src="./images/check.png"
                  className="absolute -top-3 -right-3 scale-50"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold ">Sarah Manrope</h1>
                <p className="text-sm">Designer</p>
                <div className="flex gap-2 items-center mt-3">
                  <img src="./images/stars.png" alt="" />
                  <img src="./images/stars.png" alt="" />
                  <img src="./images/stars.png" alt="" />
                  <img src="./images/stars.png" alt="" />
                  <img src="./images/stars.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-0">
          <MainTextSide
            text1={"ABOUT US"}
            text2={"We Help Improve Your Work Experience"}
            text3={
              "We help you to increase self-confidence and train yourself in a direction."
            }
          />

          <div className="mt-5 lg:mt-8 flex flex-col gap-3">
            <div className="flex justify-start items-center gap-5 font-semibold text-text-dark text-base">
              <img src="./images/check.png" alt="" className="md:scale-90 scale-75" />
              <p className="lg:text-[15px] text-sm">Study and produce creation to get a job</p>
            </div>
            <div className="flex items-center gap-5 font-semibold text-text-dark text-base">
              <img src="./images/check.png" alt="" className="md:scale-90 scale-75" />
              <p className="lg:text-[15px] text-sm">Up to date material and created by expert creators</p>
            </div>
            <div className="flex items-center gap-5 font-semibold text-text-dark text-base">
              <img src="./images/check.png" alt="" className="md:scale-90 scale-75" />
              <p className="lg:text-[15px] text-sm">Complete classes and projects and get a certificate from us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
