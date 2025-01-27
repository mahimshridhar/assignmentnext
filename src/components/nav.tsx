import { useRouter } from "next/router";
import Search from "./search";
import Link from "next/link";
import { useAppSelector } from "../hooks";

import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("./navLink"), {
  ssr: false,
});

const Nav = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const { products } = useAppSelector((state) => state.favourites);
  const { products: cartProducts } = useAppSelector((state) => state.cart);

  return (
    <nav className="nav">
      <div className="left">
        <Link href={"/"}>Fake Store</Link>
      </div>
      <div className="right">
        <NavLink
          title={"Favourites"}
          href={"/favourites"}
          badgeCount={products.length}
        />
        <NavLink
          title={"Cart"}
          href={"/cart"}
          badgeCount={cartProducts.length}
        />
      </div>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          background-color: #2874f0;
          color: white;
          padding: 10px 50px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .right {
          display: flex;
          gap: 10px;
          cursor: pointer;
        }

        .left {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
