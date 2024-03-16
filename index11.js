let btn = document.querySelector('#btn');
let input = document.querySelector('input');
let p = document.querySelector('p');

btn.addEventListener('click', ()=> {

let number = +input.value;
let str = number.toString();
str = str.split('');
let arr = str.map(e=> { let a = +e; return a});
console.log(arr);
let part1 = arr.slice(0,arr.length / 2);
let part2 = arr.slice(arr.length / 2);
let sum1 = part1.reduce((acc,e)=> acc + e,0);
let sum2 = part2.reduce((acc,e)=> acc + e,0);
if (sum1 === sum2) {
    p.textContent = 'one half of the array is equal to the other half';
} else {
    p.textContent = 'not';
}
});









