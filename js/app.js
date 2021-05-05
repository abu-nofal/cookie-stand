
"use strict";
let SalmonArray=[];
let hourOperation = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm",];

//                                     ----------  random function ----------------------
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

//                                ----------------  constructore funciton ----------------
}
function SalmonCookies(locationName, minH, maxH, avg, customerEH, cookiesEH, total) {
  this.locationName = locationName;
  this.minH = minH;
  this.maxH = maxH;
  this.avg = avg;
  this.customerEH = [];
  this.cookiesEH = [];
  this.total = total;


  SalmonArray.push(this);// push all object inside the constructore function

}

//                                --------------    prototype ----------------------


SalmonCookies.prototype.RandomCust = function () {
  for (let i = 0; i < hourOperation.length; i++) {
    this.customerEH.push(random(this.minH, this.maxH));
  }
};



SalmonCookies.prototype.getCookesPH = function () {
  for (let i = 0; i < hourOperation.length; i++) {
    this.cookiesEH.push(Math.floor(this.customerEH[i] * this.avg));
    this.total += this.cookiesEH[i];
  }
};


SalmonCookies.prototype.tableRender = function () {
  
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
  let tTotatFR=document.createElement('td');
  tRow.appendChild(tTotatFR);
  tTotatFR.textContent=this.total;
};

//..............................
//..............................             globle parent        ----------------------------

let par = document.getElementById("parent");
let table2 = document.createElement("table");
par.appendChild(table2);

//------------------------------------------------
//                                                    create table for the head ----------------------------

let tableRenderForHead = function () {

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



//--------------------------------------------  create table for the footer ----------------

let tableRenderForFoot = function () {

  let tRow2 = document.createElement("tr");
  table2.appendChild(tRow2);

  let tForTF=document.createElement('tf');
  tRow2.appendChild(tForTF);
  tForTF.textContent='Tootal';

  let totoalAltotal=0;
  for (let i=0 ;i<hourOperation.length;i++){
    let totolEH=0;
    for(let j=0;j<SalmonArray.length;j++){
      totolEH+=SalmonArray[j].cookiesEH[i];
    }
    // console.log(totolEH)
    let datatotolEH=document.createElement('td');//we should td for but a data to table 
    tRow2.appendChild(datatotolEH);
    datatotolEH.textContent=totolEH;
    totoalAltotal+=totolEH;
  }
  
  let tForTFE=document.createElement('tf');
  tRow2.appendChild(tForTFE);
  tForTFE.textContent=totoalAltotal;
};

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------


let Seattle = new SalmonCookies("seattle", 23, 65, 6.3, [], [], 0);
// console.log(Seattle);

Seattle.RandomCust();
Seattle.getCookesPH();
Seattle.tableRender();


//---------------------------------------------------
//---------------------------------------------------
let tokyo = new SalmonCookies("Tokyo", 3, 24, 1.2, [], [], 0);
// console.log(tokyo);

tokyo.RandomCust();
tokyo.getCookesPH();
tokyo.tableRender();
//----------------------------------------------
//----------------------------------------------
let dubai = new SalmonCookies("Dubai", 11, 38, 3.7, [], [], 0);
// console.log(dubai);

dubai.RandomCust();
dubai.getCookesPH();
dubai.tableRender();
//----------------------------------------------
//----------------------------------------------

let paris = new SalmonCookies("Paris", 20, 38, 2.3, [], [], 0);
// console.log(paris);

paris.RandomCust();
paris.getCookesPH();
paris.tableRender();
//---------------------------
//---------------------------
let lima = new SalmonCookies("Lima", 2, 16, 4.6, [], [], 0);
// console.log(lima);

lima.RandomCust();
lima.getCookesPH();
lima.tableRender();
//----------------------


// ===================================   Form   ======================================

let storeform=document.getElementById('storeform');
storeform.addEventListener('submit',submitter);

function submitter (event){
  event.preventDefault();
  
  table2.deleteRow(table2.rows.length -1);

  let nameLocation =event.target.locationNameNew.value
  let Min =event.target.Min.value
  let Max =event.target.Max.value
  let AvgCooke =event.target.AvgCooke.value

  let newLocation =new SalmonCookies(nameLocation,Min,Max,AvgCooke,[],[],0);//we should give inishel value to total ==0
  newLocation.RandomCust();
  newLocation.getCookesPH();
  newLocation.tableRender();

  tableRenderForFoot();
  
 document.getElementById('storeform').reset();
}
//--------------------------------
tableRenderForFoot();