import { IProduct } from "../types";

const Total: React.FC<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <p>
      <strong>Total:</strong> $
      {products
        .map((p) => p.price)
        .reduce((a, b) => Number(a) + Number(b), 0)
        .toFixed(2)}
      <style jsx>{`
        p {
          font-size: 19px;
          margin-top: 20px;
        }
      `}</style>
    </p>
  );
};

export default Total;
