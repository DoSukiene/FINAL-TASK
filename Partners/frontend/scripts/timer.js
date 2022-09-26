let eventDate = new Date("Aug 27, 2023 00:00:00 UTC -8").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  // let now = Date.now(); - alternatively?
  let timeLeft = eventDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let daysLeft = Math.trunc(timeLeft / day);
  let hoursLeft = Math.trunc((timeLeft % day) / hour);
  let minutesLeft = Math.trunc((timeLeft % hour) / minute);
  let secondsLeft = Math.trunc((timeLeft % minute) / second);

  document.getElementById("timer").innerHTML =
    "The Man burns in " +
    daysLeft +
    " days " +
    hoursLeft +
    " hours " +
    minutesLeft +
    " minutes " +
    secondsLeft +
    " seconds ";

  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "BURNING MAN IS HAPPENING NOW";
  }
}, 1000);