import axios from "axios";
import React from "react";

const Home: React.FC = () => {
  const handlePay = async () => {
    try {
      const { data } = await axios.post(`http://localhost:4732/purchases`, {
        userId: "66f08950855d4a0f640947eb",
        products: [
          {
            product: "66ef0a3de03295af5f80a11c",
            quantity: 2,
            price: 25,
          },
        ],
        total_price: 1,
        payment_method: "bkash",
      });
      window.location.href = data.data.bkashURL;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handlePay}
      className="text-white bg-pink-600 px-4 py-3 rounded-lg"
    >
      pay with bkash
    </button>
  );
};

export default Home;
