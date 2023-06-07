export interface BaseModel{
  readonly id: string;
  readonly createdAt: Date;
  updateAt:Date;
}

/*
  readonly evita que una propiedad sea sobre escrita, sin embargo podremos insertar el id
  al hacer un push al arreglo con la interface definida
*/
