// getInnerHTML function
function getInnerHTML(id) {
  let innerValue = document.getElementById(id).innerText;
  return parseInt(innerValue);
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
      alert("Your number has been copied : " + Number)
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
