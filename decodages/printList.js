export default function printList(vocabList, tableID) {
  let table = document.getElementById(tableID);
  // Make rows to fill in
  for (let i = 0; i < Object.entries(vocabList).length; i++) {
    let tableRow = table.insertRow(-1); // Appends row

    const numColumn = tableRow.insertCell(0);
    const motColumn = tableRow.insertCell(1);
    const definitionColumn = tableRow.insertCell(2);
    const natureColumn = tableRow.insertCell(3);
    //Adds the data to the columns
    numColumn.innerHTML = i + 1;
    motColumn.innerHTML = Object.keys(vocabList)[i];
    definitionColumn.innerHTML = Object.values(vocabList)[i][0];
    natureColumn.innerHTML = Object.values(vocabList)[i][1].toUpperCase();
  }
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let qPicked = [];

// Dropdown options
const dropdownOptions = ["", "ADJ", "V", "NM", "NF", "ADV", "EXPR"];
const QUESTION_NUM = 15;

export function printQuestion(vocab) {
  // Creates the form and the grid container
  const myForm = document.createElement("form");
  const formGrid = document.createElement("div");

  // Adds the grid class for CSS styling
  myForm.id = "my-form";
  formGrid.classList.add("form-grid");
  formGrid.id = "form-grid";

  // Puts the grid inside the form
  myForm.append(formGrid);

  // Generates the questions
  for (let i = 0; i < QUESTION_NUM; i++) {
    // Picks a random question that has not already been chosen
    let randomKey = Math.floor(Math.random() * Object.entries(vocab).length);

    while (qPicked.includes(randomKey)) {
      randomKey = Math.floor(Math.random() * Object.entries(vocab).length);
    }

    qPicked.push(randomKey);

    let question = Object.values(vocab)[randomKey][0];
    //console.log(`${i + 1} : ${question}`);

    // Creates a container for each question
    const questionDiv = document.createElement("div");

    // Creates form elements
    const mot = document.createElement("input");
    const definition = document.createElement("label");
    const lineBrk = document.createElement("br");
    const dropdown = document.createElement("select");
    dropdown.id = `drop-down-${i}`;

    // Adds options to dropdown
    for (let i = 0; i < dropdownOptions.length; i++) {
      const option = document.createElement("option");
      option.value = dropdownOptions[i];
      option.innerText = dropdownOptions[i];

      dropdown.append(option);
    }

    // Sets input properties
    mot.id = "input-mot";
    mot.type = "text";

    // Sets label properties
    definition.htmlFor = "input-mot";
    definition.innerHTML = ` ${i + 1} : ${Object.values(vocab)[randomKey][0]} `;

    // Adds CSS classes
    definition.classList.add("label");
    mot.classList.add("input");
    mot.id = `answer-${i}`;

    // Adds elements to the question container
    questionDiv.append(definition, lineBrk, mot, dropdown);

    // Adds the question container to the grid
    formGrid.append(questionDiv);
  }

  // Creates submit button
  const submit = document.createElement("input");

  submit.type = "submit";
  submit.value = "Submit";

  // Adds CSS class to button
  submit.classList.add("submit-button");

  // Adds button directly to form (NOT the grid)
  myForm.append(submit);

  // Adds the completed form to the page
  document.getElementById("form-div").append(myForm);
}

export function checkAnswers(vocab) {
  let score = 0;
  let reviseResult = [];

  for (let i = 0; i < QUESTION_NUM; i++) {
    const answerBox = document.getElementById(`answer-${i}`);
    const userAnswer = answerBox.value;

    const index = qPicked[i];
    const motAnswer = Object.keys(vocab)[index].toLowerCase();
    const natureDropdown = document.getElementById(`drop-down-${i}`);
    const userNature = natureDropdown.value;
    const natureAnswer = Object.values(vocab)[index][1];

    //console.log(Object.keys(vocab)[index].toLowerCase()); //answer prints
    if (
      userAnswer.toLowerCase() === motAnswer &&
      userNature === natureAnswer.toUpperCase()
    ) {
      score += 2;
      reviseResult.push("Correct!");
    } else if (
      userAnswer.toLowerCase() === motAnswer ||
      userNature === natureAnswer.toUpperCase()
    ) {
      score++;
      reviseResult.push(index);
    } else {
      reviseResult.push(index);
    }

    const p = document.getElementById("correct-answers");
    if (i === 0) {
      p.append("Révisez :");
      p.append(document.createElement("br"));
      p.append(document.createElement("br"));
    }
    if (reviseResult[i] === "Correct!") {
      p.append(`${i+1} : ${reviseResult[i]}`);
      p.append(document.createElement("br"));
    } else {
      p.append(
        `${i + 1}: ${Object.keys(vocab)[reviseResult[i]]}, ${Object.values(vocab)[reviseResult[i]][1]}`,
      );
      p.append(document.createElement("br"));
    }

    /*if (userNature === natureAnswer.toUpperCase()) {
      score++;
    }*/

    console.log(`User : ${userAnswer} : ${userNature}`);
  }

  /*for (let i = 0; i < reviseResult.length; i++) {
    const p = document.getElementById("correct-answers");
    if (i === 0) {
      p.append("Révisez :");
      p.append(document.createElement("br"));
      p.append(document.createElement("br"));
    }
    p.append(
      `${i + 1}: ${Object.keys(vocab)[reviseResult[i]]}, ${Object.values(vocab)[reviseResult[i]][1]}`,
    );
    p.append(document.createElement("br"));
  }*/

  const result = document.getElementById("popup");
  result.showModal();

  const closeButton = document.getElementById("close");
  closeButton.addEventListener("click", () => {
    popup.close();
  });

  const text = document.getElementById("dialog-para");
  text.innerHTML = `Vous avez reçu : ${((score / 30) * 100).toFixed(2)}% (${score}/30)`;

  const inst = document.getElementById("instructions");
  inst.innerHTML = "Pour réessayer cliquer fermer, puis actualiser la page  ";

  console.log(`Score : ${score}`);
}
