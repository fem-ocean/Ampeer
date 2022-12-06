
import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";




export default function App({setIsPaid}) {

  const auth = getAuth();

  const config = {
    public_key: 'FLWPUBK_TEST-6086f3a9f9d31f81699681fff6ce9212-X',
    // public_key: process.env.FLW_PUBLIC_KEY,
    tx_ref: Date.now(), //helps generate unique reference keys
    amount: 2000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
        email: `${auth.currentUser.email}`,
        phone_number: '070********',
        name: `${auth.currentUser.displayName}`,
    },
    customizations: {
      title: '1-Month Subscription',
      description: 'Payment for 1-Month Access',
      // logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      logo: 'https://firebasestorage.googleapis.com/v0/b/ampeer-bac80.appspot.com/o/logo.jpg?alt=media&token=e027b938-2ad7-4593-8756-78a8d79591ed',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
     
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: async(response) => {
               console.log(response);
              //  setFlutterwaveResponse(response)
              const userId = auth.currentUser.uid
              if(userId){
                try{
                  const userRef = doc(db,'Users',userId)
                  await updateDoc(userRef, {isPaid:true, paymentDate: Date.now()})
                  setIsPaid(true)
                }catch(err){
                  console.log(err)
                }
              }
              
        



                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay N2,000
      </button>
    </div>
  );
}