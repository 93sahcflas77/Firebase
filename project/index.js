// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});


// new project

// const date = new Date("02/05/2024");
// const date = "02/05/2024";

// const in_time = 9;
// const out_time = 20;

// in time
let moring = new Date(["12-05-2024","10:40"]);
let in_time = moring.toString();
let a = in_time.slice(16,21);


// out time
let evening = new Date(["12-05-2024","17:35"]);
let out_time = evening.toString();
let b = out_time.slice(16,21);


// Total time
let total_hour = out_time.slice(16,18) - in_time.slice(16,18);
let total_min = Math.abs(out_time.slice(19,21) - in_time.slice(19,21));

if(total_hour >= 0){
  total_hour = `0${total_hour}`;
}

if(total_min >= 0){
  total_min = `0${total_min}`;
}




// loss time and profit time

// hoye
let loss_time = Math.abs(9 - total_hour);
let profit_time = 0;

if(loss_time <= 0){
  profit_time = loss_time;
}else{
  loss_time = loss_time;
}


// min
console.log(total_min); //05

let loss_time_m = Math.abs(60 - total_min);

console.log(loss_time_m);  //55

let profit_time_m;

if(loss_time_m <= 0){
  profit_time_m = loss_time_m;
  console.log(loss_time_m + " run code profit time");
}else{
  loss_time_m = loss_time_m;
  console.log(loss_time_m + " run code loss time");
}



// Amount code

// Total Rupess

// Hour rupess

// Minute rupess

// Profit rupess

// Loss rupess



// firebase database
const Employer = {
  Date: moring ,
  In_Time: a + " AM",
  Out_Time: b + " PM",
  Total_hour: total_hour + " hour",
  Total_min: total_min + " min",
  Total_time: total_hour + "h " + total_min + "m",
  Profit_time: profit_time + "h",
  Loss_time: loss_time + "h"

}

console.log(Employer);

