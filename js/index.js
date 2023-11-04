var updateClickCount = (function() {
    var counter = 0;
    return {
        increment: function() {
            counter++;
            document.getElementById("Count").innerHTML = counter;
        },
        reset: function() {
            counter = 0;
            document.getElementById("Count").innerHTML = counter;
        }
    };
})();