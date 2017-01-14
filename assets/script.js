function listPinned(){
  $.get("http://127.0.0.1:5001/api/v0/pin/ls", function(data){
    console.log(data);
  });
}

$(document).ready(function(){
  
});
