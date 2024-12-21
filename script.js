const billInput = document.querySelector(".bill-input");
const cashInput = document.querySelector(".cash-input");

const submitBtn = document.querySelector(".btn");

const twoThousand = document.querySelector(".twoK");
const fiveHundred = document.querySelector(".fiveH");
const hundred = document.querySelector(".hundred");
const twenty = document.querySelector(".twenty");
const ten = document.querySelector(".ten");
const five = document.querySelector(".five");
const one = document.querySelector(".one");
const alert = document.querySelector(".alert");
const billError = document.querySelector(".bill");
const cashError = document.querySelector(".cash");

let remaining = 0;

function validation() {
  if (billInput.value === "" && cashInput.value === "") {
    billError.textContent = "* Required";
    cashError.textContent = "* Required";
  }

  if (billInput.value === "") {
    billError.textContent = "* Required";
  }

  if (cashInput.value === "") {
    cashError.textContent = "* Required";
  }

  if (billInput.value && cashInput.value) {
    const billVal = Number(billInput.value);
    const cashVal = Number(cashInput.value);

    console.log(billVal);

    if (cashVal > billVal) {
      const change = cashVal - billVal;

      const twok = Math.floor(change / 2000);

      remaining = Math.floor(change % 2000);

      const fiveh = Math.floor(remaining / 500);

      remaining = Math.floor(remaining % 500);

      const hundredVal = Math.floor(remaining / 100);

      remaining = Math.floor(remaining % 100);

      const twentyVal = Math.floor(remaining / 20);

      remaining = Math.floor(remaining % 20);

      const tenVal = Math.floor(remaining / 10);

      remaining = Math.floor(remaining % 10);

      const fiveVal = Math.floor(remaining / 5);

      remaining = Math.floor(remaining % 5);

      const oneVal = Math.floor(remaining / 1);

      twoThousand.textContent = twok;
      fiveHundred.textContent = fiveh;
      hundred.textContent = hundredVal;
      twenty.textContent = twentyVal;
      ten.textContent = tenVal;
      five.textContent = fiveVal;
      one.textContent = oneVal;
    } else if (cashVal === billVal) {
      alert.textContent = "No change left";
      twoThousand.textContent = 0;
      fiveHundred.textContent = 0;
      hundred.textContent = 0;
      twenty.textContent = 0;
      ten.textContent = 0;
      five.textContent = 0;
      one.textContent = 0;
    } else {
      alert.textContent = "";
      const cashLeft = Math.abs(billVal - cashVal);
      alert.textContent = `You need to pay ${cashLeft}rs more`;
    }
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert.textContent = "";
  validation();

  billInput.value = "";
  cashInput.value = "";
});

const inputFields = document.querySelectorAll(".input-field input");

inputFields.forEach((each) => {
  each.addEventListener("focus", () => {
    alert.textContent = "";
    billError.textContent = "";
    cashError.textContent = "";
  });
});
