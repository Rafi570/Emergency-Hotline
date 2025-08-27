// getInnerHTML function
function getInnerHTML(id) {
  let innerValue = document.getElementById(id).innerText;
  return parseInt(innerValue);
}
// set inner value  function
function setInnerValue(value) {
  document.getElementById("heart-div").innerText = value;
}
// heart section
let hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    const innerValueDIv = getInnerHTML("heart-div");
    setInnerValue(innerValueDIv + 1);
  });
}
