function digitalClock() {
  var hours = document.getElementById("hours");
  var mins = document.getElementById("mins");
  var secs = document.getElementById("secs");
  var amPm = document.getElementById("am-pm");

  var date = new Date();
  var hour = date.getHours();
  var minuts = date.getMinutes();
  var seconds = date.getSeconds();
  if (hour > 12) {
    hours.innerText = hour - 12;
  } else {
    hours.innerText = hour;
  }

  mins.innerText = minuts;
  secs.innerText = seconds;

  if (hour <= 12) {
    amPm.innerText = "AM";
  } else {
    amPm.innerText = "PM";
  }
}
setInterval(digitalClock, 1000);

function settime() {
  var wakeuptime = document.getElementById("select-wakeup-time").value;
  var lunchtime = document.getElementById("select-lunch-time").value;
  var naptime = document.getElementById("select-nap-time").value;
  var changeImage = document.getElementsByClassName("right-bottom-container");
  var changeText = document.getElementsByClassName("right-text-container");

  var hours = new Date().getHours();

  if (wakeuptime == hours) {
    changeImage[0].style.backgroundImage = 'url("./Assets/wakeup_image.svg")';
    changeText[0].innerText = "WAKE UP !!";
  }

  if (lunchtime == hours) {
    changeImage[0].style.backgroundImage = 'url("./Assets/lunch_image.svg")';
    changeText[0].innerText = "LET'S HAVE SOME LUNCH !!";
  }

  if (naptime == hours) {
    changeImage[0].style.backgroundImage =
      'url("./Assets/goodnight_image.svg")';
    changeText[0].innerText = "GOOD NIGHT !!";
  }
  makeDiv();
}

function makeDiv() {
  var makediv = document.createElement("div");
  document.getElementById("left-container").appendChild(makediv);
  makediv.id = "dynamic-block";

  var wakeupList = document.getElementById("select-wakeup-time");
  var wakeupValue = wakeupList.options[wakeupList.selectedIndex].text;
  var lunchList = document.getElementById("select-lunch-time");
  var lunchValue = lunchList.options[lunchList.selectedIndex].text;
  var napList = document.getElementById("select-nap-time");
  var napValue = napList.options[napList.selectedIndex].text;
  document.getElementById("dynamic-block").innerHTML =
    "Wakeup time: " +
    wakeupValue +
    "<br> Lunch time: " +
    lunchValue +
    "<br> Nap time: " +
    napValue;
}
