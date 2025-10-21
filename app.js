let tl = gsap.timeline();

tl.from(".nav h3", {
    y : -100,
    opacity : 0,
    duration : 1.3,
    delay : 0.3, 
    stagger : 0.2 // timeline type for small use 
})

tl.from(".main h1", {
    x : -100,
    opacity : 0,
    duration : 1.3,
    stagger : 0.2
})
tl.from("img",{
    x : -50,
    rotate : 45,
    opacity : 0,
    duration : 1.3,
    stagger : 0.8
})