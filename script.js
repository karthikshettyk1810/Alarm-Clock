let audio = document.getElementById("alarm");
let btn = document.getElementById("submit");
btn.addEventListener("click", () => {
  console.log("I'm ready to go");

  let hour = Number(document.getElementById("hrs").value);
  let min = Number(document.getElementById("min").value);

  let date = new Date();
  let alarm = new Date(date);
  alarm.setHours(hour, min, 0, 0);

  if (alarm < date) {
    alarm.setDate(alarm.getDate() + 1);
  }

  // Calculate the time difference in seconds
  let timeDiff = Math.floor((alarm - date) / 1000);
  let countdownDisplay = document.getElementById("text");

  countdownDisplay.style.color = "red";

  // Clear any existing intervals to avoid multiple timers running at once
  clearInterval(window.countdownInterval);

  // Start a new countdown interval
  window.countdownInterval = setInterval(() => {
    countdownDisplay.innerHTML = `The alarm will ring after ${timeDiff} seconds`;
    // Decrement the remaining time
    console.log(`${timeDiff} second`);
    timeDiff--;

    // When the countdown reaches zero, play the alarm and clear the interval
    if (timeDiff < 0) {
      clearInterval(window.countdownInterval);
      countdownDisplay.innerHTML = "The alarm is ringing!";
      audio.play();
      setTimeout(() => {
        countdownDisplay.innerHTML = "";
      }, 12000);
    }
  }, 1000);
});
