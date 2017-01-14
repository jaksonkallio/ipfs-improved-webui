function listPinned(){
  $.get("http://127.0.0.1:5001/api/v0/pin/ls", function(data){
    $.each(data.Keys, function(key, value){
      buildListItem(key, data['Keys'][key]['type']);
    });
  });
}

function buildListItem(key, pin_type){
  console.log("Key: "+key+" - Pin Type: "+pin_type);
}

$(document).ready(function(){
  listPinned();  
});
