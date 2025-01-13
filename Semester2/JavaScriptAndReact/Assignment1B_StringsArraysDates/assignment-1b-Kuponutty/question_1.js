let string = "Cracker"
let reversed = "";
let stringArray = Array.from(string);

//taking the last and first characters of the string
let lastChar = stringArray[stringArray.length - 1].toLowerCase();
let firstChar = stringArray[0].toLowerCase();

//if first and last characters are the same
if (firstChar === lastChar){
//starting at the end of the array counting back
    for (let i = stringArray.length - 1; i >= 0; i-- ){
//adding those letters to an empty string variable as a new string
        reversed += stringArray[i];
    }
    console.log(reversed);
}
else {
//removing the first and last characters
    string = string.slice(1, -1);
    console.log(string);
}