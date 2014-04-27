function ctpInit() {
	$('.ctpHeader').load('ctpLogo.html');
	$('.contacts').load('contacts.html');
	$('.ctpHeaderUnderMenu').load('ctpLogo.html');
  $('.mega-hoverlink').click(function(eventObject) { show_500px_photo(eventObject); });
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
