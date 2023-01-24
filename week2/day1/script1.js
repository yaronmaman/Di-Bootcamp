const favoritefood="chocolate";
const favoritemeal="dinner";
console.log('i eat'+favoritefood+'at every'+ favoritemeal)



const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;


const globalmyWatchedSeriesSentence='I watched 3 series : black mirror, money heist, and the big bang theory'

console.log(globalmyWatchedSeriesSentence)

myWatchedSeries[2] = 'friends';
console.log(myWatchedSeries);

myWatchedSeries.push('prisonbake');
console.log(myWatchedSeries);

myWatchedSeries.splice(0,0, 'outherbanks');
console.log(myWatchedSeries);

myWatchedSeries.pop('black mirror');
console.log(myWatchedSeries);

console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);



const temperatureCelcius = 32;
const temperatureFarenheint = temperatureCelcius/5*9+32
console.log(temperatureFarenheint)
console.log(temperatureCelcius+' C is F '+temperatureFarenheint)

let c;
let a = 34;
let b = 21;
console.log(a+b)
a = 2;
console.log(a+b) 
console.log(c)
console.log(3 + 4 + '5');
//sa fait 75 car c 3+4 qui fait 7 et puis comme le 5 c consider comme un mot le 5 on prend le 5 tel comme qui lest






const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
//pour le supprimer
fruits .shift('Banana');
console.log(fruits)
//pour mettre par ordre alphabetique
fruits .sort();
//pour ajouter 
fruits .push ('kiwi');
//pour le supprimer le 0 c de ou tu veux commencer et le 1 cconbien d'element de ou tu commence tu veux suprimer
fruits .splice(0,1)
//pour inverse la liste
fruits .reverse();
console.log(fruits)

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
moreFruits [1]
moreFruits[1][1]
moreFruits[1][1][0]
console.log(morefruits); 
const orange=moreFruits[1][1][0]




