let formNode = document.querySelector("form");
let submitBtn = document.querySelector("#submit");
let inputBox = formNode.querySelectorAll(".input-box");
let passwd = document.querySelector("#passwd");
let Cpasswd = document.querySelector("#Cpasswd");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputBox.forEach((el) => {
    let input = el.querySelector("input");
    let label = el.querySelector("label");
    let error = el.querySelector(".error");
    if (input.value === "") {
      let errorTag = document.createElement("p");
      errorTag.classList.add("error");
      errorTag.innerText = label.innerText.replace(":", "") + "is required";
      if (!error) {
        el.append(errorTag);
      }
    } else {
      if (error) {
        error.remove();
      }
    }
  });
  if (passwd.value !== Cpasswd.value) {
    let errorTag1 = document.createElement("p");
    let errorTag2 = document.createElement("p");
    errorTag1.classList.add("error");
    errorTag1.innerText = "Password must be same";
    errorTag2.classList.add("error");
    errorTag2.innerText = "Password must be same";
    passwd.parentElement.append(errorTag1);
    Cpasswd.parentElement.append(errorTag2);
  }
});
