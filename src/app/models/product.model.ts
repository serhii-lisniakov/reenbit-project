interface ProductDescription {
  small: string;
  main: string;
  origins?: string;
  howToCook?: string;
}
interface ProductReviewOrQuestion {
  author: string;
  date: string;
  body: string;
}

export interface Product {
  id: number;
  imgUrl?: string;
  rating: number;
  category: string;
  title: string;
  stock: number;
  price: number;
  deliveryTime: number;
  country: string;
  buyProperties: string;
  tags?: string;
  previousPrice?: number;
  freshness?: string;
  farm?: string;
  deliveryArea?: string;
  color?: string;
  sizes?: string;
  description: ProductDescription;
  reviews?: ProductReviewOrQuestion[];
  questions?: ProductReviewOrQuestion[];
  count?: number;
}
