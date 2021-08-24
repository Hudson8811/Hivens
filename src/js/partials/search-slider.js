$(document).ready(function () {
  function toggleSearchSlider() {
    const search = document.querySelector(".search-section");

    if (!search) {
      return;
    }

    const filterBtns = document.querySelectorAll(
        ".search-filters__button:not(.search-filters__button--dropdown)"
      ),
      dropBtn = document.querySelector(".search-filters__button--dropdown"),
      dropLinks = document.querySelectorAll(".search-filters__dropdown a"),
      dropdown = dropBtn.querySelector(".search-filters__dropdown"),
      image = document.querySelector('.search__image img'),
      imageCaption = document.querySelector('.search__image span');

    filterBtns.forEach(function (el) {
      el.addEventListener("click", function (e) {
        dropBtn.classList.remove("active");
        filterBtns.forEach((n) => n.classList.remove("active"));
        el.classList.add("active");
      });
    });

    document.querySelectorAll('[data-id]').forEach(function (el) {
      el.addEventListener('click', function () {
        image.setAttribute('src', `images/page-6/search/${this.getAttribute('data-id')}.png`);
        image.setAttribute('srcset', `images/page-6/search/${this.getAttribute('data-id')}@2x.png`);
        imageCaption.textContent = el.querySelector('span').textContent;
      });
    })

    dropBtn.addEventListener("click", function (e) {
      if (!dropdown.classList.contains("open")) {
        dropdown.classList.add("open");
        filterBtns.forEach((n) => n.classList.remove("active"));
      } else {
        dropLinks.forEach(function (el, index) {
          if (e.target === el ||
              e.target === el.querySelector('span') ||
              e.target === el.querySelector('svg') ||
              e.target === el.querySelector('use') ||
              e.target === el.querySelector('path')) {
            e.preventDefault();
            dropBtn.querySelector("span").innerHTML = el.innerHTML + "...";
            dropdown.classList.remove("open");
            dropBtn.classList.add("active");
          }
        });
      }
    }, true);

    document.addEventListener(
      "click",
      function (e) {
        if (
          !(e.target == dropdown || dropdown.contains(e.target)) &&
          !(e.target == dropBtn) &&
          dropdown.classList.contains("open")
        ) {
          dropdown.classList.remove("open");
        }
      },
      true
    );

    const searchSlider = new Swiper(".search-filters", {
      slidesPerView: "auto",
      breakpoints: {
        768: {
          slidesPerView: "auto",
          enabled: false,
        },
      },
    });
  }

  toggleSearchSlider();
});
