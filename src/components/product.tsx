import Image from "next/image";
import Link from "next/link";
import { setAddToFavorites } from "../store/features/favSlice";
import { useAppDispatch } from "../hooks";
import { setAddToCart } from "../store/features/cartSlice";
import { IProductProps } from "../types";

const Product: React.FC<IProductProps> = ({ product }) => {
  const { title, image, description, price, id } = product;
  const dispatch = useAppDispatch();

  const handleAddToFavorites = () => {
    dispatch(setAddToFavorites(product));
  };

  const handleAddToCart = () => {
    dispatch(setAddToCart(product));
  };
  return (
    <div className="card">
      <Image alt={String(title)} width={200} height={200} src={String(image)} />
      <h1>{title}</h1>
      <p className="price">${price}</p>
      <p className="description">{description}</p>
      <div className="actions">
        <button onClick={handleAddToCart} className="addCart">
          Add to Cart
        </button>
        <button onClick={handleAddToFavorites} className="fav">
          Add to Favorites
        </button>
        <Link
          style={{
            color: "black",
          }}
          className="link"
          href={`/details/${id}`}
        >
          view details
        </Link>
      </div>
      <style jsx>{`
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          text-align: center;
          padding: 20px;
        }

        .price {
          color: grey;
          font-size: 22px;
        }

        .card button {
          border: none;
          outline: 0;
          padding: 10px 8px;
          color: white;
          text-align: center;
          cursor: pointer;
          border-radius: 5px;
        }

        .card .fav {
          background-color: #f52755;
        }

        .card .addCart {
          background-color: #000;
        }

        .card .description {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 10px;
        }

        .card h1 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 10px;
        }

        .card .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Product;
