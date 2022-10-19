
import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function App() {
  const config = {
    public_key: 'FLWPUBK_TEST-6086f3a9f9d31f81699681fff6ce9212-X',
    tx_ref: Date.now(),
    amount: 2000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
        email: 'user@gmail.com',
        phone_number: '070********',
        name: 'john doe',
    },
    customizations: {
      title: '1-Month Subscription',
      description: 'Payment for 1-Month Access',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
     
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
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