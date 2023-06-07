import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel{//extends agregamos las propiedades de la interfaz base model
  title: string;
  image:string;
  description:string;
  color: string;
  stock: number;
  size?: Sizes;
  category: Category;
  isNew:boolean;
  price: number;
  tags:string[]
}
