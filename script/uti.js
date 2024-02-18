function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
function setBackgroundColor(elementId) {
  const bgColor = elementId.classList.add("bg-[#1DD100]");
}
function hideCoupon(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
  // const hideCoupon = document.getElementById("coupon-part");
  // hideCoupon.classList.add("hidden");
}
