// funcina similar a 'any'
let anyVar: any;
anyVar = false
anyVar = 200

//ejemplo con unknow

let unknowVar: unknown;

unknowVar = []
unknowVar = 20

if(typeof unknowVar === 'string'){
  unknowVar.toLowerCase()
}

if(typeof unknowVar === 'boolean'){
  const isTrue: boolean= unknowVar
}

function parse(data:string):unknown {
  return JSON.parse(data)
}

/*
  unknow es una mejor opcion en caso estes pensando usar 'any'
  ya que ofrece mayor seguridad
*/
