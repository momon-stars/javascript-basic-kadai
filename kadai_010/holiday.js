const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

//for文の場合
for (let j =0;j < 2;j ++) {
for (let i=0;i < holidays.length;i ++ ) {
console.log(holidays[i]);
}}

// while文の場合
const holidaysLength = holidays.length;
const totalLoops = 2;
const totalElements = holidaysLength * totalLoops;
let i = 0;
let count = 0;

while ( count < totalElements) {
  console.log(holidays[i]);
  i ++;
  if( i === holidaysLength) {
    i = 0;
  }
  count ++ ;
}

