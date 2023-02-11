$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:5500/data/profile_link.json",
    type: "GET",
    success: function (result) {
      if (result != '') {
        for (var i = 0; i < result.length; i++) {
          $("#mylist").append("<a class='mx-auto btn btn-outline-info text-secondary d-block btn-lg' width='100px' height='50px' href='" + result[i].url + "' target='_blank'>" + result[i].name + "</a><br>");
        }
      } else {
        $("#mylist").append("<li>No Links found</li>");
      }

    }
  });
});