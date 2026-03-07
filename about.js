
window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.page-transition');

  // Page enter — runs on every page load
  gsap.set(overlay, { yPercent: 0 });
  gsap.to(overlay, { yPercent: -100, duration: 1, ease: 'power3.inOut' });

  // Link clicks
  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http')) return;

      e.preventDefault();

      gsap.set(overlay, { yPercent: 100 });
      gsap.to(overlay, {
        yPercent: 0,
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => { window.location.href = href; },
      });
    });
  });
});

const lenis = new Lenis({
    duration:1.5,
    smoothWheel:true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);


function maintext(){
    const mainText = new SplitType(".about-us-info span",{
        types:'chars',
        tagName:'char'
    })

    gsap.set(".char", { display: "inline" });
}
function animatedButton() {
  const button = document.querySelectorAll(".button-container");
  button.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.querySelector(".initial-text"), {
        top: "-50px",
        position: "absolute",
        duration: 0.25,
      });
      gsap.to(elem.querySelector(".below-text"), {
        bottom: 0,
        position: "relative",
        duration: 0.25,
      });
      gsap.to(elem.querySelector(".animated-color"), {
        height: "400%",
        width: "150%",
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.querySelector(".initial-text"), {
        top: "0px",
        position: "relative",
        duration: 0.25,
      });
      gsap.to(elem.querySelector(".below-text"), {
        bottom: "-50px",
        position: "absolute",
        duration: 0.25,
      });
      gsap.to(elem.querySelector(".animated-color"), {
        height: "0%",
        width: "0%",
      });
    });
  });
}

const t1 =gsap.timeline();
function dataVisible(){

    t1.from('.about-us-info , .first-container , .second-container , .third-container',{
        y:'-100',
        opacity:0,
        duration:0.5,
        delay:0.5
    })
}

maintext();
animatedButton();
dataVisible();