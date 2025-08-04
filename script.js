var main = document.querySelector("body")

main.addEventListener("mousemove", function(dot) {
  gsap.to("#cur", {
    x: dot.x,
    y: dot.y,
    duration: 0.5
  })
})

gasp.from("#h1", {
    x: 30,
    duration:1
})