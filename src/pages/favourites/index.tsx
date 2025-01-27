import ProductItem from "../../components/productItem";
import dynamic from "next/dynamic";
import { useAppDispatch } from "../../hooks";
import { removeFavorites } from "../../store/features/favSlice";
import { setAddToCart } from "../../store/features/cartSlice";

const ProductList = dynamic(() => import("../../components/productList"), {
  ssr: false,
});

const Favourites = () => {
  const dispatch = useAppDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFavorites(id));
  };

  return (
    <>
      <ProductList onRemove={handleRemove} type={"favourites"} />
    </>
  );
};

export default Favourites;
