
// $(window).on("load", function() {
//     $(".loading-screen").fadeOut("slow");
// })

// The basic check
function done() {
    if(document.readyState === 'complete') {
        setTimeout('', 1500);
        var loadingScreen = document.getElementsByClassName("loading-screen-active")[0];
        if (loadingScreen !== null) {
            loadingScreen.classList.add("fade");
        }
    }
}


// Polling for the sake of my intern tests
var interval = setInterval(function() {
    setTimeout('', 1000);
    console.log(document.readyState);
    if(document.readyState === 'complete') {
        clearInterval(interval);
        done();
    }
    else {
        document.getElementsByClassName("loading-screen-wrapper")[0].classList.add("loading-screen-active");
    }    
}, 100);
