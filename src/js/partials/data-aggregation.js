document.addEventListener("DOMContentLoaded", function () {
  let dataAggregationSlider = null;
  const slider = document.querySelector(".data-aggregation__slider");

  const toggleCurrentItem = (item) => {
    const parrent = item.closest(".accordion-item");
    const accordionText = parrent.querySelector(".accordion-item__body");

    changeAvgSessionBlock(parrent);
    parrent.classList.toggle("active");

    if (accordionText) {
      //accordionText.style.maxHeight = parrent.classList.contains("active")
      //	? accordionText.scrollHeight + 200 + "px"
      //	: null;
    }
    //dataAggregationSlider.update();
  };

  const toggleAccordion = () => {
    const accordion = document.querySelectorAll(".accordion");

    accordion.forEach((item) => {
      item.addEventListener("click", (event) => {
        let target = event.target;

        target = target.closest(".accordion-item__header");

        if (item.querySelector(".active")) {
          const activeItem = item.querySelector(".active");

          activeItem.classList.remove("active");
          //activeItem.querySelector(".accordion-item__body").style.maxHeight = 0;
        }

        if (target) {
          toggleCurrentItem(target);
        }
        dataAggregationSlider.update();
        dataAggregationSlider.updateSlides();
      });
    });
  };

  function toggleDataAggregationSlider() {
    dataAggregationSlider = new Swiper(".data-aggregation__slider", {
      slidesPerView: "auto",
      direction: "vertical",
      navigation: {
        prevEl: ".data-aggregation__button-prev",
        nextEl: ".data-aggregation__button-next",
      },
    });
  }

  function sectionAdaptive(media) {
    const accordion = document.querySelector(".accordion");
    const avgSessions = document.querySelector(".avg-sessions");

    if (avgSessions) {
      if (media.matches) {
        //const avgSessions = document.querySelector(".avg-sessions");
        const activeMobileItem = document.querySelector(
          ".accordion-item.active"
        );
        const mobileClone = avgSessions.cloneNode(true);

        mobileClone.classList.add("avg-sessions--mobile");

        activeMobileItem
          .querySelector(".accordion-item__body")
          .append(mobileClone);

        function mobileClickHandler(e) {
          let target = e.target;

          target = target.closest(".accordion-item");

          if (target && media.matches) {
            const itemBody = target.querySelector(".accordion-item__body");

            if (!itemBody.querySelector(".avg-sessions")) {
              const avgSessionsMobile = document.querySelector(
                ".avg-sessions--mobile"
              );

              if (avgSessionsMobile) {
                avgSessionsMobile.remove();
              }

              itemBody.append(mobileClone);
            }
          }
        }

        accordion.addEventListener("click", mobileClickHandler);
        changeAvgSessionBlock(activeMobileItem);
      } else {
        
        const avgSessionsMobile = document.querySelectorAll(
          ".avg-sessions--mobile"
        );

        if (avgSessionsMobile.length) {
          avgSessionsMobile.forEach((item) => item.remove());
        }
        
        const activeItem = document.querySelector(
          ".accordion-item.active"
        );
        changeAvgSessionBlock(activeItem);
      }
    }
  }

  function checkWidth() {
    const media = window.matchMedia("(max-width: 767px)");

    sectionAdaptive(media);

    media.addEventListener("change", sectionAdaptive);
  }

  checkWidth();

  if (document.querySelector(".data-aggregation")) {
    toggleDataAggregationSlider();
    toggleAccordion();

    let activeItem = document.querySelector('.accordion-item.active');
    const activeItemBody = document.querySelector('.accordion-item__body');
    //console.log(activeItem)

    //activeItemBody.style.maxHeight = activeItemBody.scrollHeight + 200 + 'px';
    
    changeAvgSessionBlock(activeItem);
    dataAggregationSlider.update();
  }

  function changeAvgSessionBlock(item) {
    const isMobile = document.documentElement.clientWidth <= 767;

    let goalOutput, usersOutput, retentionOutput, durationOutput = null;

    if (isMobile) {
      goalOutput = item.querySelector("#goal");
      usersOutput = item.querySelector("#users");
      retentionOutput = item.querySelector("#retention");
      durationOutput = item.querySelector("#duration");
    } else {
      goalOutput = document.getElementById("goal");
      usersOutput = document.getElementById("users");
      retentionOutput = document.getElementById("retention");
      durationOutput = document.getElementById("duration");
    }


    const goalProgress = goalOutput.querySelector(".scale__progress-fill");
    const usersProgress = usersOutput.querySelector(".scale__progress-fill");
    const retentionProgress = retentionOutput.querySelector(".scale__progress-fill");
    const durationProgress = durationOutput.querySelector(".scale__progress-fill");

    const goal = item.dataset.goal;
    const goalTarget = item.dataset.goalTarget;
    const users = item.dataset.users;
    const usersTarget = item.dataset.usersTarget;
    const retention = item.dataset.retention;
    const retentionTarget = item.dataset.retentionTarget;
    const duration = item.dataset.duration;
    const durationTarget = item.dataset.durationTarget;

    goalOutput.querySelector("span").textContent = "$" + goal;
    usersOutput.querySelector("span").textContent = users + "K";
    retentionOutput.querySelector("span").textContent = retention + "%";
    durationOutput.querySelector("span").textContent = duration + "yr";

    goalProgress.style.width = Math.floor((goal / goalTarget) * 100) + "%";
    usersProgress.style.width = Math.floor((users / usersTarget) * 100) + "%";
    retentionProgress.style.width =
      Math.floor((retention / retentionTarget) * 100) + "%";
    durationProgress.style.width =
      Math.floor((duration / durationTarget) * 100) + "%";
  }
});
