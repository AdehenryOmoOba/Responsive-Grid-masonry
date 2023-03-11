"use strict";
const container = document.querySelector('.grid_section');
function generatePicDiv(src, alt, title) {
    return `
 <div class="grid">
   <div class="grid_img">
       <img src="./images/${src}.jpg" alt=${alt} />
   </div>
   <div class="overlay">
       <h2>${title}</h2>
       <a href="#" class="btn">View More</a>
   </div>
 </div>`;
}
const imageData = [
    'The King Culture',
    'Bets Sun shades',
    'Millenial Collection',
    'Ontario Trend',
    'Perfect Pose',
    'Urban Feel',
    'The Lady in Red',
    'London coffee Breeze'
];
const numOfPictures = 8;
let content = '';
for (let i = 0; i < numOfPictures; i++) {
    content += generatePicDiv(`${i + 1}`, `user_${i + 1}`, imageData[i]);
}
container.innerHTML = content;

const employees = [
    {name: 'Billy Jane', salary: 25000},
    {name: 'Tom Will', salary: 25800},
    {name: 'Auire sun', salary: 18700},
    {name: 'Jum kin', salary: 345444}
]

const highest = employees.reduce((acc, curr) => {
    if (!acc)  return curr
    return acc.salary > curr.salary ? acc : curr
}, {})

console.log(highest)