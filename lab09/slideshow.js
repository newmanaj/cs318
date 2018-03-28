// The list of image URLs
var urls = [
    'http://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png',
    'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/57159-istock-486456250.jpg?itok=pYToxS1l&resize=1100x619',
    'https://d32xvgr96w2oxp.cloudfront.net/2017/03/quokka13-03-2017.jpg',
    'https://i.amz.mshcdn.com/b6auhUZ4445hP7a8vz89_HH1t6c=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F150416%2F0e879bddc4434295adfb93bd6378f990.jpg',
    
  ];
  
  // The index (serial number) of the current image
  var i = 0;
  
  // Grab handles onto HTML elements.
  var leftButton = document.getElementById('left');
  var rightButton = document.getElementById('right');
  var picture = document.getElementById('picture');
  
  // Retreat
  leftButton.onclick = function() {
    i = (i - 1 + urls.length) % urls.length;
    picture.src = urls[i]; 
  }
  
  // Advance
  rightButton.onclick = function() {
    i = (i + 1) % urls.length;
    picture.src = urls[i]; 
  }