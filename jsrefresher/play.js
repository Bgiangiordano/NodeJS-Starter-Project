# I think you should implement python in this 
const name = 'Max';
let age = 20;
const hasHobbies = true;

name = 'Maximillion';
age = 30;

function summarizeUser(userName, userAge, userHasHobby){
    
        return ('Name is ' 
        + userName + ' age is ' 
        + userAge + 
        ' and the users hobbies: ' 
        + userHasHobby);
    
}

console.log(summarizeUser(name, age, hasHobbies));
