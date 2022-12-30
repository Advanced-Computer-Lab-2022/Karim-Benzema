import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [error,setError] = useState(null);
    const [data, setData] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const itid = params.get('itid');


    
    fetch('/api/it/register/'+id+'/'+itid, {
      method: "PATCH",
      body: JSON.stringify({}),
    });
    
    
  

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion?id=`+itid
       ,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const itid = params.get('itid');
    const url = "http://localhost:3000/api/it/wallet/"+id+'/'+itid;
  const { data: res } = await axios.get(url, data);
  setData( res.data);
    console.log(res.data)
    if(res.data === true){
      window.location = `/completion?id=`+itid
    }
    else{
    setError("Insufficient Balance!")
    }
  }

  return (
    <div>
    <form className="form_container" id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button className="green_btn" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    <br/>
    <form className="form_container" onClick={handleSubmit2}>
    <button className="green_btn">
    <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay with wallet"}
        </span>
    </button>
    {error && <div className="error_msg">{error}</div>}
    </form >
    </div>
  );
}
