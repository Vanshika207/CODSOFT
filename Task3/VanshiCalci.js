const display = document.getElementById("display");
const expressionDiv = document.getElementById("expression");
const keys = document.querySelectorAll(".btn");

let expression = "";

keys.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "=") {
      try {
        let exp = expression.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(exp);
        expressionDiv.innerText = expression;
        display.innerText = result;
        expression = result.toString();
      } catch {
        display.innerText = "Error";
      }
    } else if (val === "Clear") {
      expression = "";
      display.innerText = "0";
      expressionDiv.innerText = "";
    } else {
      expression += val;
      display.innerText = expression;
    }
  });
});
