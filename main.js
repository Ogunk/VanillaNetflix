document.addEventListener("scroll", onScrollEvent);

function onScrollEvent(){
    let scrollPos = window.scrollY;

    var topbar = document.getElementsByClassName("topbar")[0];

    if(scrollPos > 0)
    {
        topbar.style.backgroundColor= "#141414";
    }
    else {
        topbar.style.backgroundColor= "transparent";
    }
}