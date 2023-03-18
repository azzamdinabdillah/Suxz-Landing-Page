import { CardTestimonial } from "../components/Card";
import { MainTextCenter } from "../components/MainText"

const Testimonial = () => {
    return (
        <section className="px-8 md:px-20 lg:px-32 pt-10 lg:pt-20">
            <div>
                <div className="">
                    <h1 className="text-primary-blue font-semibold mb-3 md:text-center">Testimonial</h1>
                    <MainTextCenter text1={"Our Alumni Say"} text2={"These are the words of people who have taken our class"} />
                </div>

                <div className="md:grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20 md:mt-20">
                    <CardTestimonial image={"./images/testi-1.png"} name={"Jason Todd"} job={"Enterpreneur"} description={"“The mentor is cool, how to convey each material is also detailed and easy to understand..”"} />

                    <CardTestimonial image={"./images/testi-2.png"} name={"Cassandra K"} job={"Web Developer"} description={"“The mentor is cool, how to convey each material is also detailed and easy to understand..”"} />

                    <CardTestimonial image={"./images/testi-3.png"} name={"Peter Parker"} job={"PHP Enthusiast"} description={"“The mentor is cool, how to convey each material is also detailed and easy to understand..”"} />

                    <CardTestimonial image={"./images/testi-4.png"} name={"Jean Gray"} job={"Designer"} description={"“The mentor is cool, how to convey each material is also detailed and easy to understand..”"} />
                </div>
            </div>
        </section>
    )
}

export default Testimonial;