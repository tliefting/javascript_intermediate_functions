
// ---- Uitkomsten:
// Opdr 1a cumLaude(grades) geeft 6 (log commando op regel 40)
// Oprdr 1b test: cumLaude([6, 4, 5]) geeft 0 (log commando op regel 40)
// Opdr 1b test: cumLaude([8, 9, 4, 6, 10]) geeft 3 (log commando op regel 40)
// Opdr 2b averageGrade([6, 4, 5]) geeft 5 (log commando op regel 50)
// Opdr 2b averageGrade([8, 9, 4, 6, 10]) geeft 7,40 (log commando op regel 50)
// Oprdr 3 highestGrade(grades) geeft 9 (log commando op regel 50)
// Oprdr 3([6, 4, 5]) geeft 6 (log commando op regel 94)
// Oprdr 3 ([8, 9, 4, 6, 10]) geeft 10 (log commando op regel 94)

// ter controle kunnen de cijfers in de const hieronder worden geplaatst.
const grades = [6, 4, 5];

    //////Opdracht 1//////
{
    //Teller cumlaude gedefineerd en op 0 gezet:
    let cumLaude = 0;
    //Methode toegevoegd die elke waarde in de array naloopt
    for (let i = 0; i < grades.length; i++) {
        //voorwaarde gesteld dat de teller alleen bij een 8 of hoger optelt
        if (grades[i] >= 8) {
            cumLaude++;
        }
    }
    console.log(cumLaude, "studenten zijn Cum Laude afgestudeerd")

    //////Opdracht 2//////

    //teller gedefineerd en op 0 gezet
    let numberOfGrades = 0;
    //Methode toegevoegd die elke waarde in de array naloopt
    for (let j = 0; j < grades.length; j++) {
        //vastgesteld dat elk plekje in de array wordt opgeteld
        numberOfGrades += grades[j];
    }
    //Gemiddelde gedefineerd door de formule: aantal waardes in array / uitkomst van de waardes opgeteld
    let averageGrade = numberOfGrades / grades.length;
    //2c: de uitkomst laten afkappen op twee decimalen door de .tofixed code toe te voegen
    console.log("Het gemiddelde eindcijfer is", averageGrade.toFixed(2))
}

    //////Opdracht 3//////

//Teller highestgrade gedefineerd en op 0 gezet
let highestGrade = 0;

//Methode toegevoegd die elke waarde in de array naloopt
for (let k=0; k<=highestGrade;k++){
    //voorwaarde toegevoegd dat de waarde alleen veranderd mag worden als het een hoger cijfer is dan waar het mee wordt vergeleken
    if (grades[k]>highestGrade) {
        highestGrade = grades[k];
    }
}

console.log("Het hoogst behaalde cijfer is ",highestGrade);



//////Opdrachten//////


// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren
// (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen.
// Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.
/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// ---- Verwachte uitkomst: 6
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
