$(function() {
    if (localStorage.getItem('countries')) {
        $("#countries option").eq(localStorage.getItem('countries')).prop('selected', true);
    }

    $("#countries").on('change', function() {
        localStorage.setItem('countries', $('option:selected', this).index());
    });
});

var maxVideos = 5;
   $(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/videos",{
      part: 'snippet',
      chart: 'mostPopular',
      kind: 'youtube#videoListResponse',
      maxResults: maxVideos,
      regionCode: encodeURIComponent($("#countries").val()),
      key: 'AIzaSyC1U3lIrDYfK9slvPCFlbEnAx3IsmMNN10'},
      function(data){
        var output;
        $.each(data.items, function(i, item){
          console.log(item);
          videTitle = item.snippet.title;
                description = item.snippet.description;
                thumb = item.snippet.thumbnails.high.url;
                channelTitle = item.snippet.channelTitle;
                videoDate = item.snippet.publishedAt;
                Catagoryid = item.snippet.categoryId;
                cID = item.snippet.channelId;
                vidId = item.id;
          output = /*'<div class="maindiv"><div>' +
                        '<a data-fancybox-type="iframe" class="fancyboxIframe" href="watch.php?v=' + vidId + '" target="_blank" ><img src="' + thumb + '" class="img-responsive thumbnail" ></a>' +
                        '</div>' +
                        '<div class="input-group col-md-6">' +
                            '<h3 class="Vtitle"><a data-fancybox-type="iframe" class="fancyboxIframe" href="watch.php?v=' + vidId + '" target="_blank">' + videTitle + '</a></h3>'+
                        '</div><div  id="cTitle"><a href="https://www.youtube.com/channel/'+cID+'" target="_blank">'+channelTitle+'</a></div></div>' +
                    '<div class="clearfix"></div>'*/

                    '<div class="item">' +
    '<h2 style="color: white;">' + videTitle + '</h2>' +
    '<iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/' + vidId + '" frameborder="0" allowfullscreen></iframe>' +
'</div>';
          $('#trending').append(output);
        })

      }
    );
}); 