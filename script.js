const age = 23;
if (age > 18) {
    greeting = "Welkom! We wensen je een fijne avond!"
}
if (age < 18) {
    greeting = "Helaas kunnen we je niet binnenlaten. We wensen je toch een fijne avond!"
}
console.log(greeting)

const isFemale = true;
if (isFemale == true) {
    greeting = "welkom op de Ladiesnight!"
}
if (isFemale == false) {
    greeting = "Vanavond zijn alleen dames welkom!"
}
console.log(greeting)

const driverStatus = 'bob';
if (driverStatus == 'bob') {
    greeting = "Rijd voorzichtig & wel thuis!"
}
else { 
    greeting = "Het is niet verantwoord dat u gaat rijden."
}
console.log(greeting)

if (age >= 18 && age <= 25) {
    greeting = "Je krijgt 50% korting!"
}
else {
    greeting = "helaas betaal je het volle pond"
}
console.log(greeting)

const firstname = 'Leo';
if (firstname == 'Bram' || firstname == 'Sarah') {
    greeting = "Wij bestaan 50 jaar!! Om dat te vieren krijg jij een gratis biertje van ons!"
}
else {
    greeting = "Wat gezellig dat je ons 50-jarig jubileum met ons meeviert!"
}
console.log(greeting)

const totalAmount = 23;
if (totalAmount >= 25 && totalAmount < 50) {
    greeting = "Je krijgt een gratis portie (vega)bitterballen van ons!"
}
if (totalAmount >= 50 && totalAmount < 100) {
    greeting = "Je krijgt een gratis portie nachos!"
}
if (totalAmount >= 100) {
    greeting = "Je krijgt een gratis flesje bubbels van ons!"
}
else {
    greeting = "Bedankt voor je bestelling!"
}
console.log(greeting)