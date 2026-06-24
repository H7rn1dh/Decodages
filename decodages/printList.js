export default function printList(vocabList, tableID) {
  let table = document.getElementById(tableID);
  // Make rows to fill in
  for (let i = 0; i < Object.entries(vocabList).length; i++) {
    let tableRow = table.insertRow(-1);// Appends row

    const numColumn = tableRow.insertCell(0);
    const motColumn = tableRow.insertCell(1);
    const definitionColumn = tableRow.insertCell(2);
    const natureColumn = tableRow.insertCell(3);
    //Adds the data to the columns
    numColumn.innerHTML = i + 1 ;
    motColumn.innerHTML = Object.keys(vocabList)[i];
    definitionColumn.innerHTML = Object.values(vocabList)[i][0];
    natureColumn.innerHTML = Object.values(vocabList)[i][1].toUpperCase();
  }
}