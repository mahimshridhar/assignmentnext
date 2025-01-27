import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "../hooks";
import OrderSummary from "./orderSummary";
import Total from "./total";
import { setOrders } from "../store/features/ordersSlice";
import { useRouter } from "next/router";
import { setBillingDetails } from "../store/features/checkoutSlice";
import { clearCart } from "../store/features/cartSlice";

const Checkout = () => {
  const { products } = useAppSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const formRef = useRef(null);

  const handlePlaceOrder = (e: any) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());
    const isFormEmpty = Object.values(formValues).every(
      (value) => !value || value.trim() === "",
    );

    if (isFormEmpty) {
      alert("Please fill out the form before submitting.");
      return;
    }
    dispatch(setOrders(products));
    dispatch(setBillingDetails(formValues));
    dispatch(clearCart());

    router.push("/orders");
  };
  return (
    <div className="checkoutContainer">
      <h1>Checkout</h1>
      <div className="checkoutForm">
        <h2>Billing Information</h2>
        <form ref={formRef}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="123 Main St"
              required
            />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="bengaluru"
              required
            />
          </div>
          <div>
            <label htmlFor="pin">ZIP Code</label>
            <input
              type="text"
              id="pin"
              name="pincode"
              placeholder="574240"
              required
            />
          </div>
        </form>
      </div>
      <hr />
      <div className="orderSummarSection">
        <OrderSummary products={products} />
      </div>
      <div className="orderAction">
        <Total products={products} />
        {products.length > 0 && (
          <button
            type="button"
            onClick={handlePlaceOrder}
            className="placeOrder"
          >
            Place Order
          </button>
        )}
      </div>

      <style jsx>{`
        form {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 20px;
          gap: 20px;
          margin-bottom: 20px;
        }

        .orderSummarSection {
          padding-top: 20px;
        }

        .placeOrder {
          padding: 8px 18px;
          border-radius: 2px;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 4px;
          font-size: 20px;
          background-color: #fb641b;
        }

        .orderAction {
          margin-top: 20px;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default Checkout;
