function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / height ** 2);
}

var bmi = bmiCalculator(65, 1.8);
if (bmi > 25) {
  console.log("you need to workout");
}
if (bmi >= 20 && bmi <= 25) {
  console.log("Healthy weight");
} else {
  console.log("Take Nutritional food");
}
