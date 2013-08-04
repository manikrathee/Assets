/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */

//@codekit-prepend "libs/jquery-2.0.js"";

var win      = $(window),
    doc      = $(document),
    body     = $('body'),
    $self    = $(this),
    iDidThis = $('.i-did-this'),
    iDidThisChildren = $('.i-did-this a');


iDidThis.click(function(e){
  e.preventDefault();
  e.stopPropogration();
  $('.share').toggleClass('show');
});

doc.click(function(e){
  if ( $('.share').hasClass('show') ) {
    $('.share').removeClass('show');
  }
});

iDidThisChildren.click(function(e){
  e.stopPropogration();
});

// GA
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-40787829-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
