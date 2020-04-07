import "./styles.css";

function myFunction() {
  var d = new Date();
  var n = d.getHours();
  document.getElementById("demo").innerHTML = n;
}

function getMessage(name, hour) {
  // change after that
  let dayTime = "Bom dia";



  // change before that
  return dayTime + ", " + name + "!";
}

document.getElementById("app").innerHTML = `
  <h1>${getMessage("Tony", 0)}</h1>
  <h1>${getMessage("Tony", 8)}</h1>
  <h1>${getMessage("Tony", 13)}</h1>
  <h1>${getMessage("Tony", 20)}</h1>
`;

// Bom dia, Tony!

const hour = 8;

// or == ||
// and == &&

hour >= 0 || hour < 12; // Bom dia
hour >= 12 || hour < 18; // Boa Tarde
hour >= 18 || hour < 24; // Boa Noite
