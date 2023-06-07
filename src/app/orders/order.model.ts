import { BaseModel } from "../base.model"
import { Product } from "../product/product.model"
import { User } from "../users/user.model"

export interface Order extends BaseModel{
  id: string | number
  date: Date
  products: Product[]
  user:User
}
