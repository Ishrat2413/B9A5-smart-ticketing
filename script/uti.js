function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
function setBackgroundColor(elementId) {
  const bgColor = elementId.classList.add("bg-[#1DD100]");
}
function setTextColor(elementId) {
  const textColor = elementId.classList.add("text-white");
}
function hideCoupon(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
