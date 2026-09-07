const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const bmiResult = document.getElementById("bmi-result");
  const categoryResult = document.getElementById("category");

  if (height <= 0 || isNaN(height)) {
    bmiResult.textContent = `Please Enter a valid height`;
  } else if (weight <= 0 || isNaN(weight)) {
    bmiResult.textContent = `Please Enter a valid weight  `;
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    let category;
    if (bmi < 18.6) {
      category = "Under Weight";
    } else if ( bmi <= 24.9) {
      category = "Normal Range";
    } else {
      category = "Over Weight";
    }
    bmiResult.textContent = bmi;

    categoryResult.textContent = category;
  }
});
