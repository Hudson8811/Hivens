$(document).ready(function () {
  var parent = $(".header"),
    dropdowns = parent.find(".dropdown"),
    links = parent.find(".dropdown__link");

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

  userDropdownLink.on("click", function (e) {
    e.preventDefault();
    userDropdownMenu.toggleClass("show");
  });

  $(document).on("click", function (e) {
    var target = e.target;

    if (
      !target.closest(".dropdown-menu") &&
      !target.closest("a.dropdown-user-link")
    ) {
      userDropdownMenu.removeClass("show");
    }
  });
});
