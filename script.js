document.addEventListener("DOMContentLoaded", function () {
  const buttons = [
    { id: "7", text: "7" },
    { id: "8", text: "8" },
    { id: "9", text: "9" },
    { id: "divide", text: "/" },
    { id: "4", text: "4" },
    { id: "5", text: "5" },
    { id: "6", text: "6" },
    { id: "multiply", text: "*" },
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "subtract", text: "-" },
    { id: "0", text: "0" },
    { id: "dot", text: "." },
    { id: "equal", text: "=" },
    { id: "add", text: "+" },
    { id: "clear", text: "C" },
    { id: "allClear", text: "AC" },
    { id: "modulus", text: "%" },
  ];

  const display = document.getElementById("display");
  const buttonsContainer = document.querySelector(".buttons");

  buttons.forEach((btn) => {
    const button = document.createElement("button");
    button.textContent = btn.text;
    button.id = btn.id;
    button.classList.add("button");
    button.addEventListener("click", () => handleButtonClick(btn.text));
    buttonsContainer.appendChild(button);
  });

  let expression = "";

  document.addEventListener("keydown", (event) => {
    if (isNumberKey(event.key) || event.key === ".") {
      handleButtonClick(event.key);
    } else if (["+", "-", "*", "/", "%", "Enter"].includes(event.key)) {
      handleButtonClick(event.key === "Enter" ? "=" : event.key);
    } else if (event.key === "Escape") {
      handleButtonClick("AC");
    } else if (event.key === "Backspace") {
      handleButtonClick("C");
    } else {
      alert("Only numbers are allowed");
    }
  });

  function isNumberKey(key) {
    return !isNaN(key) && key !== " ";
  }

  function handleButtonClick(char) {
    if (char === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
      display.textContent = expression;
      return;
    }
    if (char === "AC") {
      expression = "";
      display.textContent = "0";
      return;
    }
    if (char === "C") {
      expression = expression.slice(0, -1);
      display.textContent = expression || "0";
      return;
    }
    if (expression === "Error") {
      expression = "";
    }
    expression += char;
    display.textContent = expression;
  }
});
