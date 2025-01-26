(function() {
  const clockElement = document.getElementById("digital-clock");
  const toggleFormatButton = document.getElementById("toggle-format");
  const fontSizeInput = document.getElementById("font-size");
  const colorPicker = document.getElementById("color-picker");
  const setAlarmButton = document.getElementById("set-alarm");
  const alarmSettings = document.getElementById("alarm-settings");
  const alarmTimeInput = document.getElementById("alarm-time");
  const alarmMessageInput = document.getElementById("alarm-message");
  const saveAlarmButton = document.getElementById("save-alarm");

  let is24HourFormat = JSON.parse(localStorage.getItem("is24HourFormat")) || false;
  let clockColor = localStorage.getItem("clockColor") || "#fff";
  let fontSize = localStorage.getItem("fontSize") || 48;
  let alarmTime = localStorage.getItem("alarmTime") || null;
  let alarmMessage = localStorage.getItem("alarmMessage") || "Alarm! It's time!";

  clockElement.style.color = clockColor;
  clockElement.style.fontSize = `${fontSize}px`;

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (!is24HourFormat) {
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      clockElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
    } else {
      clockElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    if (alarmTime) {
      const [alarmHours, alarmMinutes] = alarmTime.split(":");
      if (now.getHours() === parseInt(alarmHours, 10) &&
        now.getMinutes() === parseInt(alarmMinutes, 10) &&
        seconds === 0) {
        alert(alarmMessage);
        alarmTime = null;
        localStorage.removeItem("alarmTime");
        localStorage.removeItem("alarmMessage");
      }
    }
  }

  setInterval(updateClock, 1000);
  updateClock();

  toggleFormatButton.addEventListener("click", function() {
    is24HourFormat = !is24HourFormat;
    localStorage.setItem("is24HourFormat", JSON.stringify(is24HourFormat));
  });

  fontSizeInput.addEventListener("input", function(e) {
    fontSize = e.target.value;
    clockElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize);
  });

  colorPicker.addEventListener("input", function(e) {
    clockColor = e.target.value;
    clockElement.style.color = clockColor;
    localStorage.setItem("clockColor", clockColor);
  });

  setAlarmButton.addEventListener("click", function() {
    alarmSettings.classList.remove("hidden");
  });

  saveAlarmButton.addEventListener("click", function() {
    alarmTime = alarmTimeInput.value;
    alarmMessage = alarmMessageInput.value || "Alarm! It's time!";
    localStorage.setItem("alarmTime", alarmTime);
    localStorage.setItem("alarmMessage", alarmMessage);
    alarmSettings.classList.add("hidden");
  });
})();
