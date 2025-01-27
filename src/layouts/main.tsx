import { useRouter } from "next/router";
import { useAppDispatch } from "../hooks";
import { useEffect, ReactNode } from "react";
import { clearOrders } from "../store/features/ordersSlice";
import { clearCheckout } from "../store/features/checkoutSlice";

interface IMain {
  children: ReactNode;
}

const Main: React.FC<IMain> = ({ children }) => {
  const router = useRouter();
  const isOrderPage = router.pathname == "/orders";
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isOrderPage) {
      dispatch(clearOrders());
      dispatch(clearCheckout());
    }
  }, [isOrderPage]);

  return (
    <div className="main">
      {children}
      <style jsx>{`
        .main {
          max-width: 1200px;
          padding: 50px 0;
          margin: 0 auto;
          min-height: 50vh;
        }
      `}</style>
    </div>
  );
};

export default Main;
