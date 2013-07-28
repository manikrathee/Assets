/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */

//@codekit-prepend "libs/jquery-2.0.js", "libs/picturefill.js", "libs/lazyload.js", "libs/highlight.js", "libs/lettering.js";

var win   = $(window);
var doc   = $(document);
var body  = $('body');
var $self = $(this);

/*  Google Analytics  */
var googleAnalyticsID = "UA-19400273-5";

var _gaq = _gaq || [];
_gaq.push(['_setAccount', googleAnalyticsID]);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/* Reading Time */
$(document).ready(function() {
  console.log('ready');
  $(".time").text(function (index, value) {
    console.log('time');
    return Math.round(parseFloat(value));
  });
});