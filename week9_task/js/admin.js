//取得訂單資料
let orderData = [];
function getOrderList(){
  let url = `https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`;
  axios.get(url, config)
  .then(function (response) {
    // console.log(response);
    orderData = response.data.orders;
    renderOrderList(orderData);
    renderChartData(orderData);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function init(){
  getOrderList();
}
init();

//渲染c3圖表
function renderChartData(orderData){
  let chartData = [];
  let itemCollect = {};
  orderData.forEach((item)=>{
    let itemNumber = 0;
    let itemCategory = "";
    item.products.forEach((p) => {
      itemCategory = p.category;
      if(p.category === itemCollect[itemCategory]){
        itemNumber += item.quantity;
      }else{
        itemNumber = item.quantity;
      }
      itemCollect[itemCategory] = itemNumber;
    });
  })
  // console.log(itemCollect);  
  // {窗簾: 2, 床架: 3, 收納: 2}

  Object.keys(itemCollect).forEach((k) => {
    let obj = [];
    obj.push(k);
    obj.push(itemCollect[k]);
    chartData.push(obj);
  });
  // console.log(chartData); 
  // [['窗簾', 2], ['床架', 3],['收納', 2]]

  const chart = c3.generate({
    bindto: '#chartArea',
    data: {
      columns: chartData,
      type : 'pie',
      colors: {
       其他: '#301E5F',
       床架: '#5434A7',
       收納: '#9D7FEA',
       窗簾: '#DACBFF',
     }
    }
   });
}

//渲染訂單資料
const ordersContent = document.querySelector("#ordersContent");
function renderOrderList(){
  let str = "";
  orderData.forEach((item) => {
    let products = item.products;
    let cumstomerList = "";
    products.forEach((obj) => {
      cumstomerList += `<p>${obj.title} x ${obj.quantity}</p>`;
    });
    let timestamp = new Date(item.createdAt * 1000).toLocaleDateString();
    let orderStatus = item.paid;
    if(item.paid === false){
      orderStatus = "未處理";
    }else if(item.paid === true){
      orderStatus = "已處理";
    }
    str += `<div class="tr">
    <div class="td">${item.id}</div>
     <div class="td">
      ${item.user.name}<br/>
      ${item.user.tel}
     </div>
     <div class="td">${item.user.address}</div>
     <div class="td">${item.user.email}</div>
     <div class="td">${cumstomerList}</div>
     <div class="td">${timestamp}</div>
     <div class="td" data-type="status" data-status="${item.paid}" data-id="${item.id}">${orderStatus}</div>
     <div class="td"><span class="orderDeleteItem"><a data-type="deleteBtn" data-id="${item.id}">刪除</a></span></div>
    </div>`;
  });
  ordersContent.innerHTML = str;
}

//刪除單筆訂單
ordersContent.addEventListener("click", deleteOrder);
function deleteOrder(e){
  e.preventDefault();
  // console.log(e.target.getAttribute("data-type"));
  if(e.target.getAttribute("data-type") !== "deleteBtn"){
    return;
  };
  let id = e.target.getAttribute("data-id");
  let url = `https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders/${id}`
  axios.delete(url,config)
 .then(function(response){
  getOrderList();
 })
 .catch(function(error){
  console.log(error);
 });
}

//修改處理狀態
ordersContent.addEventListener("click", changeStatus);
function changeStatus(e){
  e.preventDefault();
  if(e.target.getAttribute("data-type") !== "status"){
    return;
  }
  let orderID = e.target.getAttribute("data-id");
  let orderStatus = e.target.getAttribute("data-status");
  let newStatus;
  // console.log(orderStatus, typeof(orderStatus), orderID, typeof(orderID));
  if(orderStatus === "false"){
    newStatus = true;
  }else if(orderStatus === "true"){
    newStatus = false;
  };  
  //送出修改
  let data = {
    "data": {
      "id": orderID,
      "paid": newStatus
    }
  }
  let url = `https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`;
  axios.put(url, data, config)
  .then(function(response){
    // console.log(response); 
    getOrderList()
  })
  .catch(function(error){
    console.log(error);
  });
}

//刪除全部訂單
const btnDeleteAll = document.querySelector("#btnDeleteAll");
btnDeleteAll.addEventListener('click', function(e){
  let url = `https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`;
  axios.delete(url, config)
 .then(function(response){
  console.log(response); 
  getOrderList();
})
 .catch(function(error){
  console.log(error);
 });
})