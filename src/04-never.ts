const withoutEnd = () => {
  while (true) {
    console.log('ALGO');
  }
};
const fail = (message: string) => {
  //tipo never
  throw new Error(message);
};
const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  }
  return fail('not match');
};
console.log(example('Hola mundo'));
console.log(example([12, 123, 1231]));
console.log(example('Hola mundo'));

/*
  El tipo de dato 'never' es un tipo de dato que jamas van a parar
  o ciertos casos detendran el programa completo
 */
