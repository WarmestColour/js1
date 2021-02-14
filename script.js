/*
let age = 31;
let name = 'Greta';
let hobby = 'žmonių ir reiškinių stebėjimas';
let error = 'ant let visur errorai ERROR: Parsing error: Unexpected token age/name/hobby ir pan.';

console.log(`Mano vardas ${name}, man ${age}. Mano hobis yra ${hobby}`);
*/

var age = 31;
var name = 'Greta';
var hobby = 'žmonių ir reiškinių stebėjimas';

console.log("Mano vardas " + name + ", man " + age + ". Mano hobis yra " + hobby);

// ERROR: Unexpected console statement. [no-console] -- KODĖL?

var metai = 1990;
var ateityje = 2030;

console.log(ateityje + " man bus " + (ateityje - metai) + " metų");

var skersmuo = 14;
var spindulys = skersmuo / 2;
var plotas = Math.PI * Math.pow(spindulys, 2);

console.log("Apskritimo, kurio skersmuo yra " + skersmuo + " cm, plotas yra " + plotas + " cm2.");

var celsius = '23°C';
var fahrenheit = parseInt(celsius) * 9 / 5 + 32;

console.log(skersmuo + " °C yra " + fahrenheit + " °F");

// Neišeina man išsaugojus kintamąjį su simboliais. Geriau be jų.

var sakinys = 'Mes kalbame mažai, jeigu nekalbame apie save.';

console.log(sakinys.length);
console.log(sakinys.toUpperCase());
console.log(sakinys.replace('apie save', ''));

var sakinysArr = sakinys.split(' ');
console.log(sakinysArr);

console.log(sakinys.indexOf('mažai'));

console.log(sakinys.replaceAll('kalbame', 'šnekame'));

let labasRytas = 'laBa8s rYta56s, lIEtuva';
let newRytas = labasRytas.replace(/[0-9]/g, '');
let newRytas2 = newRytas.toLocaleLowerCase();
let newRytas3 = newRytas2.charAt(0).toUpperCase() + newRytas2.slice(1);
let newRytas4 = newRytas3.slice(0, 13) + newRytas3.charAt(13).toUpperCase() + newRytas3.slice(14);
console.log(newRytas4);

let purplePills = [
    'Blue',
    'Hills',
    'Golden',
    'Seals',
    'Got',
    'Bizzare',
    'Actin',
    'Ill',
    'For',
    'Real'
];

purplePills.pop();
console.log(purplePills);

purplePills.shift();
console.log(purplePills);

purplePills.splice(5, 1, 'new');
console.log(purplePills);

let yellowHills = [
    'Hollow bills',
    'Empty grills',
    'Second array',
    'Being real'
]

let newArray = purplePills.concat(yellowHills);
console.log(newArray);

let babySeals = newArray.toString();
console.log(babySeals);

let mokinys = [{
        vardas: 'Martynas',
        pavarde: 'Lubys',
        amzius: 17,
        vidurkis: 4.5,
        stipendija: false
},
{
        vardas: 'Alina',
        pavarde: 'Alijeva',
        amzius: 16,
        vidurkis: 9,
        stipendija: true
},
{
        vardas: 'Kazimieras',
        pavarde: 'Bakštys',
        amzius: 17,
        vidurkis: 9.3,
        stipendija: true
},
{
        vardas: 'Algimantas',
        pavarde: 'Peraitis',
        amzius: 16,
        vidurkis: 6.5,
        stipendija: true
},
{
        vardas: 'Kotryna',
        pavarde: 'Petraitytė',
        amzius: 16,
        vidurkis: 4,
        stipendija: false
}
]

console.log(mokinys);

console.log(mokinys[1].amzius);
console.log(mokinys[3].vidurkis);
console.log(mokinys[0]);
