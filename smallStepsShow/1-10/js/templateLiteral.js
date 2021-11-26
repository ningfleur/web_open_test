const eventsData = [
 {
   name: "2021萬華大鬧熱",
   url: "https://www.facebook.com/RoarNowBangkah",
   year: 2021,
   month: 1,
   date: 21,
   description: "以「興萬代 振八方」為主題，於青山王遶境前一周末熱血登場，邀請民眾用正面力量支持萬華、振興萬華，重新感受萬華獨有的溫暖人情味，觀賞多元音樂演出、市集文創巧思、經典宗教文化，品嘗萬華在地美食。",
   tag1: "文化",
   tag2: "音樂",
   tag3: "節慶活動",
 },
 {
  name: "台北國際書展",
  url: "https://www.tibe.org.tw/",
  year: 2021,
  month: 1,
  date: 26,
  description: "每年台北國際書展以各種不同主題，帶領民眾進入閱讀的領域。由各國輪流擔任書展主題國，並邀請各國出版社參加書展，使不同文化在書展會場中交流互動。不僅為單純的購書場合，更是知識與文化交流的最佳場域。※考量國內疫情變化，文化部宣布2021台北國際書展「以線上書展續辦」，詳情請參考活動官網。",
  tag1: "藝文活動",
 },
 {
  name: "TIFA台灣國際藝術節",
  url: "https://npac-ntch.org/programs/series/tifa/D949F22F63544473B558A2B0FE1A2E20",
  year: 2021,
  month: 3,
  date: 2,
  description: "TIFA台灣國際藝術節為台灣一年一度最重要的藝術節慶、亞洲最具亮點的藝文盛會。不僅是藝術家透過作品對生命的持續探求與提問的終極展現，也是觀眾藉由欣賞作品突破想像疆界，以跨域新創、數位科技為主軸，透過各式體驗活動與多元欣賞角度，參與邀請觀眾跳脫線性思考，翻新劇場想像。",
  tag1: "藝文活動",
},
{
  name: "竹子湖海芋季/繡球花季",
  url: "http://www.callalily.com.tw/",
  year: 2021,
  month: 3,
  date: 26,
  description: "「竹子湖」海拔670公尺，位居大屯山、七星山與小觀音山間的谷地。自民國58年（西元1969年）從日本引進白色海芋，每一株花的花期大約是8~10天，竹子湖受陽明山國家公園管制範圍的保護，擁有豐沛潔淨的山泉水源，每年3~5月盛開。",
  tag1: "花季",
  tag2: "戶外休閒",
},
{
 name: "臺灣文化創意設計博覽會",
 url: "https://creativexpo.tw/",
 year: 2021,
 month: 4,
 date: 16,
 description: "文化部自2010年起舉辦臺灣文博會做為國內外文創產業交流及交易的平台，文創業者得藉由這個平台展售產品，文化部亦以主題策展方式引領文創產業及國民對文化議題的思考。近幾年，文化部透過文博會逐步搭起國際交流的平台，於此進行創意的分享，以及文化的跨國對話，真實展現了臺灣文化涵養及美學精神，讓世界認識到最具特色的臺灣文創產業。",
 tag1: "文創",
 tag2: "藝文活動",
},
{
 name: "臺北時裝週",
 url: "https://www.tpefw.com/",
 year: 2021,
 month: 3,
 date: 10,
 description: "在這個重生與創新的年代，臺北時裝週重新定義溝通核心，以前所未見的面貌登場，由「機能、永續、跨界、多元、人文」五大訴求出發。在生產面，串連臺灣領先全球的機能布料開發技術，帶動產業發展永續時尚的創新工法與創意思維；在設計面，融入臺灣實力堅強的各界藝術文化與時尚產業交流更多合作可能，激盪創作靈感，將風格融入日常，展現多元文化並存的豐富生活面貌。",
 tag1: "文創",
 tag2: "藝文活動",
},
{
 name: "臺北白晝之夜",
 url: "https://nuitblanchetaipei.info/",
 year: 2021,
 month: 10,
 date: 2,
 description: "「Nuit Blanche 白晝之夜」是全球的夜間城市藝術祭，2002年創始於法國巴黎，在10月第一個週六跨夜舉行。「白晝之夜」根基於「都市創新」及「公共空間設計」兩大核心概念，為市民提供親近藝術及城市的場域。「2021年臺北白晝之夜」定於10/2(六)傍晚6時啟動至10/3(日)清晨6時，在全球面臨疫情撼動的時刻，展開「重新思辨」，透過晝夜的雙⾯哲思啟發，解構重組⽩晝之夜，將交流現場的共感精神，以虛實互聯體驗聚合起來，帶來全新的 2021臺北⽩晝之夜「線上感 Interoperability」。",
 tag1: "節慶活動",
 tag2: "藝文活動",
},
{
 name: "2021臺北燈節",
 url: "https://2021lanternfestival.taipei/tc/index.htm",
 year: 2021,
 month: 12,
 date: 17,
 description: "俗稱「小過年」的元宵節是源遠流長的傳統民俗節慶，臺北市政府自民國86年（西元1997年）辦理「臺北燈節」以來，歷經逾20年的蘊育及特色養成，成為民眾春節期間不可或缺的參觀去處，不僅將新年的歡慶氣氛導入城市行銷，更將傳承民俗元宵節慶文化規模足以媲美外國有名的盛大慶典，其成功之展演也成為各縣市競相仿效的目標，近年更利用互動科技與藝術表演，增添燈節魅力，提供賞燈民眾更多城市參與及創新體驗。※ 受疫情影響，2021臺北燈節延至耶誕節期間12月17日至26日辦理。",
 tag1: "節慶活動",
 tag2: "藝文活動",
},
{
 name: "臺北最HIGH新年城-跨年晚會",
 url: "https://www.travel.taipei/zh-tw/event-calendar/details/25328",
 year: 2021,
 month: 12,
 date: 31,
 description: "每年邀請國際級卡司及精彩表演舉辦跨年晚會並擴大活動範圍至整個東區，及延長活動期間至1個月，將東區塑造成繽紛歡樂的新年城。倒數時間並搭配萬眾矚目的台北101新年大秀，每年均吸引數十萬至數百萬民眾一起現場倒數迎接新的一年，對外進行城市行銷，對內增進民眾的城市認同感與幸福感，使臺北市成為具有獨特魅力之國際級都市，將跨年晚會活動打造成為國際級觀光慶典活動。",
 tag1: "節慶活動",
 tag2: "藝文活動",
},
];

const calContainer = document.querySelector(".cal_container");
function renderData(){
 let str ="";
 eventsData.forEach((item) => {
   str += `<div class="cal_item">
   <div class="cal_time">
     <div class="cal_month">${item.month}</div> 
     <div class="cal_day">${item.date}</div>
   </div>
   <div class="cal_title">${item.name}</div>
   <div class="cal_des">${item.description}</div>
   <div class="cal_card_links">
     <a href="${item.url}" target="_blank"><button class="btn_clean cal_btn_web">web</button><i data-feather="arrow-right" class="cal_arrow"></i></a>
   </div>
   <ul class="cal_tags">
     <li class="cal_tag">${item.tag1}</li>
     <li class="cal_tag">${item.tag2}</li>
     <li class="cal_tag">${item.tag3}</li>
   </ul>
   </div>`;
 });
 calContainer.innerHTML = str;
};
renderData();

const tag = document.querySelectorAll('.cal_tag');
tag.forEach((item) => {
 if(item.innerHTML === "undefined" || item.innerHTML === "null"){
   item.classList.add("d_none");
 }
});
// console.log(tag);

const month = document.querySelectorAll('.cal_month');
// console.log(month);
month.forEach((item) => {
 if(item.innerHTML === "1"){
   item.innerHTML = "JAN.";
 }else if(item.innerHTML === "2"){
   item.innerHTML = "FEB.";
 }else if(item.innerHTML === "3"){
   item.innerHTML = "MAR.";
 }else if(item.innerHTML === "4"){
   item.innerHTML = "APR.";
 }else if(item.innerHTML === "5"){
   item.innerHTML = "MAY.";
 }else if(item.innerHTML === "6"){
   item.innerHTML = "JUN.";
 }else if(item.innerHTML === "7"){
   item.innerHTML = "JUL.";
 }else if(item.innerHTML === "8"){
   item.innerHTML = "AUG.";
 }else if(item.innerHTML === "9"){
   item.innerHTML = "SEP.";
 }else if(item.innerHTML === "10"){
   item.innerHTML = "OCT.";
 }else if(item.innerHTML === "11"){
   item.innerHTML = "NOV.";
 }else if(item.innerHTML === "12"){
   item.innerHTML = "DEC.";
 };
});

feather.replace()




