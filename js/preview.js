$('.photo').attr("src", url);
setImageSize();

var print_url = "http://500px.com/photo/" + id500px;
$('.action').attr("href", print_url);


function setImageSize() {
  //default to landscape
  var longest_edge = "width";
  var img_size = "800px";

  if(orientation === "landscape"){
    longest_edge = "width";
  }

  if(orientation === "portrait"){
    longest_edge = "height";
  var img_size = "600px";
  }

  $('.photo').attr(longest_edge,  img_size);
}
