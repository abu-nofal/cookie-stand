
"use strict";
let branchesArray=[];
let hourOperation = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm",];

function SalmonFunction(locationName, minH, maxH, avg, customerEH, cookiesEH, total) {
  this.locationName = locationName;
  this.minH = minH;
  this.maxH = maxH;
  this.avg = avg;
  this.customerEH = customerEH;
  this.cookiesEH = cookiesEH;
  this.total = total;
  branchesArray.push(this);

}
// random function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// prototype
SalmonFunction.prototype.getRandomCust = function () {
  for (let i = 0; i < hourOperation.length; i++) {
    this.customerEH.push(random(this.minH, this.maxH));
  }
};

SalmonFunction.prototype.getCookesPH = function () {
  for (let i = 0; i < hourOperation.length; i++) {
    this.cookiesEH.push(Math.floor(this.customerEH[i] * this.avg));
    this.total += this.cookiesEH[i];
  }
};



//..............................
//..............................

let par = document.getElementById("parent");//globle parent
let table2 = document.createElement("table");
par.appendChild(table2);
//-----------------------------
//-----------------------------
let tableRenderForHead = function () {// create table for the head 

  let tRow1 = document.createElement("tr");
  table2.appendChild(tRow1);
  let tHeadForTB=document.createElement('th');
  tRow1.appendChild(tHeadForTB);
  tHeadForTB.textContent='location';

  for (let i = 0; i < hourOperation.length; i++) {
    let tHead1 = document.createElement("th");
    tRow1.appendChild(tHead1);
    tHead1.textContent = hourOperation[i];
  }

  let tHeadForTE=document.createElement('th');
  tRow1.appendChild(tHeadForTE);
  tHeadForTE.textContent='Daily Location Total';
};
tableRenderForHead ();//calling the table rander

//----------------------------------------
//----------------------------------------

SalmonFunction.prototype.tableRender1 = function () {
  
  let tRow = document.createElement("tr");
  table2.appendChild(tRow);
  let tData=document.createElement('td');
  tRow.appendChild(tData);
  tData.textContent=this.locationName;
  for (let i = 0; i < hourOperation.length; i++) {
    let tData = document.createElement("td");
    tRow.appendChild(tData);
    tData.textContent = this.cookiesEH[i];
  }
  let tDataFprTotal=document.createElement('td');
  tRow.appendChild(tDataFprTotal);
  tDataFprTotal.textContent=this.total;
};

//--------------------------------------------
//--------------------------------------------
let tableRenderForFoot = function () {// create table for the head 

  let tRow2 = document.createElement("tr");
  table2.appendChild(tRow2);
  let tForTF=document.createElement('tf');
  tRow2.appendChild(tForTF);
  tForTF.textContent='Tootal';
  for(let j=0;j<hourOperation;j++){
    let tForTF=document.createElement('tf');
    tRow2.appendChild(tForTF);
    
  
  }
  

};


//---------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------


let Seattle = new SalmonFunction("seattle", 23, 65, 6.3, [], [], 0);
// console.log(Seattle);

Seattle.getRandomCust();
Seattle.getCookesPH();
Seattle.tableRender1();


//---------------------------------------------------
//---------------------------------------------------
let tokyo = new SalmonFunction("Tokyo", 3, 24, 1.2, [], [], 0);
// console.log(tokyo);

tokyo.getRandomCust();
tokyo.getCookesPH();
tokyo.tableRender1();
//----------------------------------------------
//----------------------------------------------
let dubai = new SalmonFunction("Dubai", 11, 38, 3.7, [], [], 0);
// console.log(dubai);

dubai.getRandomCust();
dubai.getCookesPH();
dubai.tableRender1();
//----------------------------------------------
//----------------------------------------------

let paris = new SalmonFunction("Paris", 20, 38, 2.3, [], [], 0);
// console.log(paris);

paris.getRandomCust();
paris.getCookesPH();
paris.tableRender1();
//---------------------------
//---------------------------
let lima = new SalmonFunction("Lima", 2, 16, 4.6, [], [], 0);
// console.log(lima);

lima.getRandomCust();
lima.getCookesPH();
lima.tableRender1();
//----------------------
tableRenderForFoot();

