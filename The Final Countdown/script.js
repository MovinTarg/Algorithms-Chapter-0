
function getArr (param1, param2, param3, param4) {
    var i = param2;
    while (i < param3) {

        if ((i % param1 == 0) && (i % param4 !== 0)) {
            console.log(i);
        };
        i = i + 1;
    };
};
getArr(3, 5, 57, 9);

// $(document).ready(function() {
    
    
// });