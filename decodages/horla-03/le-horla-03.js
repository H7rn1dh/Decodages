import printList from "../printList.js";
import { vocab } from "./le-horla-03-vocab.js";
import { delay } from "../printList.js";

printList(vocab, "vocab-table");

const feedbackBtn = document.getElementById("feedback");

feedbackBtn.onclick = async function () {
  const myForm = document.getElementById("form");
  const visibilityStatus = myForm.style.visibility;
  if (visibilityStatus === "visible") {
    myForm.style.transformOrigin = "bottom";
    myForm.style.transform = "scaleY(0)";
    myForm.style.transition = "transform 0.25s ease";
    await delay(300);
    myForm.style.visibility = "hidden"; //try getting rid of this + the hidden css style in feedback.css
  } else {
    myForm.style.visibility = "visible"; //try getting rid of this
    myForm.style.transformOrigin = "bottom";
    myForm.style.transform = "scaleY(1)";
    myForm.style.transition = "transform 0.25s ease";
  }
};

const testBtn = document.getElementById("test-but");

testBtn.onclick = function () {
  const fileName = window.location.pathname;
  localStorage.setItem("file", fileName);
  console.log(fileName);
};
