function getAnchor() {
  return window.location.hash.replace("#", "");
}

function galleryInit() {
  gallery_template = 'gallery.html';
  $('.galleryTemplate').load(gallery_template);
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
