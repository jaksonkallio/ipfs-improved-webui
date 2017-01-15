function listPinned(){
  $('#file-list').html('');
  
  $.get("http://127.0.0.1:5001/api/v0/pin/ls", function(data){
    $.each(data.Keys, function(key, value){
      buildListItem(key, data['Keys'][key]['Type']);
    });
  });
}

function buildListItem(file_key, pin_type){
  console.log("Key: "+file_key+" - Pin Type: "+pin_type);
  var avail_content_types = {
    "image": [
      "jpeg",
      "jpg",
      "png",
      "gif",
      "bmp"
    ] 
  };

  $.ajax({
    type: 'GET',
    url: httpFileUrl(file_key),
    success: function(data, textstatus, request){
      var content_type_raw = request.getResponseHeader('Content-Type');
      content_type_raw = content_type_raw.split('/');
      
      if(avail_content_types['image'].indexOf(content_type_raw[1]) > -1){
        updateItemPreview(file_key, 'image'); 
      }
    }
  });

  var preview_item = $(`
    <div class="item" data-file-key="`+file_key+`">
      <div class="thumbnail"></div>
      <a class="details">File Details</a>
    </div>
  `);

  $("#file-list").append(preview_item);
}

function updateItemPreview(file_key, content_type){
  console.log(file_key+" is a(n) "+content_type);

  if(content_type == 'image'){
    $('#file-list .item[data-file-key="'+file_key+'"] .thumbnail').css('background-image', "url('"+httpFileUrl(file_key)+"')");
  }
}

function httpFileUrl(file_key){
  return "http://localhost:8080/ipfs/"+file_key;
}

function dialogBox(content){
  $("#modal").html(content);
  $("#focus-cover").attr('data-active', "true");
  $("#modal").attr('data-active', "true");
}

function closeDialogBox(){
  $("#focus-cover").attr('data-active', "false");
  $("#modal").attr('data-active', "false");
  $("#modal").html('');
}

function apiCall(endpoint, onComplete){
  $.get("http://127.0.0.1:5001/api/v0/"+endpoint).always(function(data){
    onComplete(data.responseText);
  });
 
}

$(document).ready(function(){
  listPinned();
});
$(document).on('click', "#file-list .item a.details", function(){
  var provider_count = 0;
  var file_key = $(this).closest('.item').data('file-key');

  console.log("Loading file details for "+file_key);

  apiCall("dht/findprovs?arg="+file_key, function(data){
    provider_count = data.split('{"Extra":').length-1; 
    
    dialogBox('Provider Count: '+provider_count);
  });
});
