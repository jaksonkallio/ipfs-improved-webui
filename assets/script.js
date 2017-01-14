function listPinned(){
  $.get("http://127.0.0.1:5001/api/v0/pin/ls", function(data){
    $.each(data.Keys, function(key, value){
      buildListItem(key, data['Keys'][key]['Type']);
    });
  });
}

function buildListItem(key, pin_type){
  console.log("Key: "+key+" - Pin Type: "+pin_type);
}

$(document).ready(function(){
  listPinned();
  $.ajax({
    type: 'GET',
    url: 'http://i.imgur.com/cx5wqZ3.jpg',
    success: function(data, textStatus, request){
      alert(request.getResponseHeader('Content-Type'));
    }
  });
});
