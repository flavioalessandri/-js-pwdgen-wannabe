
//digitare il nome via prompt
var nome = prompt("scrivi il tuo nome");
console.log(nome);

//digitare il cognome via prompt
var cognome = prompt("scrivi il tuo cognome");
console.log(cognome);

//digitare il colore preferito via prompt
var colorePreferito = prompt("scrivi il tuo colore preferito");
console.log(colorePreferito);

//creazione password
var password = nome + cognome + colorePreferito + "19";
console.log(password);

alert("Quella di seguito sarà la tua password" , password);

//restituzione del valore password
document.getElementById("my_password_text").innerHTML = "Copia e conserva!" ;
document.getElementById("my_password").innerHTML =  password;
