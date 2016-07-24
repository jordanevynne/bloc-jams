var collectionItemTemplate = 
    '<div class="collection-album-container column fourth">'
  + '  <img src="assets/images/album_covers/01.png"/>'
  + '  <div class="collection-album-info caption">'
  + '    <p>'
  + '      <a class="album-name" href="/album.html"> The Colors </a>'
  + '      <br/>'
  + '      <a href="/album.html"> Pablo Picasso </a>'
  + '      <br/>'
  + '      X songs'
  + '      <br/>'
  + '    </p>'
  + '  </div>'
  + '</div>'
  ;

window.onload = function() {
  
// select first element with album-covers class name
// assign the element to a variable named collectionContainer
  var collectionContainer = document.getElementsByClassName('album-covers')[0];
  
// assign empty string to element's innerHTML property
  collectionContainer.innerHTML = '';
  
  for (var i = 0; i < 12; i++) {
    collectionContainer.innerHTML += collectionItemTemplate;
  }
};