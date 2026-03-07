const lenis = new Lenis({
  duration: 1.5,
  smoothWheel: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
const mm = gsap.matchMedia();

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

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

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
    end: "bottom 30%",
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

gsap.set(".char", { display: "inline" });

function buildTimeline() {
  t2.fromTo(
    whiteText.chars,
    { color: "#222" },
    { color: "#ffffff", stagger: 1.25, duration: 1 },
  )
    .fromTo(
      orangeText.chars,
      { color: "#222" },
      { color: "#f05038", stagger: 1.25, duration: 1 },
    )
    .fromTo(
      whiteText2.chars,
      { color: "#222" },
      { color: "#ffffff", stagger: 1.25, duration: 1 },
    )
    .from(
      ".secondary-text, .button-container",
      {
        opacity: 0,
        duration: 1,
        ease: "slow(0.7,0.7,false)",
      },
      "<-=1",
    );
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

function animatedProjectsSection() {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    gsap.to(project, {
      scrollTrigger: {
        trigger: project,
        start: "top top", // card hits top of viewport
        end: "bottom top", // card leaves viewport
        pin: true, // pin it in place
        pinSpacing: false, // don't add extra space
        scrub: true,
        invalidateOnRefresh: true,
      },
      scale: 0.7,
      opacity: 0,
    });
  });
  window.addEventListener("resize", () => {
    // ScrollTrigger.invalidate(); // clears cached values
    ScrollTrigger.refresh(); // recalculates everything fresh
  });
}

function mouseFollower() {
  const projects = document.querySelector(".projects");
  projects.addEventListener("mousemove", (dets) => {
    console.log(dets);
    gsap.to(".mouse-folowing-color-text", {
      x: dets.clientX - 20, // center it
      y: dets.clientY - 40, // center it
      duration: 0.25,
      ease: "power2.out",
      opacity: 1,
      height: "80px",
      width: "80px",
    });
  });
  projects.addEventListener("mouseleave", () => {
    gsap.to(".mouse-folowing-color-text", {
      opacity: 0,
      duration: 0.3,
    });
  });
}

const projectArray = [
  {
    year: 2020,
    heading: "Formula Vintage",
    desc: "For Formula Vintage, we crafted a design that honors the rich heritage of classic cars while adding a modern twist. Combining timeless elegance with sleek, contemporary elements, we created an experience that appeals to both enthusiasts and newcomers, celebrating the past with a fresh perspective.",
    img: "https://framerusercontent.com/images/EHSkKBS5f12yNXJu5VZ8VAMv4.png",
    firstPreset: "landing Page",
    secondPreset: "Mobile App",
    thirdPreset: "Redesign",
  },
  {
    year: 2024,
    heading: "Sprey Zest",
    desc: ` For Sprey Zest, we took a playful, bold
              approach to packaging and branding. Instead
              of following the typical fresh or clean
              aesthetic, we infused energy and personality
              into every detail, making the product stand
              out of shelves and bringing a burst of
              excitement to the consumer experience.`,
    img: "https://framerusercontent.com/images/BUMWJfM7FAxHoEYXhMjW881wM.png",
    firstPreset: "Website Design",
    secondPreset: "Branding",
  },
  {
    year: 2020,
    heading: "Super Pro",
    desc: `For Super-Pro, we redefined what it means to
              be a professional by focusing on the mindset
              and determination behind success, not just
              the achievements. the design highlighted the
              drive and passion of athletes, creating a bold,
              empowering experience the resonated with
              anyone striving for excellence.`,
    img: "https://framerusercontent.com/images/VQY4WQ8E6fx261RhsoqM17bkt9E.png",
    firstPreset: "Desktop App",
    secondPreset: "Mobile App",
  },
  {
    year: 2024,
    heading: "Architech Buildings",
    desc: ` we redefined the comcept of modern living
              by creating a design that challenges
              conventional boundaries. Focusing on 
              comfort, functionality, and unexpected
              elements, we transformed the ordinary into
              something extraordinary, making everyday
              experiences feel fresh and unique.`,
    img: "https://framerusercontent.com/images/Z1w2O7B5xsN3Y7XkKgBi9kFOgps.jpg",
    firstPreset: "Mobile App",
    secondPreset: "Branding",
    thirdPreset: "Website Design",
  },
];
const projectContainer = $(".project-container");

function injectProjects() {
  projectContainer.innerHTML = projectArray.map((item) => {
    return `   <div class="project">
        <div class="project-image">
          <img
            src="${item.img}"
            alt=""
          />
        </div>
        <div class="project-info">
          <div class="first-container">
            <div class="year">(${item.year})</div>
            <div class="heading">${item.heading}</div>
            <div class="sub-heading">
             ${item.desc}
            </div>
          </div>
          <div class="second-container">
            <div class="landing-page">${item.firstPreset}</div>
            <div class="line-div"></div>
            <div class="mobile-app lineY">${item.secondPreset}</div>
            ${item?.thirdPreset ? '<div class="line-div"></div>' : ""}
            <div class="redesign">${item?.thirdPreset || ""}</div>
          </div>
        </div>
      </div>`;
  });
}

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial",
    top: "top 70%",
    end: "end 30%",
    scrub: 1,
  },
});

function revealTestamonials() {
  const testamonialsOrangeText = new SplitType(".testimonials-orange-text", {
    types: "chars",
    tagName: "span",
  });
  const testamonialsWhiteText = new SplitType(".testimonials-white-text", {
    types: "chars",
    tagName: "span",
  });

  t3.fromTo(
    testamonialsWhiteText.chars,
    { color: "#222" },
    { color: "#ffffff", stagger: 1.25, duration: 1 },
  ).fromTo(
    testamonialsOrangeText.chars,
    { color: "#222" },
    { color: "#f05038", stagger: 1.25, duration: 1 },
  );
  gsap.set(".char", { display: "inline" });
}

const testimonials = [
  {
    number: "01",
    whiteText: '"His keen eye for detail and innovative approach',
    orangeText: ` impressed our team, turning
                challenges into creative solutions that set him apart."`,
    name: "//Maya Lopez",
    designation: "CEO, fundwizz",
  },
   {
    number: "02",
    whiteText: '"His strong problem-solving skills and dedication to excellence consistently elevated our projects,',
    orangeText: ` making a lasting impact on the team."`,
    name: "//George Jones",
    designation: "Product Manager, Gliss",
  },
   {
    number: "03",
    whiteText: '"With a unique blend of creativity and precision,',
    orangeText: ` he brought fresh perspectives that drove meaningful results."`,
    name: "//Ray Brown",
    designation: "Head of Product, ISO",
  },
];

function onClickTestimonial(){
  const imageCards = $$('.image-1');
  const number = $('.orange-number');
  const testimonialWhiteText = $('.testimonials-white-text');
  const testimonialOrangeText = $('.testimonials-orange-text');
  const nameContainer = $('.name-container');

  imageCards.forEach((card)=>{
    card.addEventListener("click",()=>{
      imageCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      const index = card.dataset.index;
      const data = testimonials[index];

      number.innerHTML = data.number;
      testimonialWhiteText.innerText = data.whiteText;
      testimonialOrangeText.innerHTML = data.orangeText
      testimonialOrangeText.style.color = '#f05038'
      testimonialWhiteText.style.color = '#fff'
      nameContainer.innerHTML =` ${data.name}  <span class="designation">${data.designation}</span>`
      revealTestimonials()
    })
  })
}


rotatingLogo();
hoveredline();
animatedButton();
injectProjects();
animatedProjectsSection();
mouseFollower();
buildTimeline();
onClickTestimonial();
revealTestamonials();