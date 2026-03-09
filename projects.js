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

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

const projectArray = JSON.parse(localStorage.getItem("projects"));
// Step 3: Find the matching project
const project = projectArray.find((p) => p.heading === name);

console.log(project);

const $ = (selector) => document.querySelector(selector);

const bgImage = $(".bg-image");
const title = $(".title");
const overview = $(".sub-text");
const projectImages = $(".project-images");

bgImage.innerHTML = ` <img src="${project.backgroundImage}" alt="" />`;
title.innerHTML = ` ${project.titlefirstWord} <span>${project.titleSecondWord}</span> `;
overview.innerHTML = ` ${project.overview} `;
projectImages.innerHTML = `<div class="project-img-wrap">
        <img
          src="${project.firstImage}"
          alt=""
        />
      </div>
      <div class="project-img-wrap">
        <img
          src="${project.secondImage}"
          alt=""
        />
      </div>
        ${project?.thirdImage ? `
        <div class="project-img-wrap">
            <img src="${project.thirdImage}" alt="" />
        </div>
        `: ""
        }
        ${project?.fourthImage ? `
        <div class="project-img-wrap">
            <img src="${project.fourthImage}" alt="" />
        </div>
        `: ""
        } `;

gsap.to(".dark-overlay", {
  opacity: 1,
  ease: "none",
  backgroundColor: "#121111",
  scrollTrigger: {
    trigger: ".dark-overlay",
    start: "top top",
    end: "bottom 100%",
    scrub: true,
  },
});
gsap.utils.toArray(".project-img-wrap").forEach((wrap) => {
  const img = wrap.querySelector("img");

  gsap.fromTo(
    img,
    { yPercent: 0 },
    {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    },
  );
});

const scrollAniamtion = gsap.to(".footer .main-text", {
  x: "-100%",
  duration: 50,
  ease: "none",
  repeat: -1,
});
