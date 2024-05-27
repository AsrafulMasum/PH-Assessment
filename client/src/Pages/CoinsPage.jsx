
import Title from "../Components/Title";
import useAuth from "../Hooks/useAuth";
import useLoadSecureData from "../Hooks/useLoadSecureData";
import { FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CoinsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data: dbUser } = useLoadSecureData(`users/${user?.email}`);

  const handleBuy = (money) => {
    navigate("/payment", { state: money });
  }

  return (
    <div className="max-w-screen-xl mx-4 xl:mx-auto mt-28">
      <Title
        title="Coins that matters"
        subTitle="Delicious recipes that won't break the bank"
        desc="Unlock culinary delights with recipe coins. Exchange for access to exclusive cooking tutorials, enhancing your culinary journey with step-by-step guidance."
      />
      <div className="my-10 text-center">
        <h2 className="text-5xl text-primary">
          Available Coins : {dbUser?.coins}{" "}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-6 my-20">
        <div onClick={() => handleBuy(1)}
          className="bg-neutral cursor-pointer lg:w-1/3 px-16 py-10 rounded-lg relative"
          style={{
            backgroundImage: `url('https://i.postimg.cc/ZYH1z18j/stack-coins-with-financial-chart.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            position: "relative",
          }}
        >
          <h2 className="text-4xl text-white">Buy 100 Coins</h2>
          <p className="flex justify-center items-center absolute bottom-4 right-4 text-white text-2xl rounded-full bg-primary w-12 h-12">
            <FaDollarSign /> 1
          </p>
        </div>
        <div onClick={() => handleBuy(2)}
          className="bg-neutral cursor-pointer lg:w-1/3 px-16 py-10 rounded-lg relative"
          style={{
            backgroundImage: `url('https://i.postimg.cc/ZYH1z18j/stack-coins-with-financial-chart.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            position: "relative",
          }}
        >
          <h2 className="text-4xl text-white">Buy 200 Coins</h2>
          <p className="flex justify-center items-center absolute bottom-4 right-4 text-white text-2xl rounded-full bg-primary w-12 h-12">
            <FaDollarSign /> 2
          </p>
        </div>
        <div onClick={() => handleBuy(3)}
          className="bg-neutral cursor-pointer lg:w-1/3 px-16 py-10 rounded-lg relative"
          style={{
            backgroundImage: `url('https://i.postimg.cc/ZYH1z18j/stack-coins-with-financial-chart.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            position: "relative",
          }}
        >
          <h2 className="text-4xl text-white">Buy 300 Coins</h2>
          <p className="flex justify-center items-center absolute bottom-4 right-4 text-white text-2xl rounded-full bg-primary w-12 h-12">
            <FaDollarSign /> 3
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoinsPage;
