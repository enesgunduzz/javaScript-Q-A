// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

 let notes = [45,12,68,99,34,42,40,85,7];
let sum = notes.reduce(function(a,b){
    return a+b;
});

let avg= sum/notes.length
console.log(avg.toFixed(2));

