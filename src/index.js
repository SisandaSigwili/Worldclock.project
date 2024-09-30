function showUserTime() {
  const userTimeDiv = document.getElementById("userTime");
  const now = new Date();
  const userLocalTime = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  userTimeDiv.innerHTML = `Your local time: ${userLocalTime}`;
}

function showCityTime() {
  const citySelect = document.getElementById("citySelect");
  const selectedCity = citySelect.value;
  const now = new Date();

  if (!selectedCity) {
    return;
  }

  const cityTime = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: selectedCity,
  });

  document.getElementById("cityTime").innerHTML = `The current time in ${
    citySelect.options[citySelect.selectedIndex].text
  } is: ${cityTime}`;

  document.getElementById("homepageLink").style.display = "inline-block";
}

function goBack() {
  document.getElementById("citySelect").value = "";
  document.getElementById("cityTime").innerHTML = "";
  document.getElementById("homepageLink").style.display = "none";
}

window.onload = function () {
  showUserTime();
  setInterval(showUserTime, 1000);
};
