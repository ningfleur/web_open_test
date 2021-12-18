//取得產品資料
let productData = [];
function getProductList(){
    let url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`;
    axios.get(url)
    .then(function (response) {
      productData = response.data.products;
    //   console.log(productData);
      renderProductList(productData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

//渲染產品列表
const productGroup = document.querySelector("#productGroup");
function renderProductList(data){
    let str = "";
    data.forEach((item) => {
        str += `<div class="product">
        <span class="newTag">${item.category}</span>
        <img class="p_img" src="${item.images}" alt="">
        <a class="btnAddCart" data-id="${item.id}" data-type="addBtn">加入購物車</a>
        <h3 class="p_name">${item.title}</h3>
        <del>NT$<span>${toThousands(item.origin_price)}</span></del>
        <p>NT$<span class="p_price">${toThousands(item.price)}</span></p>
      </div>`;
    });
    productGroup.innerHTML = str;
}

const productSelect = document.querySelector(".productSelect");
productSelect.addEventListener("change", function(e){
    let selectList = [];
    if(e.target.value === "床架"){
        selectList = productData.filter((item) => item.category === "床架");
    }else if(e.target.value === "收納"){
        selectList = productData.filter((item) => item.category === "收納");
    }else if(e.target.value === "窗簾"){
        selectList = productData.filter((item) => item.category === "窗簾");
    }else if(e.target.value === "全部"){
        selectList = productData;
    };
    renderProductList(selectList);
})

//取得訂單資料
let orderData = [];
function updateOrderList(){
    let url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`;
    axios.get(url)
    .then(function (response) {
      orderData = response.data.carts;
      renderCart();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function init(){
    getProductList();
    updateOrderList();
}
init();

//渲染訂單資料
const cartContent = document.querySelector("#cartContent");
const cartTotal = document.querySelector(".cartTotal");
function renderCart(){
    let str = "";
    let sum = 0;
    let quantity;
    orderData.forEach((item) => {
        let subtotal = item.product.price * item.quantity;
        str += `<tr>
        <td class="item_title">
          <img class="itemImg" src="${item.product.images}" alt="">
          <span class="itemName">${item.product.title}</span>
        </td>
        <td>NT$<span class="itemPrice">${item.product.price}</span></td>
        <td>
        <div class="numGroup">
            <span class="material-icons material-icons_s icons" data-type="js_PatchMinus" data-id="${item.id}" data-num="${item.quantity}">remove</span>
            <span class="quantity">${item.quantity}</span>
            <span class="material-icons material-icons_s icons" data-type="js_PatchAdd" data-id="${item.id}" data-num="${item.quantity}">add</span>
        </div>
        </td>
        <td>NT$<span class="itemPrice">${subtotal}</span></td>
        <td>
          <a class="deleteBtn"><span class="material-icons material-icons_s" data-type="deleteOrder" data-id="${item.id}">clear</span></a>
        </td>
      </tr>`;
      sum += subtotal;
    });
    cartContent.innerHTML = str;
    cartTotal.textContent = sum;  //購物車總金額
}

//調整商品數量
cartContent.addEventListener("click", function(e){
    e.preventDefault();
    let productID = e.target.getAttribute("data-id");
    let productQuantity = parseInt(e.target.getAttribute("data-num"));
    let patchQuantity = 0;
    if(e.target.getAttribute("data-type") === "js_PatchAdd"){
        patchQuantity = productQuantity + 1;
        patchOrder(productID, patchQuantity);
    }else if(e.target.getAttribute("data-type") === "js_PatchMinus"){
        if(productQuantity === 1){
            return;
        };
        patchQuantity = productQuantity - 1;
        patchOrder(productID, patchQuantity);
    }else{
        return;
    };
});

//PATCH商品數量
function patchOrder(productID, patchQuantity){
    let url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`;
    let data = {
        "data": {
          "id": productID,
          "quantity": patchQuantity
        }
      };
    axios.patch(url, data, config)
    .then(function(response){
        console.log(response); 
        updateOrderList();
    })
    .catch(function(error){
        console.log(error);
    });
}

//新增商品到購物車
productGroup.addEventListener("click", addToCart);
function addToCart(e){
    if(e.target.getAttribute("data-type") !== "addBtn"){
        return;
    }else if(e.target.getAttribute("data-type") === "addBtn"){
        e.preventDefault();
        let productID = e.target.getAttribute("data-id") ;
        let productQuantity = 1;
        orderData.forEach((item) => {
            if(productID === item.product.id){
                productQuantity += item.quantity;
            };
        });
        // console.log(productID, productQuantity);
        let url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`;
        let obj = {
            "data": {
                "productId": productID,
                "quantity": productQuantity
            }
        };
        axios.post(url, obj)
        .then(function(response){
            updateOrderList()
            // alert("成功加入購物車");
        })
        .catch(function(error){
            console.log(error);
        });
    };
}

//刪除個別品項
cartContent.addEventListener("click", deleteOneOrder);
function deleteOneOrder(e){
    e.preventDefault();
    if(e.target.getAttribute("data-type") !== "deleteOrder"){
        return;
    }else{
        let orderID = e.target.getAttribute("data-id");
        let url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts/${orderID}`
        axios.delete(url, config)
            .then(function(response){
                console.log(response);
                updateOrderList()
            })
            .catch(function(error){
                console.log(error);
        });
    };
}

//刪除所有品項
const btnDeleteAll = document.querySelector(".btnDeleteAll");
btnDeleteAll.addEventListener("click", function(e){
    e.preventDefault();
    console.log("got it");
    let url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`
    axios.delete(url, config)
    .then(function(response){
        console.log(response);
        updateOrderList()
    })
    .catch(function(error){
        console.log(error);
    });
});


//送出訂單
const formSubmit = document.querySelector("#formSubmit"); 
const formGroup = document.querySelectorAll(".form_group input");
const inputName = document.querySelector("#inputName");
const inputPhone = document.querySelector("#inputPhone");
const inputMail = document.querySelector("#inputMail");
const inputAdd = document.querySelector("#inputAdd");
const tradeType = document.querySelector("#tradeType");
// console.log(inputName, inputPhone, inputMail, inputAdd, tradeType)


function validateForms(){
    formGroup.forEach((item) => {
        if(item.value === ""){
            item.nextElementSibling.innerHTML = `<span>必填</span>`;
        }else{
            item.nextElementSibling.innerHTML = "";
        };
    });
    if(validateEmail(inputMail.value) === false){
        inputMail.nextElementSibling.innerHTML = `<span>email格式不正確</span>`;
    }else if(validateEmail(inputMail.value) === undefined){
        inputMail.nextElementSibling.innerHTML = `<span>必填</span>`;
    };
    if(validatePhone(inputPhone.value) === false){
        inputPhone.nextElementSibling.innerHTML = `<span>手機號碼不正確</span>`;
    }else if(validatePhone(inputPhone.value) === undefined){
        inputPhone.nextElementSibling.innerHTML = `<span>必填</span>`;
    };;
}

//送出預定資料
formSubmit.addEventListener("click", checkOrder);
function checkOrder(e){
    e.preventDefault();
    if(cartContent.innerHTML === ""){
        alert("請先加入購物車");
        return;
    };
    validateForms();
    if(inputName.value !== "" && inputPhone.value !== "" && inputMail.value !== "" && inputAdd.value !== "" && validateEmail(inputMail.value) === true && validatePhone(inputPhone.value) === true){
        let url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/orders`;
        let obj = {
            "data": {
                "user": {
                    "name": inputName.value.trim(),
                    "tel": inputPhone.value.trim(),
                    "email": inputMail.value.trim(),
                    "address": inputAdd.value.trim(),
                    "payment": tradeType.value.trim()
                }
            }
        };
        axios.post(url, obj)
        .then(function(response){
            console.log(response); 
            alert("訂單送出！");
            updateOrderList()
            resetOrderForms();
        })
        .catch(function(error){
            console.log(error); 
        });
    }
}

//表單清空
function resetOrderForms(){
    formGroup.forEach((item) => {
        item.value = "";
    });
}