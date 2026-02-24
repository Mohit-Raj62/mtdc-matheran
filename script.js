document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector(".hamburger"),
    t = document.querySelector(".nav-links"),
    n = document.querySelectorAll(".nav-links li");
  (e.addEventListener("click", () => {
    (t.classList.toggle("active"), e.classList.toggle("active"));
  }),
    document.querySelectorAll('a[href^="#"]').forEach((e) => {
      e.addEventListener("click", function (n) {
        (n.preventDefault(),
          t.classList.contains("active") && t.classList.remove("active"),
          document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" }));
      });
    }));
  const o = { threshold: 0.1 },
    c = new IntersectionObserver((e) => {
      e.forEach((e) => {
        e.isIntersecting &&
          ((e.target.style.opacity = "1"),
          (e.target.style.transform = "translateY(0)"),
          c.unobserve(e.target));
      });
    }, o);
  document
    .querySelectorAll(".feature-card, .gallery-item, .contact-container")
    .forEach((e) => {
      ((e.style.opacity = "0"),
        (e.style.transform = "translateY(30px)"),
        (e.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"),
        c.observe(e));
    });
  const i = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    window.scrollY > 50
      ? i.classList.add("scrolled")
      : i.classList.remove("scrolled");
  });
  const a = document.querySelector(".stats-section"),
    r = document.querySelectorAll(".counter");
  let s = !1;
  window.addEventListener("scroll", () => {
    if (!a) return;
    const e = a.getBoundingClientRect().top,
      t = window.innerHeight;
    e < t - 100 &&
      !s &&
      (r.forEach((e) => {
        const t = +e.getAttribute("data-target"),
          n = t / (2e3 / 16);
        let o = 0;
        const c = () => {
          ((o += n),
            o < t
              ? ((e.innerText = Math.ceil(o)), requestAnimationFrame(c))
              : (e.innerText = t));
        };
        c();
      }),
      (s = !0));
  });
  const d = document.querySelector(".hero"),
    l = document.querySelector(".hero-content h1"),
    u = document.querySelector(".hero-content p"),
    m = [
      {
        image: "assets/images/resort1.jpg",
        title: "Experience Luxury in Nature",
        text: "Discover the best resort in Matheran for relaxation.",
      },
      {
        image: "assets/images/bedroom.png",
        title: "Cozy & Premium Interiors",
        text: "Relax in our spacious, well-furnished rooms.",
      },
      {
        image: "assets/images/resort3.jpg",
        title: "Beautiful Garden Views",
        text: "Enjoy the serenity of our lush green gardens.",
      },
      {
        image: "assets/images/honeymoon.png",
        title: "Romantic Honeymoon Suites",
        text: "Special flower decorations for your special moments.",
      },
    ];
  let h = 0;
  setInterval(() => {
    if (
      ((h = (h + 1) % m.length),
      (d.style.backgroundImage = `\n          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),\n          url('${m[h].image}')\n      `),
      l && u)
    ) {
      (l.classList.remove("animate-text"),
        u.classList.remove("animate-text"),
        void l.offsetWidth,
        (l.innerText = m[h].title),
        (u.innerText = m[h].text),
        l.classList.add("animate-text"),
        u.classList.add("animate-text"));
    }
  }, 3500);
});
