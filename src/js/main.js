require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var qsa = require("./lib/qsa");

var sections = qsa(".scroll-aware");

window.addEventListener("scroll", function(e) {
  var found = null;
  var foundBar = null;
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var bounds = section.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < window.innerHeight * 0.65) {
      found = section;
      qsa(".bar").forEach(function(bar) {
        if (bar.getAttribute("data-order") == section.getAttribute("data-order")) {
          foundBar = bar;
        }
      });
    }
    section.classList.remove("highlighted");
    qsa(".bar").forEach(function(bar) {
      bar.classList.remove("highlighted");
    });
  }
  if (found) {
    found.classList.add("highlighted");
    foundBar.classList.add("highlighted");
  }
});