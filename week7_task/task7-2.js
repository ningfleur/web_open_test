let data = [];
let URL = "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json"

axios.get(URL)
 .then(function(response){
  data = response.data.data;
  renderData(data);
  generateChart(data);
 })
 .catch(function(error){
  console.log("原始資料錯誤");
 });

//渲染資料
const ticketCardArea = document.querySelector(".ticketCard-area");
const numFound = document.querySelector(".numFound");
let num = 0;
function renderData(data){
 let str = "";
 data.forEach((item) => {
  str += `<li class="ticketCard">
  <div class="ticketCard-img">
    <a href="#">
      <img src="${item.imgUrl}" alt="">
    </a>
    <div class="ticketCard-region">${item.area}</div>
    <div class="ticketCard-rank">${item.rate}</div>
  </div>
  <div class="ticketCard-content">
    <div>
      <h3>
        <a href="#" class="ticketCard-name">${item.name}</a>
      </h3>
      <p class="ticketCard-description">
       ${item.description}
      </p>
    </div>
    <div class="ticketCard-info">
      <p class="ticketCard-num">
        <span><i class="fas fa-exclamation-circle"></i></span>
        剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
      </p>
      <p class="ticketCard-price">
        TWD <span id="ticketCard-price">${item.price}</span>
      </p>
    </div>
  </div>
  </li>`;
 });
 ticketCardArea.innerHTML = str;
 num = data.length;
 updateNum(data.length);
}

//篩選後會顯示『搜尋資料為 ? 筆』
function updateNum(num){
 numFound.textContent = num;
};

//地區用 change 監聽
//地區的篩選下拉需要加上『全部地區』option
const regionSearch = document.querySelector(".regionSearch");
regionSearch.addEventListener("change", function(e){
  let obj = data.filter(function(items){
    if(e.target.value === "全部地區"){
      return items;
    }else{
      return items.area === e.target.value
    }
  })
 renderData(obj);
 updateNum(obj.length);
});


//加入資料功能
const addTicketBtn = document.querySelector(".addTicket-btn");
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketForm = document.querySelector(".addTicket-form")

addTicketBtn.addEventListener("click", addCard);
function addCard(e){
 alertMessage();
 let newItem = {};
 if(ticketName.value !== "" && ticketImgUrl.value !== "" && ticketRegion.value !== "" && ticketPrice.value !== "" && ticketNum.value !== "" && ticketRate.value !== "" && ticketDescription.value !== "") {
 newItem.name = ticketName.value;
 newItem.imgUrl = ticketImgUrl.value;
 newItem.area = ticketRegion.value;
 newItem.price = parseInt(ticketPrice.value); 
 newItem.group = parseInt(ticketNum.value);
 newItem.rate = parseInt(ticketRate.value);
 newItem.description = ticketDescription.value;
 data.push(newItem);
 num += 1;
 renderData(data);
 addTicketForm.reset();
 regionSearch.value = "全部地區"
 };
 generateChart(data)
}

//表單提示訊息
const ticketNameMessage = document.querySelector("#ticketName-message");
const ticketImgUrlMessage = document.querySelector("#ticketImgUrl-message");
const ticketRegionMessage = document.querySelector("#ticketRegion-message");
const ticketPricemessage = document.querySelector("#ticketPrice-message");
const ticketNumMessage = document.querySelector("#ticketNum-message");
const ticketRateMessage = document.querySelector("#ticketRate-message");
const ticketDescriptionMessage = document.querySelector("#ticketDescription-message");

function alertMessage(){
  let formValue = {
    name: {
    value: ticketName.value,
    message: ticketNameMessage
  },
    imgUrl:{
    value: ticketImgUrl.value,
    message: ticketImgUrlMessage
  },
    area:{
    value: ticketRegion.value,
    message: ticketRegionMessage
  },
    group:{
    value: ticketNum.value,
    message: ticketNumMessage
  },
    price:{
    value: ticketPrice.value,
    message: ticketPricemessage
  },
    rate:{
    value: ticketRate.value,
    message: ticketRateMessage
  },
    description:{
    value: ticketDescription.value,
    message: ticketDescriptionMessage
  },
  }

  // 用參數prop來代表物件，逐一帶入檢查是否為空值
  Object.keys(formValue).forEach(function(prop){
    if(formValue[prop].value === ""){
      formValue[prop].message.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
    }else if(formValue[prop].value !== ""){
      if(prop === "rate" && (formValue[prop].value > 10 || formValue[prop].value <1)){
        formValue.rate.message.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>星等必須在1-10之間</span>`;
      }else{
        formValue[prop].message.innerHTML = ``;
      }
    };
  });
}

// 圖表
function generateChart(data){
  //組出一個新物件，統計區域的數量
  let areaObj = {
    // "item.area": 0, "item.area": 0, "item.area": 0
  }
  data.forEach((item) => {
    if(areaObj[item.area] == undefined){
      areaObj[item.area] = 1;
    }else{
      areaObj[item.area] += 1;
    }
  });

  //把物件整理成c3需要的陣列格式
  let chartData = [];

  Object.keys(areaObj).forEach((item) => {
    let ary = [];
    ary.push(item);
    ary.push(areaObj[item])
    chartData.push(ary);
  })

  // console.log(chartData)
  // let chartData = [['台北', 30],['台中', 20],['高雄', 30]]
  
  const chart = c3.generate({
    bindto: '#chart',
    size: {
      height: 200,
    },
    data: {
      columns: chartData,
      type : 'donut',
      colors:{
        "高雄": "#E68618",
        "台中": "#5151D3",
        "台北": "#26BFC7"
      }
    },
    donut: {
      title: "套票地區比重",
      width: 20,
      label: {
        show: false,
      }
  }
  });
}



