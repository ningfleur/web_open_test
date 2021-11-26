const dataset = [
 {
  title: "",
  id: 01,
  area: "",
  url: "",
  stars: 3
 },
 {
  title: "井仔腳瓦盤鹽田",
  id: "",
  area: "北門區",
  url: "https://www.twtainan.net/image/33108/1024x768"
 },
 {
  title: "",
  id: 02,
  area: "",
  url: ""
 },
 {
  title: "",
  id: "",
  area: "",
  url: ""
 },
];

const starData = dataset[0].stars;
console.log(starData);

const ranking = document.querySelector("#ranking");

let stars5 = `<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="fas fa-star lm_icons"></i></li>`;

let stars4 = `<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="far fa-star lm_icons"></i></li>`;

let stars2 = `<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="far fa-star lm_icons"></i></li>
<li><i class="far fa-star lm_icons"></i></li>
<li><i class="far fa-star lm_icons"></i></li>`;

let stars1 = `<li><i class="fas fa-star lm_icons"></i></li>
<li><i class="far fa-star lm_icons"></i></li>
<li><i class="far fa-star lm_icons"></i></li>
<li><i class="far fa-star lm_icons"></i></li>
<li><i class="far fa-star lm_icons"></i></li>`;

let str = ``;
let star = `<li><i class="fas fa-star lm_icons"></i></li>`;
let noStar = `<li><i class="far fa-star lm_icons"></i></li>`;
// str += star;
// str += star;
// str += star;
// str += noStar;
// str += noStar;
// console.log(str.length);

let starNum = 5;
let noStarNum = 5 - starNum;
console.log(starNum, noStarNum);

for (let i = 0; i < 3; i++) {
 str += star;
};

for (let i = 0; i < 2; i++) {
 str += noStar;
};

console.log(str);



