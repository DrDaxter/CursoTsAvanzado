/*
  Diferencias entre un type y una interface:
    - Con un type yo puedo definir tipos nativos directamente: type M = string | number
    - Una de las funcionalidades de interface es que se pueden extender, esto se refiere a
      que en una interface puedes hacer uso de herencia y extender de otras
*/

type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
}
