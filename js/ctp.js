function ctpInit() {
	$('.topMenu').load('topMenu.html');
	$('.ctpHeader').load('ctpLogo.html');
}

function initiateSideMenu() {
	$("#sidePanelHeader").height("20%");
	$("#infoIcon").click(function() { showInfo(); });
	$("#ordersAndPrintsIcon").click(function() { showOrdersAndPrinting(); });
	$("#contactsIcon").click(function() { showContacts(); });
	$("#narrower").click(function() { showSideMenu(); });
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
	$('#sidePanelContent').load('orderprints.html');
}

function showContacts() {
	sidePanelWiden();
	$('#sidePanelContent').load('contacts.html');
}

function showSideMenu() {
	sidePanelNarrow();
	$('#sidePanelContent').load('sideMenu.html', function() {initiateSideMenu();});
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
