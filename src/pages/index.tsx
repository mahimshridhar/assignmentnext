import { wrapper } from "../store/store";
import { useAppSelector, useDebounce } from "../hooks";
import { fetchAllProducts } from "../store/features/homeSice";
import Product from "../components/product";
import { IProduct } from "../types";
import Search from "../components/search";

const IndexPage = () => {
  const { status, products, error } = useAppSelector((state) => state.home);
  const searchQuery = useAppSelector((state) => state.search.query);
  const filteredProducts = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <div className="home">
      {status === "loading" && <p>loading products, please wait...</p>}
      <div className="description">
        <h1>
          Welcome to our store! We're thrilled to have you here. Feel free to
          search for any products you're looking for.
        </h1>
        <Search />
        {filteredProducts.length === 0 && <p>No products found</p>}
      </div>
      <div className="productList">
        {!error &&
          filteredProducts.map((product: IProduct) => {
            return <Product key={product.description} product={product} />;
          })}
      </div>
      <style jsx>{`
        .home .description {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .home .productList {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 0 auto;
        }

        .home h1 {
          margin-bottom: 20px;
          font-size: 22px;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchAllProducts());

    return {
      props: {},
    };
  },
);
