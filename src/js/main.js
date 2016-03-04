require("./lib/social");
require("./lib/ads");
require("./lib/comments");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var qsa = require("./lib/qsa");

var sections = qsa(".scroll-aware").reverse();
var bars = qsa(".bar");

window.addEventListener("scroll", function(e) {
  var found = null;
  var foundBar = null;
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var bounds = section.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < window.innerHeight * 0.75) {
      found = section;
      bars.forEach(function(bar) {
        if (bar.getAttribute("data-order") == section.getAttribute("data-order")) {
          foundBar = bar;
        }
        bar.classList.remove("highlighted");
      });
    }
    section.classList.remove("highlighted");
  }
  if (found) {
    found.classList.add("highlighted");
    foundBar.classList.add("highlighted");
  }
});

var animateScroll = require("./lib/animateScroll");

qsa(".top a").forEach(function(a) {
  a.addEventListener("click", function(e) {
    var href = this.getAttribute("href");
    if (href.indexOf("#") != 0) return;
    var section = document.querySelector(href);
    if (!section) return;
    e.preventDefault();
    
    animateScroll(section);
    window.history.pushState(href, href, href);
  });
});
