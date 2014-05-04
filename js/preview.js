$('.photo').attr("src", url);
$('.photo').attr("height",  $(window).height() * 0.7);

var print_url = "http://500px.com/photo/" + getAnchor();
$('.action').attr("href", print_url);
