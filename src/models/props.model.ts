import { ICat } from "./categories.model";
import { IProduct } from "./product.model";

export interface CatalogProps {
  cats: ICat[];
  products: IProduct[];
  activeCat: string;
}