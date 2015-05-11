$( function() {
  var itemClass = 'gallery-item';
  var itemSelector = '.' + itemClass;
  var gallerySizer = '#gallery-sizer';

  var photos = [
    {
      name: "IMG_8891.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "IMG_8878.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "IMG_8900.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "IMG_8909.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "IMG_8914.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "IMG_8926.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "IMG_8945.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "IMG_8948.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "IMG_8962.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "small_group_1.jpg",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "small_group_2.jpg",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "1132.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "1565.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "334.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "352.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    },
    {
      name: "854.JPG",
      size: {
        width: 793,
        height: 1080
      },
      caption: ""
    }
  ];

  var $container = $('#gallery').masonry({
    itemSelector: itemSelector,
    isFitWidth: true,
    columnWidth: 180,
    gutter: 10
  });

  var $items = getElements(photos, itemClass);
  $container.masonryImagesReveal( $items );
});

$.fn.masonryImagesReveal = function( $items ) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;

  // hide by default
  // $items.hide();

  // append to container
  this.append( $items );

  this.imagesLoaded()
    .progress( function( imgLoad, image ) {
      // get item
      // image is imagesLoaded class, not <img>, <img> is image.img
      var $item = $( image.img ).parents( itemSelector );

      // un-hide item
      // $item.show();
      // masonry does its thing
      msnry.appended( $item );
    });


  return this;
};

function randomInt( min, max ) {
  return Math.floor( Math.random() * max + min );
}

function getItem() {
  var width = randomInt( 150, 400 );
  var height = randomInt( 150, 250 );
  var item = '<div class="item">'+
    '<img src="http://lorempixel.com/' +
      width + '/' + height + '/nature" /></div>';
  return item;
}

function sizeDataString(photo) {
  return photo.size.width + 'x' + photo.size.height;
}

function getElements(photos, itemSelector) {
  var photoElements = $.map(photos, function(photo, i) {
    return '<div class="picture ' + itemSelector + '" itemprop="contentUrl" data-size="' + sizeDataString(photo) + '" data-index="' + i + '">' +
             '<img class="gallery-img" src="/assets/images/gallery/' + photo.name + '" itemprop="thumbnail" alt="Image description" />'
           '</div>';
  })

  return photoElements;
}
