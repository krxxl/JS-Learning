let str = 'В лесу была хорошая погода. Кукушка куковала.'

let word = prompt('word','');
console.log(str.indexOf(word));
let ind = str.indexOf(word)
console.log(str.substr(0, ind));
