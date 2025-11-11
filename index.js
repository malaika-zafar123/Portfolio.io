   const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });


    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 200; // smaller number = slower speed

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 5);
        } else {
          counter.innerText = target; // make sure it ends exactly at the target
        }
      };

      updateCounter();
    });
