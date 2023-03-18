import ButtonBlue, { ButtonGhost, ButtonTransparent } from "../components/Button";
import { MainTextCenter } from "../components/MainText";

const JoinUs = () => {
  return (
    <section className="mt-14 md:mt-20 lg:mt-32">
      <div className="relative">
        <img
          src="./images/contact.png"
          alt=""
          className="object-cover h-[50vh] md:h-[30vh] lg:h-[60vh] brightness-50 lg:w-full"
        />

        <div className="absolute top-1/2 -translate-y-1/2 px-8 md:px-0 text-white text-center md:left-1/2 md:-translate-x-1/2">
            <MainTextCenter text1={"So? What Are You Waiting For"} text2={"It's time to build your career, study in a relaxed and purposeful manner"} />
            <div className="flex items-center justify-center gap-5">
                <ButtonBlue name={"Get Started"}/>
                <ButtonGhost name={"Our Services"} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
