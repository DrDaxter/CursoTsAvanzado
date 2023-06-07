import { faker } from '@faker-js/faker';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './product.dto'
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {

  const newData: Product = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category:{
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      updateAt:faker.date.recent(),
      name: faker.commerce.department()
    }
  }
  products.push(newData);
  return newData
}

/*
  Acceder al tipado de cierta propiedad: Accedemos al tipo de datos de X propiedad dentro de una interface
  para poder tipar un parametro o una variable dinamicamente, cuando cambie el tipo de dato dentro de la interface
  sintaxis id:Product['id'] esto es igual a id:string, ya que el id dentro de la interface es de tipo string
*/
export const updateProduct = (id:Product['id'], data: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...data
  }

  return products[index]
}

export const deleteProduct = (id:string) => {

}

export const getProduct = (dto:FindProductDto): Product[] => {
  //dto.color = "" <-- causa error debido al Readonly agregado en la interface

  return []
}
