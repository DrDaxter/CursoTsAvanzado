import { faker } from '@faker-js/faker';
import { addProduct, getProduct, products, updateProduct } from "./product/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.url(),
    color: faker.color.human(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({min:10, max:100}),
    price: parseInt(faker.commerce.price(),10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['Clothes', 'Toys', 'Electronics']),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: "Nuevo titulo"
});

getProduct({
  title: 'Camisa'
})
