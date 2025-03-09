var crsr = document.querySelector('#curser')
var blur = document.querySelector("#crsr2")
document.addEventListener("mousemove",function(dot){
crsr.style.left=dot.x+"px"
crsr.style.top=dot.y+'px'
blur.style.left = dot.x -200 +"px"
blur.style.top = dot.y -200 +"px"
})


gsap.to("#nav",{
    height:"100px",
    backgroundColor:'black',
    duration :0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start: "top -10%",
    end : "top -11%",
    scrub:2,
   },
});
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // marker:true,
        start:" top -50%",
        end:"top -100%",
        scrub:2
    }
})