const popup = document.getElementById("popup");
const matchName = document.getElementById("matchName");
const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

function bookTicket(match) {
  popup.style.display = "none";
  matchName.value = match;
}

function closePopup() {
  popup.style.display = "none";
  message.innerHTML = "";
}

bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const tickets = document.getElementById("tickets").value;

  message.innerHTML = `Tickets  are booked successfully`;

  bookingForm.reset();
});
