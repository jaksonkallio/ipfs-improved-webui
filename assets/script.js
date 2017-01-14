function listPinned(){
  $.get("http://127.0.0.1:5001/api/v0/pin/ls", function(data){
    $.each(data.Keys, function(key, value){
      buildListItem(key, data['Keys'][key]['Type']);
    });
  });
}

function buildListItem(file_key, pin_type){
  console.log("Key: "+key+" - Pin Type: "+pin_type);

  $.ajax({
    type: 'GET',
    url: httpFileUrl(file_key),
    success: function(data, textstatus, request){
      var content_type_raw = request.getResponseHeader('Content-Type');
    }
  }); 
}

function updateItemPreview(file_key, content_type){

}

function httpFileUrl(file_key){
  return "http://localhost:8080/ipfs/"+file_key;
}

$(document).ready(function(){
  listPinned();
  /*$.ajax({
    type: 'GET',
    url: 'http://i.imgur.com/cx5wqZ3.jpg',
    success: function(data, textStatus, request){
      alert(request.getResponseHeader('Content-Type'));
    }
  });*/
});
