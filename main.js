var cat = "Fluffy";
console.log("I'm inside main.js", cat);
console.log("fixed the emergency");

var catzContainer = document.getElementById('catz');

console.log(catzContainer)
catzContainer.innerHTML = '<h1>' + cat + '</h1>';