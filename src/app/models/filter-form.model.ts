export interface FilterForm {
  categories?: string;
  brands?: string[];
  rating?: string[];
  price?: {
    minPrice: number;
    maxPrice: number;
  };
}
