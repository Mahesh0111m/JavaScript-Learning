var name = "mahESH";
var first_letter = name.slice(0,1);

var restofletters = name.slice(1,name.length);

var new_restofletters = restofletters.toLowerCase();

var new_first = first_letter.toUpperCase();

var Capitalised_letter = new_first + new_restofletters;

console.log(Capitalised_letter);