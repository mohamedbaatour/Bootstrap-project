$(".logo").click(function () {
  window.location.href = "home.html";
});

$(".searchButton").click(function (event) {
  event.preventDefault();

  var input = $(".searchBar").val().toLowerCase();
  var name = $(".car-name");

  name.each(function (index, element) {
    var carNameText = $(element).text().toLowerCase();

    if (carNameText.includes(input)) {
      $(element).closest(".card").show();
    } else {
      $(element).closest(".card").hide();
    }
  });
});
