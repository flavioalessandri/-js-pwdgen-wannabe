
//digitare il nome via prompt
var nome = prompt("scrivi il tuo nome", "Nome");
console.log(nome);

//digitare il cognome via prompt
var cognome = prompt("scrivi il tuo cognome", "Cognome");
console.log(cognome);

//digitare il colore preferito via prompt
var colorePreferito = prompt("scrivi il tuo colore preferito", "Colore");
console.log(colorePreferito);

//creazione password
var password = nome + cognome + colorePreferito + "19";
console.log(password);

alert("PASSWORD: " + password);

//restituzione del valore password
document.getElementById("my_password_text").innerHTML = "Copia e conserva!" ;
document.getElementById("my_password").innerHTML =  password;
