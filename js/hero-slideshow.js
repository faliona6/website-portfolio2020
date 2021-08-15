// Slideshow state variables
var curSlideIndex = 1; // start on 1, 0 is on the left
var numOfSlides = 6;
var onCooldown = false;

// Start functions for loading images into html
function StartLoadImages()
{
    var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
    for (var i = 0; i < numOfSlides; i++) {
        var imgSlide = document.createElement("img");
        if (i == 0) {
            imgSlide.classList.add("slide-img-left");
            imgSlide.classList.add("slide-img-sides");
            SetOnClick(imgSlide, -1);
        }
        else if (i == 1) {
            imgSlide.classList.add("slide-img-front");
        }
        else if (i == 2)
        {
            imgSlide.classList.add("slide-img-right");
            imgSlide.classList.add("slide-img-sides");
            SetOnClick(imgSlide, 1);
        }
        else {
            imgSlide.classList.add("slide-hidden");
        }
        
        imgSlide.src = "assets/images/hero/slideshow/slide_" + i + ".png";
        imgSlide.id = "slide_" + i;
        slideshowContainer.appendChild(imgSlide);
    }
    InitializeDotNav();
    console.log(curSlideIndex);
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
    var rightNavButton = document.createElement("img");
    rightNavButton.style.display = "inline-flex";
    rightNavButton.direction = 1;
    rightNavButton.addEventListener("click", OnClick, false);
    rightNavButton.src = "assets/images/hero/icons/rightArrow.svg";
    navContainer.appendChild(rightNavButton);
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

function setCooldownFalse()
{
    onCooldown = false;
}

function OnClick()
{
    var isMobile = false;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
    }

    if (onCooldown && !isMobile)
    {
        return;
    }
    var myVar = setTimeout(setCooldownFalse, 1500);
    onCooldown = true;

    var direction = this.direction;
    var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
    RemoveAllEventListenersFromParent(slideshowContainer);

    // switch the slide classes
    // getting the previous and next slide indices

    var prevSlideIndex = curSlideIndex - 1 < 0 ? numOfSlides - 1 : curSlideIndex - 1;
    var nextSlideIndex = (curSlideIndex + 1) % numOfSlides;

    var prevPrevSlideIndex = prevSlideIndex - 1 < 0 ? numOfSlides - 1 : prevSlideIndex - 1;
    var nextNextSlideIndex = (nextSlideIndex + 1) % numOfSlides;

    var toBeCurrentSlide, toBeNextSlide, toBeHidden, toBePrevSlide;
    
    // Setting which slides will do what
    if (direction < 0) {
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

    // going left to right
    if (direction < 0)
    {
        document.getElementById("slide_" + toBeCurrentSlide).classList.add("slide-left-to-mid");
    }
    else{
        document.getElementById("slide_" + toBeCurrentSlide).classList.add("slide-right-to-mid");
    }

    // change dotnav empty
    var x = (curSlideIndex == 0) ? numOfSlides - 1 : ((curSlideIndex - 1) % numOfSlides);

    document.getElementById("dotnav_" + x).src = "assets/images/hero/icons/dotEmtpy.svg";

    // updating the indices
    curSlideIndex = curSlideIndex + direction < 0 ? numOfSlides - 1 : (curSlideIndex + direction) % numOfSlides;

     // updating navbutton full
     x = (curSlideIndex == 0) ? numOfSlides - 1 : ((curSlideIndex - 1) % numOfSlides);
     document.getElementById("dotnav_" + x).src = "assets/images/hero/icons/dotFull.svg";

    // updating events
    SetOnClick(document.getElementById("slide_" + toBePrevSlide), -1);
    SetOnClick(document.getElementById("slide_" + toBeNextSlide), 1);

}

// Mobile touch swipe
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            OnClickRight();
        } else {
            /* right swipe */
            OnClickLeft();

        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


function RemoveAllEventListenersFromParent(parent)
{
    // hacky, but just clones all the nodes.
    var children = parent.children;
    for (var i = 0; i < children.length; i++) {
        children[i].removeEventListener("click", OnClick, false);

    }
}

document.addEventListener("DOMCOntentLoaded", function() {
    alert('page is loaded');
});

window.onload = StartLoadImages;


