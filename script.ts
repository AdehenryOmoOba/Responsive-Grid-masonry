const container = document.querySelector<HTMLHtmlElement>('.grid_section')!

function generatePicDiv(src: string, alt: string, title: string) {
 return `
 <div class="grid">
   <div class="grid_img">
       <img src="./images/${src}.jpg" alt=${alt} />
   </div>
   <div class="overlay">
       <h2>${title}</h2>
       <a href="#" class="btn">View More</a>
   </div>
 </div>`
}

const imageData: string[] = [
  'The King Culture',
  'Bets Sun shades',
  'Millenial Collection',
  'Ontario Trend',
  'Perfect Pose',
  'Urban Feel',
  'The Lady in Red',
  'London coffee Breeze'
]


const numOfPictures = 8
let content = ''

for (let i = 0; i < numOfPictures; i++) {
 content += generatePicDiv(`${i + 1}`, `user_${i + 1}`, imageData[i]) 
}

container.innerHTML = content

console.log(container)
