import Image from "next/image";
import { IProduct } from "../types";

const ProductItem: React.FC<
  {
    product: IProduct;
  } & {
    onRemove: any;
    onAddToCart: any;
    renderCart: boolean;
  }
> = ({ product, onRemove, renderCart, onAddToCart }) => {
  const { title, price, image = false } = product;
  return (
    <div className="productItem">
      <Image src={String(image)} alt={String(title)} width={50} height={50} />
      <p>
        {title} - ${price}
      </p>
      <div>
        {renderCart && (
          <button onClick={onAddToCart} className="add">
            Add to cart
          </button>
        )}
        <button className="remove" onClick={onRemove}>
          Remove
        </button>
      </div>

      <style jsx>{`
        .productItem {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }

        .productItem .add {
          background-color: #ff9f00;
          margin-right: 20px;
        }

        .productItem .remove {
          background-color: #ff4d4d;
        }

        .productItem button {
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ProductItem;
