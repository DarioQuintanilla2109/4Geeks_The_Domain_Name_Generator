let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let com = ".com";
let domain = " ";

/////////// OUR CONCAT METHOD DOES NOT OVERRIDE ITS PREVIOUS VALUE//////////
//////////  instead,  returns a new string containing the text of the joined strings////////


//function that will be used to return either 0, 1 when we pass in 2 as the argument
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//link above math.random explanation
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//outter for loop to determine number of domain names generated
for (let i= 0; i < 5; i++) {
    //randomly choosing one value from pronoun array
    for (let p = 0; p < pronoun.length - 1; p++) {
        domain = domain.concat(pronoun[getRandomInt(2)]);

    }
    //randomly choosing one value from adjective array
    for (let a = 0; a < adj.length - 1; a++) {
        domain = domain.concat(adj[getRandomInt(2)]);
    }
    //randomly choosing one value from noun array
    for (let n = 0; n < noun.length - 1; n++) {
        domain = domain.concat(noun[getRandomInt(2) ]);
        
    }
    //concat .com  
    domain = domain.concat(com);
    //concat a space in between each domain name 
    domain = domain.concat(' ');
    
}
//log final string
console.log(domain);