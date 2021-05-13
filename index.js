console.log("♌️");

const handleSubmit = (e) => {
  e.pre;
  console.log("submitted");
};

const form = document.querySelector("[js-form]");
const emailInput = document.querySelector("[js-input]");

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
    const inputVal = emailInput.value;
    console.log(inputVal);
  });
});
