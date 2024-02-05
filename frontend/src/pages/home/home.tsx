import Lottie from "lottie-react";
import Arrow2Sec from "../../components/arrow2sec/arrow2sec";
import Computer from "./../../assets/animations/computer.json";

interface HomeProps {}

const Home = (props: HomeProps) => {
    return (
        <div className="flex w-full flex-row flex-wrap sm:flex-row md:w-3/4">
            <div className="flex w-full flex-col items-start justify-center px-10 text-white lg:w-1/2">
                <p className="font-poppins text-lg text-[#EAA79C]">
                    Hello, I'm
                </p>
                <p className="my-5 font-poppins text-2xl font-bold md:text-3xl xl:text-5xl">
                    Chi Tam Nguyen
                </p>
                <p className="font-poppins text-gray-400">
                    I'm a Computer Science major at University of California -
                    Berkeley, and I'm passionate about building software, full
                    stack and mobile applications.
                </p>
                <Arrow2Sec className="mt-10 hidden w-full items-end justify-center lg:flex" />
            </div>
            <div className="mt-10 flex w-full items-center justify-center sm:mt-0 lg:w-1/2">
                <Lottie animationData={Computer} />
            </div>
            <Arrow2Sec className="flex w-full items-end justify-center lg:hidden" />
        </div>
    );
};

export default Home;
