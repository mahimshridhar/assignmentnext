import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../hooks";
import ProductItem from "./productItem";
import { IProduct } from "../types";
import Total from "./total";
import { setAddToCart } from "../store/features/cartSlice";

type statetype = "cart" | "favourites";

const ProductList: React.FC<
  IProduct & { type?: string; renderTotal?: boolean; onRemove: any }
> = ({ type, onRemove, renderTotal }) => {
  const { products } = useAppSelector((state) => state[type as statetype]);
  const dispatch = useAppDispatch();
  const title =
    String(type).charAt(0).toUpperCase() +
    String(type).substring(1, type?.length);

  const handleAddtoCart = (product) => {
    dispatch(setAddToCart(product));
  };

  return (
    <div className="productlistContainer">
      <h1>{`Your ${title}`}</h1>
      {products.length === 0 && (
        <div className="none">
          <p>
            you do not have any items in {type}, please visit{" "}
            <Link
              style={{
                color: "black",
              }}
              href={"/"}
            >
              home
            </Link>{" "}
            to add
          </p>
        </div>
      )}
      {products.map((product) => (
        <ProductItem
          onAddToCart={() => handleAddtoCart(product)}
          product={product}
          onRemove={() => onRemove(product.id)}
          renderCart={type !== "cart"}
        />
      ))}
      {renderTotal && <Total products={products} />}
      <style jsx>{`
        .productlistContainer {
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .productlistContainer .none {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
