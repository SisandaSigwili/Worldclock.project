function showCityTime() {
  const citySelect = document.getElementById("citySelect");
  const selectedCity = citySelect.value;
  const now = new Date();

  let timeZone = "";
  switch (selectedCity) {
    case "Paris":
      timeZone = "Europe/Paris";
      break;
    case "Tokyo":
      timeZone = "Asia/Tokyo";
      break;
    case "Sydney":
      timeZone = "Australia/Sydney";
      break;
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
    timeZone,
  });

  document.getElementById(
    "cityTime"
  ).innerHTML = `The current time in ${selectedCity} is: ${cityTime}`;

  // Show the link to return to homepage
  document.getElementById("homepageLink").style.display = "block";
}

// Function to return to the city selection (homepage)
function goBack() {
  document.getElementById("citySelect").value = ""; // Reset the selection
  document.getElementById("cityTime").innerHTML = ""; // Clear the city's time display
  document.getElementById("homepageLink").style.display = "none"; // Hide the homepage link
}

// Show user's current local time on page load
window.onload = function () {
  showUserTime();
  setInterval(showUserTime, 1000); // Update the user's time every second
};
