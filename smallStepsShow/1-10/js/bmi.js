//計算bmi
const submitBtn = document.querySelector("#submitBtn")
const inputHeight = document.querySelector("#inputHeight");
const inputWeight = document.querySelector("#inputWeight");
const textErro = document.querySelector("#textErro");

const bmiStatesData = {
 "underweight": {
   "state": "體重過輕",
   "color": "green"
 },
 "normal": {
   "state": "體重正常",
   "color": "blue"
 },
 "overWeight": {
   "state": "體重過重",
   "color": "yellow"
 },
 "mildObese": {
   "state": "輕度肥胖",
   "color": "orange"
 },
 "moderateObese": {
   "state": "中度肥胖",
   "color": "red"
 },
 "severeObese": {
   "state": "重度肥胖",
   "color": "purple"
 },
}

submitBtn.addEventListener("click", countBMI);
function countBMI(e){
  textErro.innerHTML = ``; //清除錯誤訊息

  if(inputHeight.value.trim() === "" || inputWeight.value.trim() === ""){
  //  console.log("empty");
    inputHeight.placeholder = "輸入身高";
    inputWeight.placeholder = "輸入體重";
    return;
  }else if(inputHeight.value > 1000 || inputWeight.value > 1000 || inputHeight.value <= 0 || inputWeight.value <= 0){
    printError();
    resetColor();
    return;
  };

  let height = inputHeight.value;
  let weight = inputWeight.value;
  const bmi = (weight / ((height / 100)**2)).toFixed(2);
  if(bmi < 18.5){
    printBMI(bmi);
    printResult("underweight");
  }else if(18.5 <= bmi && bmi < 24){
    printBMI(bmi);
    printResult("normal");
  }else if(24 <= bmi && bmi < 27){
    printBMI(bmi);
    printResult("overWeight");
  }else if(27 <= bmi && bmi < 30){
    printBMI(bmi);
    printResult("mildObese");
  }else if(30 <= bmi && bmi < 35){
    printBMI(bmi);
    printResult("moderateObese");
  }else if(35 < bmi){
    printBMI(bmi);
    printResult("severeObese");
  }else{
    printError();
  };
};

//渲染bmi
function printBMI(bmi){
  const bmiNum = document.querySelector("#bmiNum");
  const bmiResult = document.querySelector(".bmi_result").firstElementChild;
  bmiResult.classList.remove("text_mute");
  bmiNum.textContent = bmi;
};

//渲染狀態
function printResult(x){
  const bmiState = bmiStatesData[x].state;
  const bmiColor = bmiStatesData[x].color;
  const stateReport = document.querySelector("#stateReport");
  stateReport.innerHTML = `<p class="text_sm"><span id="yourState">${bmiState}</span><span class="stateColor ${bmiColor}" id="stateColor"></span></p>`;
}

//清空欄位
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetAll);
function resetAll(e){
  document.querySelector("#inputHeight").value ="";
  document.querySelector("#inputWeight").value ="";
  document.querySelector("#inputHeight").placeholder ="cm";
  document.querySelector("#inputWeight").placeholder ="kg";
  textErro.innerHTML = ``;
  // document.location.reload(true); 
  //在codepen會掛掉
  resetColor();
}

//重設結果
function resetColor(){
  const bmiResult = document.querySelector(".bmi_result");
  bmiResult.innerHTML = `<div class="text_mute">
  <p class="text_md">BMI指數<span class="bmiNum" id="bmiNum"><span></p>
  <div id="stateReport">
    <p class="text_sm"><span id="yourState">體重狀態</span><span class="stateColor" id="stateColor"></span></p>
  </div>
</div>`;
}

//顯示錯誤狀態
function printError(){
  textErro.innerHTML = `<p class="text_err">您的數值輸入錯誤，請重新輸入</p>`; 
}