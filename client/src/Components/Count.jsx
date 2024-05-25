import CountUp from "react-countup";
import { FaHouse, FaUsers } from "react-icons/fa6";
import { GiCampCookingPot } from "react-icons/gi";

const Count = () => {
  return (
    <div
      className="py-2 text-white"
    >
      <div className="max-w-screen-xl mx-4 lg:mx-auto my-10 flex justify-center items-center gap-40">
        <div className="flex flex-col justify-center items-center gap-2 font-semibold">
          <FaUsers className="text-4xl text-primary" />
          <div className="text-4xl">
            <CountUp start={0} end={312} duration={2.5} />
          </div>
          <p>Users</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 font-semibold">
          <GiCampCookingPot className="text-4xl text-primary" />
          <div className="text-4xl">
            <CountUp start={0} end={430} duration={2.5} />
          </div>
          <p>Recipes</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
