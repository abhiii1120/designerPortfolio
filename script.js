const lenis = new Lenis({
  duration: 1.5,
  smoothWheel: true, // smooth mouse wheel
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

// if you're using GSAP
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

let t1 = gsap.timeline();
t1.from(".initial-page .desktop-image,.mobile-image", {
  scale: 2,
  duration: 1,
})
  .from(".initial-page .main-content", {
    x: "100%",
    duration: 0.5,
    ease: "power2.out",
  })
  .from(
    ".hover-underline , .ri-menu-line , .social-icon , .web-designer , .art-container ",
    {
      opacity: 0,
      duration: 2.5,
      delay: -0.5,
    },
  );

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
  socials.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
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

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".reveal-text-container",
    start: "top 70%",
    end: "bottomv 30%",
    scrub: 1,
  },
});

const whiteText = new SplitType(".white-text", {
  types: "chars",
  tagName: "span",
});
const whiteText2 = new SplitType(".white-text2", {
  types: "chars",
  tagName: "span",
});
const orangeText = new SplitType(".orange-text", {
  types: "chars",
  tagName: "span",
});

gsap.set(".char", { display: "inline" }); // this is the magic line

t2.fromTo(
  whiteText.chars,
  { color: "#222" },
  { color: "#ffffff", stagger: 1.25 },
)
  .fromTo(
    orangeText.chars,
    { color: "#222" },
    { color: "#f05038", stagger: 1.25 },
  )
  .fromTo(
    whiteText2.chars,
    { color: "#222" },
    { color: "#ffffff", stagger: 1.25 },
  )
  .from(
    '.secondary-text, .button-container',{
      opacity:0,
      duration:1,
      ease:'slow(0.7,0.7,false)'
    }
  )

  function animatedButton(){
    const button = document.querySelectorAll('.button-container');
    button.forEach(elem =>{
      elem.addEventListener('mouseenter',()=>{
        gsap.to(elem.querySelector('.initial-text'),{
          top:'-50px',
          position:'absolute',
          duration:0.25
        })
        gsap.to(elem.querySelector('.below-text'),{
          bottom:0,
          position:'relative',
          duration:0.25
        })
         gsap.to(elem.querySelector('.animated-color'),{
          height:'400%',
          width:'150%',
        })
      })
      elem.addEventListener('mouseleave',()=>{
        gsap.to(elem.querySelector('.initial-text'),{
          top:'0px',
          position:'relative',
          duration:0.25
        })
       gsap.to(elem.querySelector('.below-text'),{
          bottom:'-50px',
          position:'absolute',
          duration:0.25
        })
           gsap.to(elem.querySelector('.animated-color'),{
          height:'0%',
          width:'0%',
        })
      })
    })
  }

  rotatingLogo();
  hoveredline();
  animatedButton();
