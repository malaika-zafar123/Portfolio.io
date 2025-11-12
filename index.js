   const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });


const counters = document.querySelectorAll(".count");
let hasCounted = false; // to prevent repeating

function startCounting() {
  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 400;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// Use Intersection Observer to detect when the section is visible
const statsSection = document.querySelector(".stats-section");
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !hasCounted) {
    startCounting();
    hasCounted = true; // only once
  }
});

observer.observe(statsSection);

