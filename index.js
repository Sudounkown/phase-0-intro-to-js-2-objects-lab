// Write your solution in this file!
let employee = {
    name: "OmniMan",
    streetAddress:"Earth",
}
let updateEmployeeWithKeyAndValue = (obj,key,value) => {
   return {...obj, [key]: value}
   
}
let employeeMod1 = updateEmployeeWithKeyAndValue(employee, "Invincible", "Earth12012")

let destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key]=value
    return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "superhero", "Eve")
console.log(employee)

let deleteFromEmployeeByKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}
let deletedKey =  deleteFromEmployeeByKey(employee, "Bullet")
console.log(deletedKey)

let destructivelyDeleteFromEmployeeByKey = (obj, key) => {
    delete obj[key]
    return obj
}
destructivelyDeleteFromEmployeeByKey(employee, "name")

console.log(employee)

