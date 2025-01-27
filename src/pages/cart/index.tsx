// import ProductItem from "../../components/productItem";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeFromCart } from "../../store/features/cartSlice";
import { moveCartToOrders } from "../../store/thunk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductList = dynamic(() => import("../../components/productList"), {
  ssr: false,
});

const Cart = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [disablePlaceOrder, setDisablePlaceOrder] = useState(false);
  const { products } = useAppSelector((state) => state.cart);
  useEffect(() => {
    if (products.length === 0) {
      setDisablePlaceOrder(true);
    }
  }, [products]);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToOrders = () => {
    dispatch(moveCartToOrders());
    router.push("/checkout");
  };

  return (
    <div className="cartContainer">
      <ProductList onRemove={handleRemove} renderTotal type={"cart"} />
      {!disablePlaceOrder && (
        <button onClick={handleAddToOrders} className="checkout">
          Checkout
        </button>
      )}
      <style jsx>{`
        button {
          padding: 8px 18px;
          border-radius: 2px;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 4px;
          font-size: 20px;
          background-color: #28a745;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Cart;
