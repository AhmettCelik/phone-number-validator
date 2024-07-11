const clearNumber = (result, input) => {
  console.log("clicked");
  result.textContent = "";
  input.value = "";
};

const checkNumber = (str) => {
  const regex = /^1? ?(\(\d{3}\) ?|\d{3}[ -]?)\d{3}[ -]?\d{4}$/;
  return regex.test(str);
};

const printResult = (condition, input, result) => {
  return condition
    ? (result.textContent = "Valid US number: " + input)
    : (result.textContent = "Invalid US number: " + input);
};

window.onload = () => {
  const result = document.getElementById("results-div");
  const input = document.getElementById("user-input");

  document.getElementById("check-button").addEventListener("click", () => {
    if (input.value === "") {
      result.textContent = "Please provide a phone number";
      return;
    }
    printResult(checkNumber(input.value), input.value, result);
  });

  document.getElementById("clear-button").addEventListener("click", () => {
    clearNumber(result, input);
  });
};
