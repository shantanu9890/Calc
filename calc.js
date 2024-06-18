const buttons = document.getElementsByClassName("button");
const inputField = document.getElementById("numinp");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    let inputText = "";
    if (inputField.value == "Invalid Operation") {
      inputField.value = "";
    }
    switch (event.target.innerHTML) {
      case "C":
        break;
      case "=":
        try {
          inputText = eval(inputField.value);
        } catch (e) {
          inputText = "Invalid";
        }
        break;
      case "←":
        inputText = inputField.value.slice(0, inputField.value.length - 1);
        break;
      default:
        inputText = `${inputField.value}${event.target.innerHTML}`;
    }

    inputField.value = inputText;
  });
}
