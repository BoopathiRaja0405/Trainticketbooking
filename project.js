//Array of images
let images = [
  "js images/s1.webp",
  "js images/s2.webp",
  "js images/s3.webp",
  "js images/s4.webp",
  "js images/s5.webp",
];

function changeImage(index) {
  document.getElementById("myImage").src = images[index];
}

//FAQ

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Help page link

function goToSecondPage() {
  window.location.href = "page2.html";
}

function goToThirdPage() {
  window.location.href = "page3.html";
}

//Train Search

const cities = [
  "Chennai",
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Kovilpatti",
  "Tuticorin",
  "Tirunelveli",
  "Nagercoil",
  "Kanyakumari",
  "Kerala",
];

function autocomplete(input, listId) {
  let list = document.getElementById(listId);
  input.addEventListener("input", function () {
    list.innerHTML = "";
    let search = this.value.toLowerCase();
    if (!search) return;

    let matches = cities
      .filter((city) => city.toLowerCase().includes(search))
      .slice(0, 5);

    matches.forEach((city) => {
      let div = document.createElement("div");
      div.classList.add("autocomplete-item");
      div.innerHTML = city;
      div.onclick = function () {
        input.value = city;
        list.innerHTML = "";
      };
      list.appendChild(div);
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== input) list.innerHTML = "";
  });
}

autocomplete(document.getElementById("source"), "source-list");
autocomplete(document.getElementById("destination"), "destination-list");

function searchTrains() {
  let source = document.getElementById("source").value.trim();
  let destination = document.getElementById("destination").value.trim();
  let date = document.getElementById("travelDate").value.trim();

  if (!source || !destination || !date) {
    alert("Please enter all details.");
    return;
  }

  window.location.href = `page4search.html?source=${encodeURIComponent(
    source
  )}&destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(
    date
  )}`;
}

//Pnr page go

function goPnr(){
  window.location="https://www.redbus.in/railways/pnr-status?from=Rail%20Home"
}

function goStatus(){
  window.location="https://www.redbus.in/railways/train-running-status?from=Rail%20Home"
}

function goFood(){
  window.location="https://www.ecatering.irctc.co.in/"
}

function goMad(){
  window.location="https://railmadad.indianrailways.gov.in/madad/final/home.jsp"
}

function app(){
  window.location="https://play.google.com/store/apps/details?id=com.rails.red&pcampaignid=web_share"
}

//Train table

function goTrain(){
  window.location.href="trainlist.html";
}

function goTrain2(){
  window.location.href="trainlist2.html";
}

function goTrain3(){
  window.location.href="trainlist3.html";
}

function goTrain4(){
  window.location.href="trainlist4.html";
}
function goTrain5(){
  window.location.href="trainlist5.html";
}
function goTrain6(){
  window.location.href="trainlist6.html";
}
function goTrain7(){
  window.location.href="trainlist7.html";
}
function goTrain8(){
  window.location.href="trainlist8.html";
}
function goTrain9(){
  window.location.href="trainlist9.html";
}


//---------