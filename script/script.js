const buttonParent = document.getElementById("seat-buttons");
const allButtons = buttonParent.getElementsByClassName("btn");
let count1 = 0;
const perSeat = document.getElementById("per-seat");
let count2 = parseInt(perSeat.innerText);

let buttonInner = [];
for (const btn of allButtons) {
  btn.addEventListener("click", function (e) {
    if (buttonInner.includes(btn.innerText)) {
      alert("You can not book same seat again");
    } else if (count1 >= 4) {
      alert("You can not book more than 4 seats");
    } else {
      count1 = count1 + 1;
      count2 = count2 - 1;

      buttonInner.push(btn.innerText);
      // console.log(buttonInner);
      setInnerText("seat-booked", count1);
      setInnerText("per-seat", count2);
      setBackgroundColor(btn);
      setTextColor(btn);

      const seatName = btn.innerText;

      const addingNewRow = document.getElementById("adding-new-row");
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.innerText = seatName;
      const td2 = document.createElement("td");
      td2.innerText = "Economy";
      const td3 = document.createElement("td");
      td3.innerText = parseInt(550);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      addingNewRow.appendChild(tr);

      document.getElementById("total-price").innerText = count1 * 550;

      document
        .getElementById("disable-button")
        .addEventListener("click", function getTheCoupon() {
          // console.log("Got coupon")
          if (couponPlace === couponCode1) {
            document.getElementById("grand-total-price").innerText = Math.floor(
              count1 * 550 - count1 * 550 * 0.15
            );
            hideCoupon("coupon-part");
          }
          if (couponPlace === couponCode2) {
            document.getElementById("grand-total-price").innerText = Math.floor(
              count1 * 550 - count1 * 550 * 0.2
            );
            hideCoupon("coupon-part");
          }
        });

      const inputNumber = document.getElementById("input-number");

      inputNumber.addEventListener("input", function () {
        const phoneNumber = inputNumber.value;

        if (phoneNumber.length === 0) {
          document.getElementById("next-disabled").disabled = true;
        } else {
          document.getElementById("next-disabled").disabled = false;
        }
      });
    }
  });
}

// Coupon
let couponPlace;
let couponCode1;
let couponCode2;
function getCoupon() {
  couponPlace = document.getElementById("coupon-place").value.toLowerCase();
  couponCode1 = document.getElementById("coupon-code1").innerText.toLowerCase();
  couponCode2 = document.getElementById("coupon-code2").innerText.toLowerCase();

  if (
    (couponPlace === couponCode1 || couponPlace === couponCode2) &&
    count1 === 4
  ) {
    document.getElementById("disable-button").disabled = false;
  } else {
    document.getElementById("disable-button").disabled = true;
  }
}
document.getElementById("coupon-place").addEventListener("input", getCoupon);
// Form Fillup

// function nextButtonHandler() {
//   const phoneNumber = document.getElementById("input-number").value;
//   const nextButton = document.getElementById("next-disabled");

//   if (phoneNumber.length === 0) {
//     nextButton.disabled = true;
//   } else {
//     nextButton.disabled = false;
//   }
// }
