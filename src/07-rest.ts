import {User, ROLES} from './01-enums'

const currentUser: User = {
  userName:"Guillermo",
  role: ROLES.ADMIN
}

export const checkRole = (...roles:ROLES[]) => {// <- la parte importante es en la declaración del parametro
  if(roles.includes(currentUser.role)){
    return true
  }
  return false
}

console.log(checkRole(ROLES.ADMIN,ROLES.CUSTOMER,ROLES.SELLER))
