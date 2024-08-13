let elements = document.querySelectorAll(".elem");

elements.forEach(val => {
    val.addEventListener("mousemove",(dets)=>{
        // console.log(val.childNodes);
        val.childNodes[3].style.opacity = 1
        val.childNodes[3].style.left = dets.x + "px"
        // val.childNodes[3].style.top = dets.y + "px"
    })

    val.addEventListener("mouseleave",()=>{
        // console.log(val.childNodes);
        val.childNodes[3].style.opacity = 0
    })
    
});