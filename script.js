var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var stopwatchInterval;

function start() {
  stopwatchInterval = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
  milliseconds += 10;

  if (milliseconds >= 1000) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }

  document.getElementById("hours").innerText = padWithZero(hours);
  document.getElementById("minutes").innerText = padWithZero(minutes);
  document.getElementById("seconds").innerText = padWithZero(seconds);
  document.getElementById("milliseconds").innerText = padWithZero(milliseconds);
}

function pause() {
  clearInterval(stopwatchInterval);
}

function reset() {
  clearInterval(stopwatchInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("hours").innerText = "00";
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
  document.getElementById("milliseconds").innerText = "000";
  document.getElementById("lap-list").innerHTML = "";
}

function lap() {
  var lapTime = padWithZero(hours) + ":" + padWithZero(minutes) + ":" + padWithZero(seconds) + ":" + padWithZero(milliseconds);
  var lapItem = document.createElement("li");
  lapItem.innerText = lapTime;
  document.getElementById("lap-list").appendChild(lapItem);
}

function padWithZero(number) {
  return number.toString().padStart(2, "0");
}