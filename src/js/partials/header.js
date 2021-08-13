$(document).ready(function () {
  var parent = $(".header"),
    dropdowns = parent.find(".dropdown"),
    links = parent.find(".dropdown__link"),
    dropdownSimpleLink = parent.find(".header__link--dropdown");

  var scrollableContainer = $(".ps");

  scrollableContainer.each((index, container) => {
    new PerfectScrollbar(container, {
      wheelPropagation: false,
    });
  });

  if (window.matchMedia("(max-width: 1079px)").matches) {
    dropdownSimpleLink.on("click", function (e) {
      if ($(".header__link--dropdown > a").is(e.target)) {
        e.preventDefault();
      }
      $(this).find(".header-top__sub-menu").slideDown(300);
    });

    $(document).mouseup(function (e) {
      if (
        !dropdownSimpleLink.is(e.target) &&
        dropdownSimpleLink.has(e.target).length === 0
      ) {
        dropdownSimpleLink.find(".header-top__sub-menu").hide();
      }
    });
  } else {
    dropdownSimpleLink.hover(
      function () {
        $(this).find(".header-top__sub-menu").slideDown(100);
      },
      function () {
        $(this).find(".header-top__sub-menu").slideUp(100);
      }
    );
  }

  // Equal height to dropdown parts
  $(window).resize(function () {
    equalDropdownHeight();
  });

  equalDropdownHeight();

  function equalDropdownHeight() {
    setTimeout(function () {
      dropdowns.find(".dropdown__left").each(function () {
        var subMenu = $(this).find(".dropdown__submenu");

        if ($(this).outerHeight() > subMenu.outerHeight()) {
          subMenu.outerHeight($(this).outerHeight());
        } else {
          $(this).outerHeight(subMenu.outerHeight());
        }
      });
    }, 700);
  }

  $(window).resize(function () {
    setSubmenuPos();
  });

  setSubmenuPos();

  function setSubmenuPos() {
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
  }

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

  var searchBtn = parent.find(".search__btn"),
    searchBlock = parent.find(".header__search"),
    searchClose = parent.find(".search__btn-close");

  searchBtn.on("click", function (e) {
    if (!searchBlock.hasClass("header__search--active")) {
      e.preventDefault();
      searchBlock.addClass("header__search--active");
    } else {
    }
  });

  searchClose.on("click", function () {
    searchBlock.removeClass("header__search--active");
  });
});
