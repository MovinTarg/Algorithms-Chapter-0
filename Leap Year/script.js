function leapYear (i) {
    if (i % 4 !== 0) {
        console.log("It's not a leap year.");
    } else if (i % 400 === 0) {
        console.log("It's a leap year!!!");
    } else if (i % 100 === 0) {
        console.log("It's not a leap year.");
    } else {
        console.log("It's a leap year!!!");
    } 
};
leapYear();

// $(document).ready(function() {
    
    
// });