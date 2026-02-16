function hoveredline() {
  let hoverUnderline = document.querySelectorAll(".hover-underline");

  hoverUnderline.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element.querySelector(".line"), {
        width: "100%",
        duration: 0.75,
        delay: 0.1,
        ease: "power2.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element.querySelector(".line"), {
        width: "0%",
        duration: 0.5,
        ease: "power2.in",
      });
    });
  });
}

function rotatingLogo() {
  let socials = document.querySelectorAll(".social-icon");
  console.log("hitting");
  console.log(socials);
  socials.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      console.log(elem);
      gsap.to(elem.querySelector(".i"), {
        rotationY: 360,
        duration: 0.5,
      });
    });

    elem.addEventListener("mouseleave", () => {
      console.log(elem);
      gsap.to(elem.querySelector(".i"), {
        rotationY: 0,
        duration: 0.5,
      });
    });
  });
}

const scrollAniamtion = gsap.to(".main-text", {
  x: "-100%",
  duration: 50,
  ease: "none",
  repeat: -1,
 
});

// gsap.to(scrollAniamtion,{
//   timeScale:5,
//   ease:"power2.inOut",
//   scrollTrigger:{
//     trigger:'.main-content',
//    markers: true,
//     scroller: "body",
//     start: 'top 10%',
//     end: 'bottom -100%',
   
//   }
// })


rotatingLogo();
hoveredline();
