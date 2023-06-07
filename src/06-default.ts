const createProduct = (
  name:string,
  id:number|string,
  stock:number = 0
) =>{
  return {
    name,
    id,
    stock
  }
}

console.log(createProduct("Camisa",2))
console.log(createProduct("Camisa",1,100))
