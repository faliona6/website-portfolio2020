
// $(window).on("load", function() {
//     $(".loading-screen").fadeOut("slow");
// })

// The basic check
function done() {
    if(document.readyState === 'complete') {
        document.getElementsByClassName("loading-screen")[0].classList.add("fade");
        console.log("helee");
    }
}

// Polling for the sake of my intern tests
var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        done();
    }    
}, 100);