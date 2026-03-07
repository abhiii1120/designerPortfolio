window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".page-transition");

  // Page enter — runs on every page load
  gsap.set(overlay, { yPercent: 0 });
  gsap.to(overlay, { yPercent: 100, duration: 0.75, ease: "power3.inOut" });

  // Link clicks
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      e.preventDefault();

      gsap.set(overlay, { yPercent: 100 });
      gsap.to(overlay, {
        yPercent: 0,
        duration: 0.75,
        ease: "power3.inOut",
        onComplete: () => {
          window.location.href = href;
        },
      });
    });
  });
});

const lenis = new Lenis({
  duration: 1.5,
  smoothWheel: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

function maintext() {
  const mainText = new SplitType(".about-us-info span", {
    types: "chars",
    tagName: "char",
  });

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

const t1 = gsap.timeline();
function dataVisible() {
  t1.from(
    ".about-us-info , .first-container , .second-container , .third-container",
    {
      y: "-100",
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    },
  );
}

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page .main-content",
    top: "top 70%",
    end: "end 30%",
    scrub: 1,
  },
});

function animatedText() {
  const whiteText = new SplitType(".white-text", {
    types: "chars",
    tagName: "span",
  });
  const orangeText = new SplitType(".orange-text", {
    types: "chars",
    tagName: "span",
  });

  t2.fromTo(
    whiteText.chars,
    {
      color: "#222",
    },
    { color: "#fff", stagger: 1.25, duration: 1 },
  ).fromTo(
    orangeText.chars,
    {
      color: "#222",
    },
    { color: "#f05038", stagger: 1.25, duration: 1 },
  );
  gsap.set(".char", { display: "inline" });
}

const experience = [
  {
    name: "Comflex Technologies",
    post: "Software Developer",
    duration: "April 2025 - March 2026",
    location: "Thane",
  },
  {
    name: "Comflex Technologies",
    post: "Software Developer Intern",
    duration: "April 2024 - June 2024",
    location: "Thane",
  },
  {
    name: "Quantum learnings",
    post: "cyberSecurity Intern & Training",
    duration: "April 2024 - June 2024",
    location: "Remote",
  },
  {
    name: "Pilai University",
    post: "Student",
    duration: "June 2022 - March 2025",
    location: "Panvel",
  },
];

function timeline() {
  const timelineContainer = document.querySelector(".timeline-container");

  timelineContainer.innerHTML = experience
    .map((item) => {
      return `
         <div class="timeline">
                <div class="first-text">${item.post}</div>
                <div class="second-text">${item.name}</div>
                <div class="third-text">${item.duration}</div>
                <div class="fourth-text">${item.location}</div>
                <div class="orange-bg"></div>
            </div>`;
    })
    .join("");

  const timeline = document.querySelectorAll(".timeline");
  timeline.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      console.log(elem);
      gsap.to(elem.querySelector(".timeline .orange-bg"), {
        height: "100%",
        duration: 0.2,
        ease: "power3.out",
      });
      gsap.to(elem.querySelectorAll(".timeline div"), {
        color: "#fff",
        duration: 0,
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.querySelector(".timeline .orange-bg"), {
        height: "0%",
        duration: 0.20,
        ease: "power3.out",
      });
      gsap.to(elem.querySelectorAll(".timeline div"), {
        color: "",
        duration: 0,
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

maintext();
animatedButton();
dataVisible();
animatedText();
timeline();
rotatingLogo();