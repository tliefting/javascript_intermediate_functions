// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:


//ANTWOORD: getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl //
function getEmailDomain(str) {
    return str.split('@')[1];
}
console.log(getEmailDomain("n.eeken@novi-education.nl"));


//ANTWOORD: getEmailDomain("t.mellink@novi.nl") geeft novi.nl //
function getEmailDomain(str) {
    return str.split('@')[1];
}
console.log(getEmailDomain("t.mellink@novi.nl"));


//ANTWOORD: getEmailDomain("a.wiersma@outlook.com") geeft outlook.com //
function getEmailDomain(str) {
    return str.split('@')[1];
}
//Console log voor de tester :) //
console.log(getEmailDomain("a.wiersma@outlook.com"));



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht.
// De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)

function typeOfEmail(str) {

    //ANTWOORD: typeOfEmail("n.eeken@novi-education.nl") geeft "Student": //
    if (str.endsWith("novi-education.nl"))
        return ("Student");

    //ANTWOORD: typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker": //
    else if (str.endsWith("novi.nl"))
        return ("Medewerker")

        //ANTWOORD: typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen! //
        //ANTWOORD: typeOfEmail("a.wiersma@outlook.com") geeft "Extern" //
    else
        return ("extern")
}
    //Console log voor de tester; voer het email adres in tussen de aanhalingsteken na str: :) //
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is.
// De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:

function checkEmailValidity(str) {

//ANTWOORD: * Er géén . in voorkomt als allerlaatste karakter  //
    if (str.endsWith("."))
        return false;
    //ANTWOORD: * Er géén , in voorkomt //
    if (str.includes(","))
        return false;
    //ANTWOORD: * Er een @ in voorkomt //
    if (str.includes("@"))
        return true;

}
//Console log voor de tester; voer het email adres in tussen de aanhalingsteken na str: :) //
console.log(checkEmailValidity("novi.nlaapjesk@outlook.com"));