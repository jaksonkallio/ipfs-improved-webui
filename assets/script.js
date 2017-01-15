var pin_cache = {};

function listPinned(){
  $('#file-list').html('');

  $.get("http://127.0.0.1:5001/api/v0/pin/ls", function(data){
    $.each(data.Keys, function(key, value){
      pin_cache[key] = {
        "type": data['Keys'][key]['Type'],
        "providers": -1
      };
      buildListItem(key, data['Keys'][key]['Type']);
    });
  });
}

function buildListItem(file_key, pin_type){
  var preview_item = $(`
    <div class="item" data-file-key="`+file_key+`" data-preview-found="false">
      <a href="`+httpFileUrl(file_key)+`"><div class="thumbnail"></div></a>
      <div class="details">Providers</div>
    </div>
  `);

  $("#file-list").append(preview_item);

  updateItemPreview(file_key);
}

function countProviders(file_key, reload){
  if(reload){
     apiCall("dht/findprovs?arg="+file_key, function(data){
      var provider_count = data.split('{"Extra":').length-1; 
      pin_cache[file_key]['providers'] = provider_count;
      
      countProviders(file_key, false);
    });
  }else{
    $('#file-list .item[data-file-key="'+file_key+'"] .details').html(pin_cache[file_key]['providers']+" providers");
  }
}

function updateItemPreview(file_key){
  var avail_content_types = {
    "image": [
      "jpeg",
      "jpg",
      "png",
      "gif",
      "bmp"
    ] 
  };
  
  var content_type;

  $.ajax({
    type: 'GET',
    url: httpFileUrl(file_key),
    success: function(data, textstatus, request){
      var content_type_raw = request.getResponseHeader('Content-Type');
      content_type_raw = content_type_raw.split('/');
      
      content_type = "none";

      if(avail_content_types['image'].indexOf(content_type_raw[1]) > -1){
        $('#file-list .item[data-file-key="'+file_key+'"] .thumbnail').css('background-image', "url('"+httpFileUrl(file_key)+"')");
        $('#file-list .item[data-file-key="'+file_key+'"]').attr("data-preview-found", "true");
        content_type = 'image';
      }else{
        $('#file-list .item[data-file-key="'+file_key+'"]').remove();
      }
      
      console.log(file_key+" is a(n) "+content_type);
    }
  });
}

function httpFileUrl(file_key){
  return "http://localhost:8080/ipfs/"+file_key;
}

function apiCall(endpoint, onComplete){
  $.get("http://127.0.0.1:5001/api/v0/"+endpoint).always(function(data){
    onComplete(data.responseText);
  });
}

$(document).ready(function(){
  listPinned();
});
$(document).on('click', "#file-list .item .details", function(){
  var file_key = $(this).closest('.item').data('file-key');

  countProviders(file_key, true);
});
