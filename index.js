const clearNumber = () => {
  document.getElementById("results-div").textContent = "";
};

const checkNumber = (str) => {
  const regex = /^1? ?(\(\d{3}\) ?|\d{3}[ -]?)\d{3}[ -]?\d{4}$/;
  return regex.test(str);
};
