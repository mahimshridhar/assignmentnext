export interface IProduct {
  id?: number;
  title?: string;
  price?: string;
  description?: string;
  category?: string;
  image?: string;
  rating?: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}

export interface IProductProps {
  product: IProduct;
}

export interface IBillingAddress {
  name: string;
  email: string;
  address: string;
  pincode: string;
  city: string;
}
