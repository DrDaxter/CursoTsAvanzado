// convertir un arreglo a un string y un string a un arreglo

class Prueba{
  /*
    Hacemos una sobre carga del metodo para poder obtener un
    tipado mas limpio
  */
 convertStr(data:string):string[];
 convertStr(data:string[]):string;
 convertStr(data:number):boolean;

 convertStr(data: unknown): unknown{
    if(Array.isArray(data)){
      return data.join('')
    }else if(typeof data === 'string'){
      return data.split('')
    }else if(typeof data === 'number'){
      return true
    }
  }

  printData(){
    const response1 = this.convertStr(['H','o','l','a'])// por consecuencia obtenemos el tipado exacto
    console.log(response1.toUpperCase())

    const response2 = this.convertStr("Guillermo")// por consecuencia obtenemos el tipado exacto
    console.log(response2)
  }

}

const obj = new Prueba();

obj.printData()
