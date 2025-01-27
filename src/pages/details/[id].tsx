import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProduct } from "../../store/features/detailsSlice";
import { wrapper } from "../../store/store";
import { useRouter } from "next/router";
import { setAddToCart } from "../../store/features/cartSlice";
import { setOrders } from "../../store/features/ordersSlice";
import { ParsedUrlQuery } from "querystring";
import { setCheckout } from "../../store/features/checkoutSlice";
import { setAddToFavorites } from "../../store/features/favSlice";

const ProductDetails = () => {
  const { product, error } = useAppSelector((state) => state.productDetails);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlePlaceOrder = () => {
    dispatch(setCheckout([product]));
    router.push("/checkout");
  };

  const handleAddToCart = () => {
    dispatch(setAddToCart(product));
  };

  const handleAddToFavorites = () => {
    dispatch(setAddToFavorites(product));
  };
  return (
    <div className="productDetails">
      {error && <h1>Somethinf went wrong...</h1>}
      <div className="left">
        <img alt={product.description} src={product.image} />
      </div>
      <div className="right">
        <h1 className="title">{product.title}</h1>
        <p className="category">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="description">{product.description}</p>
        <h4 className="rating">
          <strong>Rating: </strong>
          {product?.rating?.rate}
        </h4>
        <h4 className="price">
          <strong>Price: </strong>${product.price}
        </h4>
        <div className="actions">
          <button onClick={handleAddToFavorites} className="fav">
            Add to Favourites
          </button>
          <button onClick={handleAddToCart} className="addCart">
            Add to cart
          </button>
          <button onClick={handlePlaceOrder} className="placeOrder">
            Checkout
          </button>
        </div>
      </div>
      <style jsx>{`
        .productDetails .right {
          padding: 0 50px;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }

        .productDetails .right .title {
          margin-bottom: 50px;
        }

        .productDetails .right .addCart,
        .price,
        .description,
        .rating {
          margin-top: 20px;
        }

        .productDetails .description {
          font-size: 20px;
        }

        .productDetails .left img {
          width: 100%;
          height: 100%;
        }

        .productDetails {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 30% 70%;
          justify-items: center;
        }

        .productDetails button {
          padding: 8px 18px;
          border-radius: 2px;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 4px;
          margin-left: 10px;
          font-size: 20px;
        }

        .productDetails .addCart {
          background-color: #ff9f00;
        }

        .productDetails .fav {
          background-color: #f52755;
        }

        .productDetails .placeOrder {
          background-color: #28a745;
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { id } = context.params as ParsedUrlQuery;
    await store.dispatch(fetchProduct(id));

    return {
      props: {},
    };
  },
);
