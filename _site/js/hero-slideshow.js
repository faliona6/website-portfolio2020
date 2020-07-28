// Slideshow state variables
var curSlideIndex = 1; // start on 1, 0 is on the left
var numOfSlides = 4;

// Start functions for loading images into html
function StartLoadImages()
{
    var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
    for (var i = 0; i <= numOfSlides; i++) {
        var imgSlide = document.createElement("img");
        if (i == 0) {
            imgSlide.classList.add("slide-img-left");
            imgSlide.classList.add("slide-img-sides");
            SetOnClick(imgSlide, 1);
        }
        else if (i == 1) {
            imgSlide.classList.add("slide-img-front");
        }
        else if (i == 2)
        {
            imgSlide.classList.add("slide-img-right");
            imgSlide.classList.add("slide-img-sides");
            SetOnClick(imgSlide, -1);
        }
        else {
            imgSlide.classList.add("slide-hidden");
        }
        
        imgSlide.src = "assets/images/hero/slideshow/slide_" + i + ".png";
        imgSlide.id = "slide_" + i;
        slideshowContainer.appendChild(imgSlide);
    }
    InitializeDotNav();
}

function InitializeDotNav()
{
    var navContainer = document.getElementsByClassName("dotnav-container")[0];
    console.log(navContainer);
    for( var i = 0; i < numOfSlides; i++)
    {
        var dot = document.createElement("img");
        dot.id = "dotnav_" + i;
        dot.classList.add("dotnav");
        if (i == 0) {
            dot.src = "assets/images/hero/icons/dotFull.svg";
        }
        else {
            dot.src = "assets/images/hero/icons/dotEmtpy.svg";
        }
        navContainer.appendChild(dot);
    }
}

// For nav buttons
function OnClickLeft()
{
    this.direction = -1;
    OnClick();
}

function OnClickRight()
{
    this.direction = 1;
    OnClick();
}


// if -1, will go left. if 1, will go right
function SetOnClick(imgSlide, direction)
{
    imgSlide.direction = direction;
    imgSlide.addEventListener("click", OnClick, false);
}

function OnClick()
{
    var direction = this.direction;
    var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
    RemoveAllEventListenersFromParent(slideshowContainer);
    console.log("going in this direction!:" + direction);

    // switch the slide classes
    // getting the previous and next slide indices
    var prevSlideIndex = curSlideIndex - 1 < 0 ? numOfSlides - 1 : curSlideIndex - 1;
    var nextSlideIndex = (curSlideIndex + 1) % numOfSlides;

    var prevPrevSlideIndex = prevSlideIndex - 1 < 0 ? numOfSlides - 1 : prevSlideIndex - 1;
    var nextNextSlideIndex = (nextSlideIndex + 1) % numOfSlides;

    console.log(prevPrevSlideIndex, prevSlideIndex, curSlideIndex, nextSlideIndex,  nextNextSlideIndex);

    var toBeCurrentSlide, toBeNextSlide, toBeHidden, toBePrevSlide;
    
    // Setting which slides will do what
    if (direction > 0) {
        toBeCurrentSlide = prevSlideIndex;
        toBeNextSlide = curSlideIndex;
        toBeHidden = nextSlideIndex;
        toBePrevSlide = prevPrevSlideIndex;
    }
    else {
        toBeCurrentSlide = nextSlideIndex;
        toBeNextSlide = nextNextSlideIndex;
        toBeHidden = prevSlideIndex;
        toBePrevSlide = curSlideIndex;
    }

    // updating classes
    document.getElementById("slide_" + toBeCurrentSlide).className = "";
    document.getElementById("slide_" + toBeNextSlide).className = "";
    document.getElementById("slide_" + toBeHidden).className = "";
    document.getElementById("slide_" + toBePrevSlide).className = "";

    document.getElementById("slide_" + toBeCurrentSlide).classList.add("slide-img-front");
    document.getElementById("slide_" + toBeNextSlide).classList.add("slide-img-right");
    document.getElementById("slide_" + toBeNextSlide).classList.add("slide-img-sides");
    document.getElementById("slide_" + toBeHidden).classList.add("slide-hidden");
    document.getElementById("slide_" + toBePrevSlide).classList.add("slide-img-left");
    document.getElementById("slide_" + toBePrevSlide).classList.add("slide-img-sides");

    // updating navbutton
    document.getElementById("dotnav_" + prevSlideIndex).src = "assets/images/hero/icons/dotEmtpy.svg";
    document.getElementById("dotnav_" + nextSlideIndex).src = "assets/images/hero/icons/dotEmtpy.svg";
    document.getElementById("dotnav_" + curSlideIndex).src = "assets/images/hero/icons/dotFull.svg";


    // updating the indices
    curSlideIndex = curSlideIndex + direction < 0 ? numOfSlides - 1 : (curSlideIndex + direction) % numOfSlides;



    // updating events
    SetOnClick(document.getElementById("slide_" + toBePrevSlide), -1);
    SetOnClick(document.getElementById("slide_" + toBeNextSlide), 1);
}

function RemoveAllEventListenersFromParent(parent)
{
    // hacky, but just clones all the nodes.
    var children = parent.children;
    for (var i = 0; i < children.length; i++) {
        children[i].removeEventListener("click", OnClick, false);

    }
}

document.addEventListener("DOMCOntentLoaded", function() {
    console.log("DEBUGGGING IMAGESSS");
    alert('page is loaded');
});

window.onload = StartLoadImages;


