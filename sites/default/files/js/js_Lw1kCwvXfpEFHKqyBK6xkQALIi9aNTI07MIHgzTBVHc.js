/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.

  }
};

$(document).ready(function(){
 $(".pane-menu-block-mobile-header-navigation h2").toggle(function() {
    	$(".pane-menu-block-mobile-header-navigation ul.menu").show();
    	}, function() {
    	$(".pane-menu-block-mobile-header-navigation ul.menu").hide();
 });

$('div.imagebox-image iframe').parent().addClass('iframe-wrapper');
$("#image_link").click(function setCookie() {
  var d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
    document.cookie = 'clickImage' + "=" + 'yes' + "; " + expires + "; " + 'domain=umich.edu';
});

});


})(jQuery, Drupal, this, this.document);
;
