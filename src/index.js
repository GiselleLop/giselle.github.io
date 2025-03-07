import analyzer from "./analyzer.js";

const inputText = document.querySelector('[name="user-input"]');
inputText.addEventListener("keyup", () => calculateMetrics(inputText.value));

const metrics = [
  "Words",
  "Characters",
  "Chars w/o space",
  "Numbers",
  "Sum of numbers",
  "Avg. word length",
];

const metricsContainer = document.querySelector(".metricsContainerPrincipal");
let metricsContent = "";

for (const metric of metrics) {
  metricsContent += `
  <div class="metric-container" id="${metric}">
    <h1>${metric} : 0</h1>
  </div>
`
}
metricsContainer.innerHTML = metricsContent;

function calculateMetrics(text) {
  const metricContainers = document.querySelectorAll(".metric-container");
  metricContainers.forEach((container) => {
    const metricId = container.id;
    switch (metricId) {
    case "Words":
      container.querySelector("h1").textContent =
          "Words: " + analyzer.getWordCount(text);
      break;
    case "Characters":
      container.querySelector("h1").textContent =
          "Characters: " + analyzer.getCharacterCount(text);
      break;
    case "Chars w/o space":
      container.querySelector("h1").textContent =
          "Chars w/o space: " +
          analyzer.getCharacterCountExcludingSpaces(text);
      break;
    case "Numbers":
      container.querySelector("h1").textContent =
          "Numbers: " + analyzer.getNumberCount(text);
      break;
    case "Sum of numbers":
      container.querySelector("h1").textContent =
          "Sum of numbers: " + analyzer.getNumberSum(text);
      break;
    case "Avg. word length":
      container.querySelector("h1").textContent =
          "Avg. word length: " + analyzer.getAverageWordLength(text);
      break;
    default:     
      break;
    }
  });
}
const buttonReset = document.getElementById("reset-button");
buttonReset.addEventListener("click", ()=> {
  inputText.value = '';
  calculateMetrics(inputText.value)
});