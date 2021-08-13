$(document).ready(function () {
  var parent = $(".header"),
    dropdowns = parent.find(".dropdown"),
    links = parent.find(".dropdown__link");

  var scrollableContainer = $(".ps");

  scrollableContainer.each((index, container) => {
    new PerfectScrollbar(container, {
      wheelPropagation: false,
    });
  });

  // Equal height to dropdown parts
  setTimeout(function () {
    equalDropdownHeight();
  }, 700);

  function equalDropdownHeight() {
    dropdowns.find(".dropdown__left").each(function () {
      var subMenu = $(this).find(".dropdown__submenu");

      if ($(this).outerHeight() > subMenu.outerHeight()) {
        subMenu.outerHeight($(this).outerHeight());
      } else {
        $(this).outerHeight(subMenu.outerHeight());
      }
    });
  }

  links.each(function () {
    var subMenu = $(this).find(".dropdown__submenu");

    if (
      $(this).outerWidth() + subMenu.outerWidth() >
        $(window).width() - $(this).offset().left ||
      $(this).outerWidth() + $(this).find(".dropdown__center").outerWidth() >
        $(window).width() - $(this).offset().left
    ) {
      $(this).addClass("reverse");

      if (subMenu.offset().left < 0) {
        $(this).removeClass("reverse").addClass("column");
        subMenu.outerWidth($(window).width() - subMenu.offset().left);
      }
    }
  });

  var userDropdown = parent.find(".dropdown-user");
  var userDropdownLink = userDropdown.find("a.dropdown-user-link");
  var userDropdownMenu = userDropdown.find(".dropdown-menu");
  var notificationDropdown = parent.find(".dropdown-notification");
  var notificationDropdownLink = notificationDropdown.find("a.nav-link");
  var notificationDropdownMenu = notificationDropdown.find(".dropdown-menu");
  var cartDropdown = parent.find(".dropdown-cart");
  var cartDropdownLink = cartDropdown.find("a.nav-link");
  var cartDropdownMenu = cartDropdown.find(".dropdown-menu");

  notificationDropdownLink.on("click", function (e) {
    e.preventDefault();
    notificationDropdownMenu.toggleClass("show");
  });

  userDropdownLink.on("click", function (e) {
    e.preventDefault();
    userDropdownMenu.toggleClass("show");
  });

  cartDropdownLink.on("click", function (e) {
    e.preventDefault();
    cartDropdownMenu.toggleClass("show");
  });

  $(document).on("click", function (e) {
    var target = e.target;

    if (
      !target.closest(".dropdown-menu") &&
      !target.closest("a.dropdown-user-link")
    ) {
      userDropdownMenu.removeClass("show");
    }

    if (
      !target.closest(".dropdown-menu") &&
      !target.closest(".dropdown-notification>a")
    ) {
      notificationDropdownMenu.removeClass("show");
    }

    if (
      !target.closest(".dropdown-menu") &&
      !target.closest(".dropdown-cart>a")
    ) {
      cartDropdownMenu.removeClass("show");
    }
  });

  if ($(".touchspin-cart").length > 0) {
    $(".dropdown-cart").on("click", function (e) {
      const target = e.target;

      let buttonPlus = target.closest("svg.feather-plus");
      let buttonMinus = target.closest("svg.feather-minus");

      if (buttonPlus) {
        const cartItem = buttonPlus
          .closest(".input-group.bootstrap-touchspin")
          .querySelector("input");

        cartItem.value = Number(cartItem.value) + 1;
      }

      if (buttonMinus) {
        const cartItem = buttonMinus
          .closest(".input-group.bootstrap-touchspin")
          .querySelector("input");

        if (cartItem.value > "0") {
          cartItem.value = Number(cartItem.value) - 1;
        }
      }
    });
  }

  //function scrollAdaptive(breakpoint) {
  //  if (breakpoint.matches) {
  //    document
  //      .querySelectorAll(".scrollable-container")
  //      .forEach((container) => container.classList.add("ps--active-x"));
  //  } else {
  //    document
  //      .querySelectorAll(".scrollable-container")
  //      .forEach((container) => container.classList.remove("ps--active-x"));
  //  }
  //}

  //function checkWidthForScroll() {
  //  const breakpoint = window.matchMedia("(max-width: 768px)");

  //  scrollAdaptive(breakpoint);

  //  breakpoint.addEventListener("change", scrollAdaptive);
  //}

  //checkWidthForScroll();
});
