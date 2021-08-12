$(window).on("load", function () {
  const toggleMenu = () => {
    const menuBtn = document.querySelector(".header-burger");
    const mainMenu = document.querySelector(".main-menu");
    const menuOverlay = document.querySelector(".sidenav-overlay");
    let $listItem = null;

    menuBtn.addEventListener("click", (e) => {
      const target = e.target;

      if (target.closest(".header-burger")) {
        mainMenu.classList.add("menu-open");
        menuOverlay.classList.add("show");
        document.body.classList.add("scroll-blocked");
      }
    });

    mainMenu.addEventListener("click", (event) => {
      let target = event.target;

      let btnClose = target.closest("a[data-toggle=collapse]");
      let dropdownItem = target.closest("a[data-toggle=dropdown]");
      let submenuDropdown = target.closest("li[data-menu=dropdown-submenu]");
      const openedDropdown = mainMenu.querySelector("li.open");

      if (btnClose) {
        mainMenu.classList.remove("menu-open");
        menuOverlay.classList.remove("show");
        document.body.classList.remove("scroll-blocked");
      }

      if (dropdownItem) {
        let dropdown = dropdownItem.closest("li");
        let closestOpenedDropdownItem = dropdownItem.closest("li.open");
        const subList = dropdown.querySelector("ul");
        const toggleLink = dropdown.querySelector("a");

        if (target.closest("li").classList.contains("open")) {
          $(target.closest("li")).animate(
            {
              height: $(toggleLink).outerHeight() + "px",
            },
            250,
            function () {
              setTimeout(() => {
                target.closest("li").classList.remove("open");
                target.closest("li").classList.remove("sidebar-group-active");
              }, 100);
            }
          );
          return;
        }

        if (openedDropdown && target.closest("li") !== submenuDropdown) {
          $(openedDropdown).css({ overflow: "" });
          mainMenu.querySelectorAll("li.open").forEach((listItem) => {
            listItem.style.height = "";
            listItem.classList.remove("sidebar-group-active");
          });

          $(openedDropdown).animate(
            {
              height: $(toggleLink).outerHeight() + "px",
            },
            250,
            function () {
              setTimeout(() => {
                openedDropdown.classList.remove("open");
                openedDropdown.classList.remove("sidebar-group-active");
              }, 100);
            }
          );
        }

        $(dropdown).css({
          height: $(dropdown).outerHeight() + "px",
          overflow: "hidden",
        });

        dropdown.classList.add("open");
        dropdown.classList.add("sidebar-group-active");

        if (closestOpenedDropdownItem) {
          closestOpenedDropdownItem.style.height = "";
        }

        setTimeout(() => {
          $(dropdown).animate(
            {
              height:
                $(toggleLink).outerHeight() + $(subList).outerHeight() + "px",
            },
            250
          );
        }, 50);
      }
    });

    menuOverlay.addEventListener("click", () => {
      if (mainMenu.classList.contains("menu-open")) {
        mainMenu.classList.remove("menu-open");
        menuOverlay.classList.remove("show");
        document.body.classList.remove("scroll-blocked");
      }
    });
  };

  function menuAdaptive(mediaQuery) {
    if (mediaQuery.matches) {
      toggleMenu();
    } else {
      const mainMenu = document.querySelector(".main-menu");
      const menuOverlay = document.querySelector(".sidenav-overlay");

      mainMenu.classList.remove("menu-open");
      menuOverlay.classList.remove("show");
    }
  }

  function checkWidth() {
    const mediaQuery = window.matchMedia("(max-width: 1080px)");

    menuAdaptive(mediaQuery);

    mediaQuery.addEventListener("change", menuAdaptive);
  }

  checkWidth();
});
