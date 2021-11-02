<>
(function () {
var _doc = window.document;

var _numOfImageSlots = 21, _numOfImagesPerRow = 4, _imageMarginBottom = 30;

var _imageAspectWidth = 1920, _imageAspectHeight = 1080;

var _imageSlots = [], _selectedImageElement = null, _originalImageSlot = null, _originalClickCoords = null, _lastTouchedSlotId = null;

var _imageLibrary = [
    {
        id: 01,
        image: "assets/images/paint/p-animals/p-animals-oil.jpeg",
        title: "p-animals-oil",
    },
    {
        id: 02,
        image: "./assets/images/paint/p-animals/p-animals-tempera.jpeg",
        title: "p-animals-tempera",
    },
    {
        id: 03,
        image: "./assets/images/paint/p-animals/p-animals-water.jpeg",
        title: "p-animals-water",
    },
    {
        id: 04,
        image: "./assets/images/paint/p-landscape/p-landscape-oil.jpeg",
        title: "p-landscape-oil",
    },
    {
        id: 05,
        image: "./assets/images/paint/p-landscape/p-landscape-tempera.jpeg",
        title: "p-landscape-tempera",
    },
    {
        id: 06,
        image: "./assets/images/paint/p-landscape/p-landscape-water.jpeg",
        title: "p-landscape-water",
    },
    {
        id: 07,
        image: "./assets/images/paint/p-people/p-people-tempera.jpeg",
        title: "p-people-tempera",
    },
    {
        id: 08,
        image: "./assets/images/paint/p-people/p-people-water.jpeg",
        title: "p-people-water",
    },
    {
        id: 09,
        image: "./assets/images/paint/p-people/p-portrait-oil.jpeg",
        title: "p-portrait-oil",
    },
    {
        id: 10,
        image: "./assets/images/sculpture/s-animals/s-animals-clay.jpeg",
        title: "s-animals-clay",
    },
    {
       id: 11,
       image: "./assets/images/sculpture/s-animals/s-animals-gold.jpeg",
       title: "s-animals-gold",
    },
    {
        id: 12,
        image: "https://via.placeholder.com/150",
        title: "s-animals-marble",
    },
    {
        id: 13,
        image: "https://via.placeholder.com/150",
        title: "s-animals-metal",
    },
    {
        id: 14,
        image: "./assets/images/sculpture/s-landscape/s-landscape-clay.jpeg",
        title: "s-landscape-clay",
    },
    {
        id: 15,
        image: "./assets/images/sculpture/s-landscape/s-landscape-gold.jpeg",
        title: "s-landscape-gold",
    },
    {
        id: 16,
        image: "./assets/images/sculpture/s-landscape/s-landscape-marble.jpeg",
        title: "s-landscape-marble",
    },
    {
        id: 17,
        image: "./assets/images/sculpture/s-landscape/s-landscape-metal.jpeg",
        title: "s-landscape-metal",
    },
    {
       id: 18,
        image: "./assets/images/sculpture/s-people/s-people-clay.jpeg",
       title: "s-people-clay",
    },
    {
        id: 19,
        image: "./assets/images/sculpture/s-people/s-people-gold.jpeg",
        itle: "s-people-gold",
    },
    {
        id: 20,
        image: "./assets/images/sculpture/s-people/s-people-marble.jpeg",
        title: "s-people-marble",
    },
    {
        id: 21,
        image: "./assets/images/sculpture/s-people/s-people-metal.jpeg",
        title: "s-people-metal",
     },
        ],
        _listedImageIds = [
            01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21,
            ];

            function init() {
                addImageSlots();
                drawImages();

                _doc
                    .getElementById("dragDrop")
                    .addEventListener("mousemove", imageMousemove);
                }

                function addImageSlots() {
                  var i = 0,
                    len = _numOfImageSlots,
                    item;

                  var wrap = _doc.getElementById("dragDrop");

                  for (; i < len; i++) {
                    item = _doc.createElement("div");

                    item.setAttribute("class", "dd-slot");
                    item.setAttribute(
                      "style",
                      "width:" +
                        100 / _numOfImagesPerRow +
                        "%;padding-bottom:" +
                        (100 / _numOfImagesPerRow) *
                          (_imageAspectHeight / _imageAspectWidth) +
                        "%;margin-bottom:" +
                        _imageMarginBottom +
                        "px;"
                    );

                    item.innerHTML =
                      '<p class="dd-slot-num dd-vc">' + (i + 1) + "</p>";

                    wrap.appendChild(item);
                  }
                }

                function drawImages() {
                  var i = 0,
                    len = _numOfImageSlots,
                    item;

                  var wrap = _doc.getElementById("dragDrop");

                  var slot = _doc.getElementsByClassName("dd-slot")[0],
                    bounds = slot.getBoundingClientRect(),
                    itemWidth = bounds.width,
                    itemHeight = bounds.height;

                  var itemX, itemY;

                  var imageId, image;

                  for (; i < len; i++) {
                    imageId = _listedImageIds[i] || -1;
                    image = getImageById(imageId);

                    itemX = (i % _numOfImagesPerRow) * itemWidth;
                    itemY =
                      Math.floor(i / _numOfImagesPerRow) *
                      (itemHeight + _imageMarginBottom);

                    item = _doc.createElement("div");

                    item.setAttribute(
                      "class",
                      "dd-item dd-transition" +
                        (imageId < 0 ? " dd-disabled" : "")
                    );
                    item.setAttribute("data-image-id", imageId);
                    item.setAttribute(
                      "style",
                      "width:" +
                        itemWidth +
                        "px;height:" +
                        itemHeight +
                        "px;transform:translate3d(" +
                        itemX +
                        "px," +
                        itemY +
                        "px,0);"
                    );

                    item.innerHTML =
                      '<div class="dd-item-inner dd-shadow" style="' +
                      (image
                        ? "background-image:url(images/" + image.image + ")"
                        : "") +
                      '"><div class="dd-item-panel dd-shadow"><h3 class="dd-item-title">' +
                      (image ? image.title : "") +
                      "</h3></div></div>";

                    wrap.appendChild(item);

                    item.addEventListener("mousedown", imageMousedown);
                    item.addEventListener("mouseup", imageMouseup);

                    _imageSlots[i] = {
                      width: itemWidth,
                      height: itemHeight,
                      x: itemX,
                      y: itemY,
                    };
                  }
                }
                function arrangeItems() {
                  var i = 0,
                    len = _listedImageIds.length,
                    slot,
                    ele;

                  for (; i < len; i++) {
                    slot = _imageSlots[i];
                    ele = _doc.querySelector(
                      '[data-image-id="' + _listedImageIds[i] + '"]'
                    );

                    ele.style.transform =
                      "translate3d(" + slot.x + "px," + slot.y + "px,0)";
                  }
                }

                function imageMousedown(event) {
                  if (!_selectedImageElement) {
                    _selectedImageElement = event.currentTarget;
                    _originalClickCoords = { x: event.pageX, y: event.pageY };
                    _originalImageSlot = getIndexOfImageId(
                      _selectedImageElement.getAttribute("data-image-id")
                    );

                    _selectedImageElement.classList.add("dd-selected");
                    _selectedImageElement.classList.remove("dd-transition");
                  }
                }

                function imageMousemove(event) {
                  if (_selectedImageElement) {
                    var wrap = _doc.getElementById("dragDrop"),
                      bounds = wrap.getBoundingClientRect(),
                      left = bounds.left,
                      top = bounds.top;

                    var pageX = event.pageX,
                      pageY = event.pageY;

                    var clickX = pageX - left,
                      clickY = pageY - top,
                      hoverSlotId = getSlotIdByCoords({ x: clickX, y: clickY });

                    var ele = _selectedImageElement,
                      imageId = ele.getAttribute("data-image-id"),
                      index = _originalImageSlot,
                      newIndex = getIndexOfImageId(imageId),
                      x = _imageSlots[index].x,
                      y = _imageSlots[index].y;

                    var resultX = x + (pageX - _originalClickCoords.x),
                      resultY = y + (pageY - _originalClickCoords.y);

                    if (
                      hoverSlotId != undefined &&
                      _lastTouchedSlotId != hoverSlotId
                    ) {
                      _lastTouchedSlotId = hoverSlotId;

                      _listedImageIds.splice(
                        hoverSlotId,
                        0,
                        _listedImageIds.splice(newIndex, 1)[0]
                      );
                      arrangeItems();
                    }

                    ele.style.transform =
                      "translate3d(" + resultX + "px," + resultY + "px,0)";
                  }
                }
                function imageMouseup() {
                  _selectedImageElement.classList.remove("dd-selected");
                  _selectedImageElement.classList.add("dd-transition");

                  _selectedImageElement = null;
                  _originalClickCoords = null;

                  arrangeItems();
                }

                function getSlotIdByCoords(coords) {
                  // Get the current slot being hovered over
                  for (var id in _imageSlots) {
                    var slot = _imageSlots[id];

                    if (
                      slot.x <= coords.x &&
                      coords.x <= slot.x + slot.width &&
                      slot.y <= coords.y &&
                      coords.y <= slot.y + slot.height
                    )
                      return id;
                  }
                }
                function getImageById(id) {
                  return _imageLibrary.find(function (image) {
                    return image.id == id;
                  });
                }
                function getIndexOfImageId(id) {
                  var i = 0,
                    len = _listedImageIds.length;

                  for (; i < len; i++) if (_listedImageIds[i] == id) return i;
                }

                init();
})();
