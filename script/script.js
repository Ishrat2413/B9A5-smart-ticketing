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
      console.log(buttonInner);
      setInnerText("seat-booked", count1);
      setInnerText("per-seat", count2);
      setBackgroundColor(btn);
    }
  });
}
