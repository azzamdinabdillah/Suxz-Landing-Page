import Card, { CardBlue } from "../components/Card";
import MainText from "../components/MainText";

const LearningSection = () => {
  return (
    <section className="bg-light-blue mt-10 lg:mt-0 px-8 md:px-20 pb-20 lg:px-32">
      <MainText
        text1={"LEARNINGS"}
        text2={"Online Learning Platform International Curriculum"}
        text3={
          "Study and understand the material class is more relaxed without time limit."
        }
      />

      <div className="md:grid grid-cols-2 gap-10 mt-10 lg:grid-cols-4">
        <Card cardImg={"./images/learn-1.png"} cardTitle={"Starter"} cardDescription={"Free class access for that start learning code and design"} />

        <Card cardImg={"./images/learn-2.png"} cardTitle={"Premium"} cardDescription={"Advanced material from the Starter & learn to build projects"} />

        <CardBlue cardImg={"./images/learn-3.png"} cardTitle={"Superstar"} cardDescription={"Materials for experts who have completed the premium package"} />

        <Card cardImg={"./images/learn-4.png"} cardTitle={"Bootcamp"} cardDescription={"Informatics science training program with the latest material"} />
      </div>
    </section>
  );
};

export default LearningSection;
