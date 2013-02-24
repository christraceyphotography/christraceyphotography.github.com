function ctpInit() {
	$('.topMenu').load('topMenu.html', function() { init_500px_links(); });
	$('.ctpHeader').load('ctpLogo.html');
	$('.ctpHeaderUnderMenu').load('ctpLogo.html');
  $('.mega-hoverlink').click(function(eventObject) { show_500px_photo(); });
}

function show_500px_photo(event){
  photo_id = event.target.id;
  photo_url = "http://500px.com/photo/" + photo_id;
  open_tab(photo_url);
}

function init_500px_links() {
  create_500px_link('.500px_gallery');
  create_500px_link('.500px_contact');
}

function handler(event) {
  target = event.target;
  target_class = target.className
  link_class = "." + target_class.split(" ").reverse()[0];
  url = $(link_class).attr('url')
  open_tab(url);
}

function create_500px_link(link_class) {
  url = $(link_class).attr('url')
  $(link_class).click(handler)
}

function open_tab(url) {
  window.open(url);
}

function initiateSideMenu() {
	$("#sidePanelHeader").height("20%");
	$("#infoIcon").click(function() { showInfo(); });
	$("#ordersAndPrintsIcon").click(function() { showOrdersAndPrinting(); });
	$("#contactsIcon").click(function() { showContacts(); });
	$("#narrower").click(function() { showSideMenu(); });
  init_500px_links();
}

function showInfo() {
	sidePanelWiden();
	$('#sidePanelContent').load('info.html');
}

function showGalleryMenu() {
	sidePanelWiden();
	$('#sidePanelContent').load('galleryMenu.html');
}

function showOrdersAndPrinting() {
	sidePanelWiden();
	$('#sidePanelContent').load('orderprints.html', function() { init_500px_links(); });
}

function showContacts() {
	sidePanelWiden();
	$('#sidePanelContent').load('contacts.html', function() { init_500px_links(); });
}

function showSideMenu() {
	sidePanelNarrow();
	$('#sidePanelContent').load('sideMenu.html', function() {
      initiateSideMenu();
  });
}

function sidePanelWiden() {
	$("#ctpSidePanel").removeClass("ctpSidePanelNarrow");
	$("#ctpSidePanelBackground").removeClass("ctpSidePanelNarrow");
	$("#ctpSidePanel").addClass("ctpSidePanelWide");
	$("#ctpSidePanelBackground").addClass("ctpSidePanelWide");
	$("#ctpIcons").hide('slow');
	$("#narrower").show('fast');
}

function sidePanelNarrow() {
	$("#ctpSidePanel").removeClass("ctpSidePanelWide");
	$("#ctpSidePanelBackground").removeClass("ctpSidePanelWide");
	$("#ctpSidePanel").addClass("ctpSidePanelNarrow");
	$("#ctpSidePanelBackground").addClass("ctpSidePanelNarrow");				
	$("#narrower").hide('fast');
	$("#ctpIcons").show('slow');
}
