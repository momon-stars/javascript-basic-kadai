// const todayDate = new Date('2025-06-17');


// console.log(todayDate.getUTCFullYear()+"年"+todayDate.getUTCMonth()+"月"+todayDate.getUTCDate()+"日");

const today = new Date();
const year = today.getFullYear();
const todayMoon = new Date();
const moon = todayMoon.getMonth()+1;
const todayDay =new Date();
const day = todayDay.getDate();
// const day = todayDay.getDay(); 
// console.log(year+"年"+moon+"月"+day+"日");
console.log(year+"年"+moon+"時"+day+"日");