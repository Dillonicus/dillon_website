document.addEventListener("DOMContentLoaded", function() {
  var navs = document.getElementById("navbar-content").childNodes[1];
  var addsearch = document.querySelector(".nav-link.js-search").parentElement;
  navs.append(addsearch);
  addsearch.parentElement.remove();
});

$(document).ready(function(){
  var addsearch = $(".nav-link.js-search").parent();
  var navs = $("#navbar-content").children(1);
  navs.append(addsearch);
});