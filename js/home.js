// get inner Parse int number
function getInnerHTML(id) {
  let innerValue = document.getElementById(id).innerText;
  return parseInt(innerValue);
}
// call function
function historyAddCard(innerP, innerN) {
  let coin = document.getElementById("p-coin");
  let coinValue = getInnerHTML("p-coin");
  if (coinValue < 20) {
    alert("You don't have enough coin");
    return;
  }
  coin.innerText = coinValue - 20;
  alert(innerP + ": " + innerN);
  const div = document.createElement("div");
  const historyContainer = document.getElementById("history-container");
  div.innerHTML = `
   <div class="flex justify-between items-center bg-gray-100 rounded-lg p-2 mt-3">
          <div class="leading-none">
            <h6 class="font-semibold text-[18px]">${innerP}</h6>
       <p class="text-gray-400 text-[14px]">${innerN}</p>
      </div>
         <div>
    <p class="text-[14px] text-gray-500">${new Date().toLocaleTimeString()}</p>
      </div>
            </div>
    `;
  historyContainer.appendChild(div);
}
// innerText Function
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

// set inner value  function
function setInnerValue(value, id) {
  document.getElementById(id).innerText = value;
}
// heart section
let hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    const innerValueDIv = getInnerHTML("heart-div");
    setInnerValue(innerValueDIv + 1, "heart-div");
  });
}

// copy text Function id="NationalEmergencyNumber"

function copyText(elementId) {
  let Number = document.getElementById(elementId).innerText;
  navigator.clipboard
    .writeText(Number)
    .then(() => {
      console.log("Your number has been copied : " + Number);
      alert("Your number has been copied : " + Number);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}
// copy section
let copyBtns = document.getElementsByClassName("copy-btn");

for (let btn of copyBtns) {
  btn.addEventListener("click", function () {
    // console.log("clicked")
    let innerValueBtn = getInnerHTML("copy-div");
    setInnerValue(innerValueBtn + 1, "copy-div");
  });
}

// call-btns
document.getElementById("call-national").addEventListener("click", function () {
  let innerP = getInnerText("p-national");
  let innerN = getInnerHTML("NationalEmergencyNumber");
  historyAddCard(innerP, innerN);
});
document.getElementById("police-btn").addEventListener("click", function () {
  let innerP = getInnerText("p-police");
  let innerN = getInnerHTML("police");
  historyAddCard(innerP, innerN);
});
document.getElementById("fire-btn").addEventListener("click", function () {
  let innerP = getInnerText("p-fire");
  let innerN = getInnerHTML("Fire");
  historyAddCard(innerP, innerN);
});
document.getElementById("Ambulance-btn").addEventListener("click", function () {
  let innerP = getInnerText("p-Ambulance");
  let innerN = getInnerHTML("Ambulance");
  historyAddCard(innerP, innerN);
});
document.getElementById("Women-btn").addEventListener("click", function () {
  let innerP = getInnerText("p-Women");
  let innerN = getInnerHTML("Women");
  historyAddCard(innerP, innerN);
});
document
  .getElementById("Corruption-btn")
  .addEventListener("click", function () {
    let innerP = getInnerText("p-Corruption");
    let innerN = getInnerHTML("Corruption");
    historyAddCard(innerP, innerN);
  });
document
  .getElementById("Electricity-btn")
  .addEventListener("click", function () {
    let innerP = getInnerText("p-Electricity");
    let innerN = getInnerHTML("Electricity");
    historyAddCard(innerP, innerN);
  });
document.getElementById("Brac-btn").addEventListener("click", function () {
  let innerP = getInnerText("p-brac");
  let innerN = getInnerHTML("Brac");
  historyAddCard(innerP, innerN);
});
document.getElementById("Railway-btn").addEventListener("click", function () {
  let innerP = getInnerText("p-Railway");
  let innerN = getInnerHTML("Railway");
  historyAddCard(innerP, innerN);
});

// clear section

document.getElementById("Clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerText = "";
});
