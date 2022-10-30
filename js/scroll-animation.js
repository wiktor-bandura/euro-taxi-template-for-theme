const elementsToAnimate = document.querySelectorAll(".scroll-anim");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>
    entry.isIntersecting
      ? entry.target.classList.add("fade")
      : entry.target.classList.remove("fade")
  );
});

elementsToAnimate.forEach((el) => observer.observe(el));
