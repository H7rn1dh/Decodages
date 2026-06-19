export default function printList(vocabList, tableID) {
  let table = document.getElementById(tableID);
  for (let i = 0; i < Object.entries(vocabList).length; i++) {
    let tableRow = table.insertRow(-1);

    const motColumn = tableRow.insertCell(0);
    const definitionColumn = tableRow.insertCell(1);
    const natureColumn = tableRow.insertCell(2);

    motColumn.innerHTML = Object.keys(vocabList)[i];
    definitionColumn.innerHTML = Object.values(vocabList)[i][0];
    natureColumn.innerHTML = Object.values(vocabList)[i][1].toUpperCase();
  }
}