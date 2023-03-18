import { MainTextCenter } from "../components/MainText"

const Companies = () => {
    return (
        <section className="px-8 bg-light-blue mt-10 pb-10 md:px-20 lg:px-32 lg:mt-32 lg:py-20">
            <div>
                <div className="pt-10">
                <MainTextCenter text1={"Companies That Recruit Our Graduates"} text2={"Our graduates have worked in more than 400 companies around the World"} />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8 mt-5 md:mt-10 lg:px-32 md:px-20 lg:mt-14">
                    <img src="./images/github.png" alt="" className="scale-90" />
                    <img src="./images/microsoft.png" alt="" className="scale-90" />
                    <img src="./images/redis.png" alt="" className="scale-90" />
                    <img src="./images/medium.png" alt="" className="scale-90" />
                    <img src="./images/paypal.png" alt="" className="scale-90" />
                    <img src="./images/linkedin.png" alt="" className="scale-90" />
                    <img src="./images/reddit.png" alt="" className="scale-90" />
                    <img src="./images/medium.png" alt="" className="scale-90" />
                </div>
            </div>
        </section>
    )
}

export default Companies;