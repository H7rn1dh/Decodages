const vocabList = {
  'Moquées': ["Rire méchamment de quelqu’un d’autre", "v"],
  'Sage': ["Personne très intelligente et très calme", "nm"],
  'Querelles': ["Disputes bruyantes entre plusieurs personnes fâchées", "nf"],
  'Coupable': ["Personne qui fait une faute", "adj/n"],
  'Moelles': ["Tissu mou à l'intérieur des os", "nf"],
  'Éperdu': ["Qui est complètement perdu ou paniqué", "adj"],
  'Imperceptible': ["Qu’on ne peut presque pas voir", "adj"],
  'Lucides': ["Qui comprennent très clairement les choses", "adj"],
  'Clairvoyants': ["Qui voient et comprennent très bien", "adj"],
  "S'éparpillait": ["Se séparait dans toutes les directions", "v"],
  'Crevasse': ["Ouverture profonde dans la terre dure", "nf"],
  'Fantasmagories': ["Illusions ou visions qui font peur", "nf"],
  'Logis': ["Lieu où une personne habite confortablement", "nm"],
  'Épiant': ["Regardant quelqu’un en cachette et secrètement", "v"],
  'Mous': ["Qui ne sont pas très durs", "adj"],
  'Rôdeur': ["Personne qui se promène pour voler", "nm"],
  'Occultes': ["Choses mystérieuses qui sont très cachées", "adj"],
  'Tiède': ["Ni chaud ni froid", "adj"],
  'Scintillements': ["Petites lumières qui brillent et tremblent", "nm"],
  'Jadis': ["D'un temps très très ancien", "adv"],
  'Feuilletée': ["Pâte de cuisine avec plusieurs couches", "adj"],
  'Éventrer': ["Ouvrir le ventre avec beaucoup de force", "v"],
  'Dompteur': ["Personne qui dresse les animaux sauvages", "nm"],
  'Malfaiteur': ["Personne qui fait de mauvaises actions", "nm"],
  'Quelconque': ["Qui est très ordinaire et normal", "adj"],
  'Lâche': ["Qui n’a pas beaucoup de courage", "adj/n"],
  'Cachot': ["Prison très sombre et très fermée", "nm"],
  'Affolé': ["Qui a très peur et panique", "adj"],
};

let table = document.getElementById("vocabTable");

for(let i = 0; i < Object.entries(vocabList).length; i++){
  let tableRow = table.insertRow(-1);

  const motColumn = tableRow.insertCell(0);
  const definitionColumn = tableRow.insertCell(1);
  const natureColumn = tableRow.insertCell(2);

  motColumn.innerHTML =  Object.keys(vocabList)[i];
  definitionColumn.innerHTML = Object.values(vocabList)[i][0];
  natureColumn.innerHTML = Object.values(vocabList)[i][1];
}