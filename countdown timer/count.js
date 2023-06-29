var countdown;
var timeInSeconds = 180; 
var timerRunning = false;

function startTimer() {
  if (!timerRunning) {
    countdown = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function updateTimer() {
  var countdownElement = document.getElementById('countdown');
  var minutes = Math.floor(timeInSeconds / 60);
  var seconds = timeInSeconds % 60;

  countdownElement.textContent = formatTime(minutes) + ':' + formatTime(seconds);

  timeInSeconds--;

  if (timeInSeconds < 0) {
    clearInterval(countdown);
    countdownElement.textContent = "Time's up!";
    timerRunning = false;
  }
}

function stopTimer() {
  clearInterval(countdown);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(countdown);
  timerRunning = false;
  timeInSeconds = 180; 
  document.getElementById('countdown').textContent = '00:00:00';
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
