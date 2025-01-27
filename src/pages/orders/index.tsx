import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "../../types";
import dynamic from "next/dynamic";

const OrderConfirmation = dynamic(
  () => import("../../components/orderConfirmation"),
  {
    ssr: false,
  },
);

const Orders = () => {
  return <OrderConfirmation />;
};

export default Orders;
