
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

function Payment() {
  const location = useLocation();

  return (
    <div className="max-w-screen-xl mx-4 xl:mx-auto mt-28">
      <div className="mb-20 text-center">
        <p className="text-5xl text-textColor capitalize">
          Pay <span className="text-green-600">$ {location?.state}</span> to
          earn {location?.state}00 coins
        </p>
      </div>
      <Elements stripe={stripePromise}>
        <Checkout money={location?.state} />
      </Elements>
    </div>
  );
}

export default Payment;
