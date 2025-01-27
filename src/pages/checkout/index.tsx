import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "../../types";
import dynamic from "next/dynamic";

const Checkout = dynamic(() => import("../../components/checkout"), {
  ssr: false,
});

const CheckoutPage = () => {
  return <Checkout />;
};

export default CheckoutPage;
