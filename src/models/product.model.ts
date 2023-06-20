import { ICat } from "./categories.model";

interface IImage {
  id: number,
  src: string,
  name: string,
}

interface IDefaultAttr {
  id: number,
  name: string,
  option: string
}

export interface IAttributes {
  id: number,
  name: AttributeType,
  position: number,
  visible: boolean,
  variation: boolean,
  options: string[]
}

export enum AttributeType {
  SIZE = 'Sizes',
  TYPE = 'Types'
}

export enum PizzaType {
  THIN = 'thin',
  CLASSIC = 'classic'
}

export enum PizzaSize {
  SMALL = '10',
  MEDIUM = '12',
  LARGE = '16'
}

export interface IProduct {
  id: number,
  name: string,
  slug: string,
  description: string,
  sku: string,
  price: string,
  average_rating: string,
  categories: ICat[],
  images: IImage[],
  attributes: IAttributes[],
  default_attributes: IDefaultAttr[],
  variations: number[],
  acf: {
    rating: number
  }
}

interface IVariationAttributes {
  name: string,
  option: string
}

export interface IVariation {
  id: number,
  price: string,
  attributes: IVariationAttributes[]
}

export interface ICartProduct {
  product_id: number,
  variation_id: number,
  quantity: number,
  price: number,
  image: string,
  size: string,
  type: string,
  name: string
}