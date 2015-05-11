(function($) {
  // loop through all gallery elements and bind events
  var $galleryElements = $('.my-gallery');

  $galleryElements.children().each(function(i, el) {
    $(el).attr('data-pswp-uid', i + 1);
  })
  var $photos = $galleryElements.find('.picture a');

  var parseThumbnailElements = function() {
    var items = $photos.map(function() {
      var $a = $(this),
          $href = $a.attr('href'),
          $size = $a.data('size').split('x'),
          $width  = $size[0],
          $height = $size[1];

      var item = {
        src : $href,
        w   : $width,
        h   : $height
      };

      return item;
    });
    return items;
  };

  $photos.click(function(e) {
    e.preventDefault();

    alert('clicked');
    var eTarget = e.target || e.srcElement;

    // find root element of slide
    var clickedListItem = $(eTarget).closest(function(el) {
        return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
    });

    if(!clickedListItem) {
        return;
    }

    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode,
        childNodes = clickedListItem.parentNode.childNodes,
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;

    for (var i = 0; i < numChildNodes; i++) {
      if(childNodes[i].nodeType !== 1) {
        continue;
      }

      if(childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }

    if(index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe( index, clickedGallery );
    }
    return false;
  });

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
    var hash = window.location.hash.substring(1),
        params = {};

    if(hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if(!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');
      if(pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if(params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    if(!params.hasOwnProperty('pid')) {
      return params;
    }
    params.pid = parseInt(params.pid, 10);
    return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
    var pswpElement = $('.pswp')
        gallery,
        options,
        items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {
      index: index,

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();

        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
      }
    };

    if(disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if(hashData.pid > 0 && hashData.gid > 0) {
    openPhotoSwipe( hashData.pid - 1 ,  $galleryElements[ hashData.gid - 1 ], true );
  }

})(jQuery);
