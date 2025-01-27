import { useAppSelector } from "../hooks";
import Image from "next/image";
import { IProduct } from "../types";
import OrderSummary from "./orderSummary";
import Total from "./total";

const OrderConfirmation = () => {
  const { products } = useAppSelector((state) => state.orders);
  const { billingDetails } = useAppSelector((state) => state.checkout);
  console.log("billingDetails", billingDetails);
  return (
    <div className="order">
      {products.length > 0 ? (
        <>
          <h1>Order Confirmation</h1>
          {
            <div className="orderDetails">
              <p>
                <strong>Order ID:</strong> #123456
              </p>
              <p>
                <strong>Name:</strong> {billingDetails.name}
              </p>
              <p>
                <strong>Email:</strong> {billingDetails.email}
              </p>
              <p>
                <strong>Address:</strong> {billingDetails.address}
              </p>
              <p>
                <strong>Items:</strong>
              </p>
              <hr />
              <OrderSummary products={products} />
              <hr />
              <Total products={products} />
            </div>
          }

          <p className="thankYou">Thank you for your order!</p>
        </>
      ) : (
        <p>No orders placed</p>
      )}
      <style jsx>{`
        .order {
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .order h1 {
          color: #333;
          margin-bottom: 20px;
        }

        .order .orderDetails {
          text-align: left;
          margin-bottom: 20px;
        }

        .order .orderDetails p {
          margin: 10px 0;
        }

        .order .orderDetails li {
          margin-left: 15px;
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 10px 0;
        }

        .order .orderDetails li strong {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .order .thankYou {
          font-size: 1.2rem;
          color: #4caf50;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default OrderConfirmation;
