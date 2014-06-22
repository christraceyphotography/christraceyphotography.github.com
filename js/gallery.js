var gallery = "";
var galleryItems = {};
// index = 0;
// for(var key in Object.keys(portfolio).reverse()) {
//   galleryItems[index++] = portfolio[key];
// }
//
// debugger;
for (var i = Object.keys(portfolio).length; i > 0; i--) {

  var photo = portfolio[i];
  var galleryItem = '<div class="mega-entry"></div>';

  if (!photo.blank) {
    galleryItem = '<div class="mega-entry" id="mega-entry-1" data-src="' + photo.src + '" data-width="504" data-height="400">'
      + '  <div class="mega-hover">'
      + '    <div class="mega-hovertitle"><div class="mega-hoversubtitle"></div></div>'
      + '    <div class="mega-hoveractions">'
      + '      <a href="./#' + i + '" title="external link"><div id="' + i + '" class="mega-hoveraction mega-hoverlink"></div></a>'
      + '      <a href="http://500px.com/photo/' + photo.id + '" title="comment, download, print"><div id="' + i + '" class="mega-hoveraction mega-hoverprint"></div></a>'
      + '    </div>'

      + '    <a class="fancybox" title="view" href="' + photo.src  + '" rel="group1"><div class="zoomable clicker-top" ></div></a>'
      + '    <a class="fancybox" title="view" href="' + photo.src  + '" rel="group2"><div class="zoomable clicker-bottom" ></div></a>'
      + '    <a class="fancybox" title="view" href="' + photo.src  + '" rel="group3"><div class="zoomable clicker-right" ></div></a>'
      + '    <a class="fancybox" title="view" href="' + photo.src  + '" rel="group4"><div class="zoomable clicker-left" ></div></a>'
      + '  </div>'
      + '</div>';
  }

  gallery = gallery.concat(galleryItem);
}

$('.megafolio-container')[0].innerHTML = gallery;
$('.mega-hoverlink').click(function(eventObject) { show_photo(eventObject); });

jQuery(document).ready(function() {
  var api=jQuery('.megafolio-container').megafoliopro({
    filterChangeAnimation:"fade",     // fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
    filterChangeSpeed:600,          // Speed of Transition
    filterChangeRotate:99,          // If you ue scalerotate or rotate you can set the rotation (99 = random !!)
    filterChangeScale:0.6,          // Scale Animation Endparameter
    delay:20,
    defaultWidth:980,
    paddingHorizontal:10,
    paddingVertical:10,
    layoutarray:[7,8]   // Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.
  });

  jQuery('.filter').click(function() {
    jQuery('.filter').each(function() { jQuery(this).removeClass("selected")});
    api.megafilter(jQuery(this).data('category'));
    jQuery(this).addClass("selected");
    jQuery('body').find('ul.filter_list').slideUp(500).addClass("closed");
    jQuery('body').find('.current-filter').html(jQuery(this).text());
  });
});

// THE FANCYBOX PLUGIN INITALISATION
jQuery(".fancybox").fancybox({
  openEffect  : 'none',
  closeEffect : 'none',
  helpers : {
    media : {}
  }
});
