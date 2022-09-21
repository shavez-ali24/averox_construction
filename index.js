let scroll_icon = document.querySelector("#scroll-icon");

scroll_icon.addEventListener("click", function(){
    // window.scrollTo(0,0);

    // 2nd example
    // window.scrollTo({
    //     top:0,
    //     left:0,
    //     behavior:"smooth"
//    })
   $("html, body").animate({scrollTop:0},"slow");
})

  // loader start
window.setTimeout(function ld(){
    document.getElementById('loader').style='display:none'
},3000); 

// loader end
