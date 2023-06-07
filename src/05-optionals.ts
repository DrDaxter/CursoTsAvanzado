export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 0,
    isNew: isNew ?? true,
  };
};
console.log(createProduct('Camisa'));

/*
  nullish-coalescing es un operador que identifica si el campo es
  null o undefined y asigna el valor a la derecha en caso de ser asi
  const newItem = item ?? []
*/
