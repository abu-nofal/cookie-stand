"use strict";

let hourOperation = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

let Seattle = {
  minH: 23,
  maxH: 65,
  averageC: 6.3,
  array1: [],

  numberOfCus: function () {
    return Math.floor(Math.random() * (this.maxH - this.minH + 1) + this.minH);
  },
};

Seattle.numberOfCus();

// Calculate and store the simulated amounts of cookies purchased for each hour
let sum = 0;
for (let i = 0; i < hourOperation.length; i++) {
  let avPerHour = Seattle.averageC * Seattle.numberOfCus();
  avPerHour = parseInt(avPerHour);
  sum = sum + avPerHour;
  //   console.log(hourOperation[i] + `: ${avPerHour} cookies`);
  // Store the results in array
  Seattle.array1.push(hourOperation[i] + `: ${avPerHour} cookies`);
}

Seattle.array1.push(`total: ${sum} cookies`); // add the total sum to end of the array
// console.log(Seattle.array1);

let parent = document.getElementById("Seattle"); // get element by id

let header2 = document.createElement("h2"); // create h2

parent.appendChild(header2); // append h2 for his parent

header2.textContent = "Seattle"; // text content

let unOrderedList = document.createElement("ul"); // create ul

parent.appendChild(unOrderedList); // append ul for parents

for (let i = 0; i < Seattle.array1.length; i++) {
  let listItems = document.createElement("li");
  unOrderedList.appendChild(listItems);
  listItems.textContent = Seattle.array1[i];
} // create li by loob = to length

let Tokyo = {
  minH: 3,
  maxH: 24,
  averageC: 1.2,
  array2: [],

  numberOfCus: function () {
    return Math.floor(Math.random() * (this.maxH - this.minH + 1) + this.minH);
  },
};

Tokyo.numberOfCus();
let sum1 = 0;
for (let i = 0; i < hourOperation.length; i++) {
  let avPerHour = Tokyo.averageC * Tokyo.numberOfCus();
  avPerHour = parseInt(avPerHour);
  sum1 = sum1 + avPerHour;
  //   console.log(hourOperation[i] + `: ${avPerHour} cookies`);
  // Store the results in array
  Tokyo.array2.push(hourOperation[i] + `: ${avPerHour} cookies`);
}

Tokyo.array2.push(`total: ${sum1} cookies`); // add the total sum to end of the array
// console.log(Tokyo.array2);

let pare1 = document.getElementById("Tokyo"); // get element by id

let head2 = document.createElement("h2"); // create h2

pare1.appendChild(head2); // append h2 for his parent

head2.textContent = "Tokyo"; // text content

let unlist2 = document.createElement("ul"); // create ul

pare1.appendChild(unlist2); // append ul for parents

for (let i = 0; i < Seattle.array1.length; i++) {
  let listItems = document.createElement("li");
  unlist2.appendChild(listItems);
  listItems.textContent = Tokyo.array2[i];
} // create li by loob = to length

let Dubai = {
  minH: 11,
  maxH: 38,
  averageC: 3.7,
  array3: [],

  numberOfCus: function () {
    return Math.floor(Math.random() * (this.maxH - this.minH + 1) + this.minH);
  },
};

Dubai.numberOfCus();
//
let sum2 = 0;
for (let i = 0; i < hourOperation.length; i++) {
  let avPerHour = Dubai.averageC * Dubai.numberOfCus();
  avPerHour = parseInt(avPerHour);
  sum2 = sum2 + avPerHour;
  //   console.log(hourOperation[i] + `: ${avPerHour} cookies`);
  // Store the results in array
  Dubai.array3.push(hourOperation[i] + `: ${avPerHour} cookies`);
}

Dubai.array3.push(`total: ${sum2} cookies`); // add the total sum to end of the array
// console.log(Dubai.array3);

let pare2 = document.getElementById("Dubai"); // get element by id

let head3 = document.createElement("h2"); // create h2

pare2.appendChild(head3); // append h2 for his parent

head3.textContent = "Dubai"; // text content

let unlist3 = document.createElement("ul"); // create ul

pare2.appendChild(unlist3); // append ul for parents

for (let i = 0; i < Seattle.array1.length; i++) {
  let listItems = document.createElement("li");
  unlist3.appendChild(listItems);
  listItems.textContent = Dubai.array3[i];
} // create li by loob = to length

let Paris = {
  minH: 20,
  maxH: 38,
  averageC: 2.3,
  array4: [],

  numberOfCus: function () {
    return Math.floor(Math.random() * (this.maxH - this.minH + 1) + this.minH);
  },
};

Paris.numberOfCus();
let sum3 = 0;
for (let i = 0; i < hourOperation.length; i++) {
  let avPerHour = Paris.averageC * Paris.numberOfCus();
  avPerHour = parseInt(avPerHour);
  sum3 = sum3 + avPerHour;
  //   console.log(hourOperation[i] + `: ${avPerHour} cookies`);
  // Store the results in array
  Paris.array4.push(hourOperation[i] + `: ${avPerHour} cookies`);
}

Paris.array4.push(`total: ${sum3} cookies`); // add the total sum to end of the array
// console.log(Paris.array4);

let pare3 = document.getElementById("Paris"); // get element by id

let head4 = document.createElement("h2"); // create h2

pare3.appendChild(head4); // append h2 for his parent

head4.textContent = "Paris"; // text content

let unlist4 = document.createElement("ul"); // create ul

pare3.appendChild(unlist4); // append ul for parents

for (let i = 0; i < Seattle.array1.length; i++) {
  let listItems = document.createElement("li");
  unlist4.appendChild(listItems);
  listItems.textContent = Paris.array4[i];
} // create li by loob = to length

let Lima = {
  minH: 2,
  maxH: 16,
  averageC: 4.6,
  array1: [],

  numberOfCus: function () {
    return Math.floor(Math.random() * (this.maxH - this.minH + 1) + this.minH);
  },
};

Lima.numberOfCus();
let sum4 = 0;
for (let i = 0; i < hourOperation.length; i++) {
  let avPerHour = Lima.averageC * Lima.numberOfCus();
  avPerHour = parseInt(avPerHour);
  sum4 = sum4 + avPerHour;
  //   console.log(hourOperation[i] + `: ${avPerHour} cookies`);
  // Store the results in array
  Lima.array1.push(hourOperation[i] + `: ${avPerHour} cookies`);
}

Lima.array1.push(`total: ${sum4} cookies`); // add the total sum to end of the array
// console.log(Lima.array1);

let pare4 = document.getElementById("Lima"); // get element by id

let head5 = document.createElement("h2"); // create h2

pare4.appendChild(head5); // append h2 for his parent

head5.textContent = "Lima"; // text content

let unlist5 = document.createElement("ul"); // create ul

pare4.appendChild(unlist5); // append ul for parents

for (let i = 0; i < Seattle.array1.length; i++) {
  let listItems = document.createElement("li");
  unlist5.appendChild(listItems);
  listItems.textContent = Lima.array1[i];
} // create li by loob = to length
