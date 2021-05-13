console.log("♌️");

const handleSubmit = (e) => {
  e.pre;
  console.log("submitted");
};

const form = document.querySelector("[js-form]");
const emailInput = document.querySelector("[js-input]");

const msgSuccess = document.querySelector("[js-form-success]");
const msgError = document.querySelector("[js-form-error]");

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");

    const inputVal = emailInput.value;

    const formData = {
      email: inputVal,
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log("Form successfully submitted");
        msgSuccess.classList.remove("hide");
        msgError.classList.add("hide");
      })
      .catch((error) => {
        console.log(error);
        msgSuccess.classList.add("hide");
        msgError.classList.remove("hide");
      });
  });
});
