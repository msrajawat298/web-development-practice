$(document).ready(function() {
    var links = [{
      name: "Facebook",
      url: "https://www.facebook.com/divyanshu.parihar.144"
    }, {
      name: "Instagram",
      url: "https://www.instagram.com/divyanshupariharofficial/"
    }, {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCxySEeFoT96ygUxgSekPesg"
    }, {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/info-divyanshu/"
    }, {
      name: "Github",
      url: "https://github.com/info-divyanshuparihar"
    }, {
      name: "Replit",
      url: "https://replit.com/@info-divyanshup"
    }, {
      name: "Stackoverflow",
      url: "https://stackoverflow.com/users/21018731/divyanshu-parihar"
    }];
    for (var i = 0; i < links.length; i++) {
      $("#mylist").append("<a class='mx-auto btn btn-outline-info text-secondary d-block btn-lg' width='100px' height='50px' href='" + links[i].url + "' target='_blank'>" + links[i].name + "</a><br>");
      }
    });