function getAnchor() {
  return window.location.hash.replace("#", "");
}

function ctpInit() {
	$('.ctpHeaderTemplate').load('ctpHeading.html');

  gallery_template = 'gallery.html';
  if (previewMode()) {
    url = portfolio[getAnchor()].src;
    id500px = portfolio[getAnchor()].id500px;
    orientation = portfolio[getAnchor()].orientation;
    gallery_template = 'preview.html';
  }
  $('.galleryTemplate').load(gallery_template);
}

function previewMode() {
  var anchor = getAnchor();

  if ( anchor != "" ) {
    if ( isNaN(anchor) ) {
      return false;
    } else {
      valid = !portfolio[anchor].blank && (portfolio[anchor] != undefined) ? true : false;
      return valid;
    }
  } else {
    return false;
  }
}

function show_photo(event){
  photo_id = event.target.id;
  photo_anchor = "./#" + photo_id;
  navigate_to_anchor(photo_anchor);
}

function show_500px_photo(event){
  photo_id = event.target.id;
  photo_url = "http://500px.com/photo/" + photo_id;
  open_tab(photo_url);
}

function handler(event) {
  target = event.target;
  target_class = target.className
  link_class = "." + target_class.split(" ").reverse()[0];
  url = $(link_class).attr('url')
  open_tab(url);
}

function open_tab(url) {
  window.open(url);
}

function navigate_to_anchor(anchor){
  location.href = anchor;
  location.reload(true);
}
