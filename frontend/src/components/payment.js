import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../pages/checkoutForm";
import NavbarIt from "./navbarIt";


function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const itid = params.get('itid');

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch('/create-payment-intent/'+id+'/'+itid, {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
    <NavbarIt/>
      {/* <h1>React Stripe and the Payment Element</h1> */}
      {clientSecret && stripePromise && (
        <Elements 
        stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm/>
        </Elements>
      )}
    </>
  );
}

export default Payment;