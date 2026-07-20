import { printQuestion } from "./decodages/printList.js";
import { checkAnswers } from "./decodages/printList.js";

let fileName = localStorage.getItem("file");
const jsFileName = fileName.replace(".html", "-vocab.js");
console.log(jsFileName);

async function run(name) {
  const module = await import(name);
  const vocab = module.vocab;
  printQuestion(vocab);

  const myForm = document.getElementById("my-form");

  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    checkAnswers(vocab);
  });

  window.addEventListener("beforeunload", (event) => {
    //console.log("Trying to leave");
    event.preventDefault();
    event.returnValue = "";
  });
}

run(jsFileName);
