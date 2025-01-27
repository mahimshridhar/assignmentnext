import Image from "next/image";
import { IProduct } from "../types";

const OrderSummary: React.FC<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <ul className="orderSummary">
      {products.map((order: IProduct) => (
        <li key={order.title}>
          <Image
            src={String(order.image)}
            alt={String(order.title)}
            width={100}
            height={100}
          />

          <strong>
            <span>{order.title}</span> <span>${order.price}</span>
          </strong>
        </li>
      ))}
      <style jsx>{`
        .orderSummary {
          list-style: none;
          margin: 20px 0;
        }

        .orderSummary li {
          display: grid;
          grid-template-columns: 1fr 10fr;
          width: 100%;
          gap: 10px;
          margin-top: 15px;
        }
        .orderSummary li strong {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </ul>
  );
};

export default OrderSummary;
