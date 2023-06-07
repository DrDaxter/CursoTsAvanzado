export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export type User = {
  userName:string,
  role: ROLES
}

const newUser: User = {
  userName: "Guillermo",
  role: ROLES.ADMIN
}

//console.log(newUser)
/*
  los enums son unset de opcines predefinidas las cuales deben usarse cuando el desarrollador lo solicite
*/
