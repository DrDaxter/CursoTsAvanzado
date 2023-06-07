import { Product } from "./product.model";

/*
  DTO en TS: Data Transfer Object, esto nos sirve en ocasiones en las cuales queremos omitir
  ciertas propiedades de un objecto tipado con X interface, no obstante la interface seguira
  teniendo dichas propiedades omitidas pero nuestro DTO no.

  Ejemplo de uso:
  Imagina que tienes un objecto con las propiedades id y createAt definidos, dichos campos no son necesarios
  a la hora de enviarlos a nuestra base de datos ya que se generan automaticamente, es ahi donde
  los DTO son utiles
*/
//usando type
//type CreateProductDto = Omit<Product, 'id'|'createdAt'|'updateAt'|'category'>

export interface CreateProductDto extends Omit<Product, 'id'|'createdAt'|'updateAt'|'category'>{
  categoryId:string
}

/*
  Utilizando Pick en lugar de Omit: usamos Pick cuando al contrario de Omit queremos elegir cuales propiedades tomar
  de determinado objeto
*/

type Example = Pick<Product, 'title'|'description'>;
/*
  tenemos que Example es igual a
  type Example = {
    title: string;
    description: string;
  }
*/

/*
  Usando Partial: Partial nos ayuda a convertir los atributos de un objecto a opcionales sin la necesidad de crear
  una nueva interface. El contrario de Partial es Required<>
*/

export interface UpdateProductDto extends Partial<CreateProductDto>{}

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>
}// Usamos Readonly para definir las propiedades solo lectura
