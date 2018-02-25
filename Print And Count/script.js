var count = 0;

for (var i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        count = count + 1;
        console.log(i);
    };
};

console.log("There were: " + count + " logs.")

// $(document).ready(function() {
    
    
// });