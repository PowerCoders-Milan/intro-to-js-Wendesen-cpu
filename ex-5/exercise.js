// Example
var input = window.prompt("Insert the word please!");
var num = input.length;
window.alert(`The number of characters in thisword is ${num}`);

var one = window.prompt("Now We are going to compare two words. So give me the first word");
var two = window.prompt("And give me the second");

if(one.length > two.length){
    window.alert(`The word ${one} has many characters than ${two}`)
}
else if(one.length < two.length){
    window.alert(`The word ${two} has many characters than ${one}`)
}

else {
    window.alert("The two words have exactly the same number of characters")
}