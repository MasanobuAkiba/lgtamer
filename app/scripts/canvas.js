$(function() {
    $('.ui.checkbox')
        .checkbox();
    //    var canvas = new fabric.Canvas('c');
    //     var image;

    var srcImg = "http://kankore.serifumatome.com/wp-content/uploads/2015/08/020_%E5%8C%97%E4%B8%8A.png";
    // var person = {};
    // person.d = [{URL: srcImg, PosX: Math.random()*500, PosY: Math.random()*500},
    //              {URL: srcImg, PosX: Math.random()*500, PosY: Math.random()*500},
    //              {URL: srcImg, PosX: Math.random()*500, PosY: Math.random()*500},
    //              {URL: srcImg, PosX: Math.random()*500, PosY: Math.random()*500},
    //              {URL: srcImg, PosX: Math.random()*500, PosY: Math.random()*500}];

    // var canvas = new fabric.Canvas('canvas');
    // var i;
    // for (i = 0; i < person.d.length; i++)
    // {
    //   //var image = new Image();
    //   //image.src = person.d[i].URL;
    //   var URL = person.d[i].URL;
    //   var PosX = person.d[i].PosX;
    //   var PosY = person.d[i].PosY;

    //   fabric.Image.fromURL(srcImg, function (oImg) {
    //     oImg.set('left', PosX).set('top',PosY);
    //     canvas.add(oImg);
    //     canvas.renderAll();
    //   }, {"left": PosX, "top": PosY, "scaleX": 0.25, "scaleY": 0.25});
    // }
});

var maxWidth = 1000

$(function() {
    var imgSrc = 'http://image.itmedia.co.jp/bizid/articles/1003/09/ts_dummy_image.gif';
    var canvas = new fabric.Canvas('canvas');
    var $download = $('#download');
    var $text = $('#text');
    var $strokeColor = $('#stroke-color');
    var $fillColor = $('#fill-color');
    var lgtmText = null;
    var $file = $('input[type=file]');
    var $fontFamilies = $('#font-families');
    var $fontFamily = $('#font-family');
    var $bold = $('#bold');
    var $italic = $('#italic');
    //var $url = $('#url');

    $(document).on('dragover', function(e) {
        e.preventDefault()
    }).on('drop', function(e) {
        e.preventDefault()
        setImage(e.originalEvent.dataTransfer.files[0]);
    });

    $file.on('change', function(e) {
        setImage(e.target.files[0]);
    });

    $download.on('click', function() {
        canvas.deactivateAll().renderAll()
        $download.attr('href', canvas.getElement().toDataURL());
    });

    // $url.on('change', function() {
    //     if (!lgtmText) {
    //         return;
    //     }

    //     imgSrc = $url.val();

    //     canvas.clear();
    //     setImage();
    //     //addTexts();
    //     canvas.renderAll();
    // });

    $strokeColor.on('change', function() {
        if (!lgtmText) {
            return;
        }

        lgtmText.setStroke($strokeColor.val());
        canvas.renderAll();
    });

    $fillColor.on('change', function() {
        if (!lgtmText) {
            return;
        }

        lgtmText.setFill($fillColor.val());
        canvas.renderAll();
    });

    $fontFamilies.on('change', function() {
        $fontFamily.val($fontFamilies.val());
        if (!lgtmText) {
            return;
        }

        lgtmText.setFontFamily($fontFamilies.val());
        canvas.renderAll();
    });

    $fontFamily.on('change', function() {
        if (!lgtmText) {
            return;
        }

        lgtmText.setFontFamily($fontFamily.val());
        canvas.renderAll();
    });

    $bold.on('change', function() {
        if (!lgtmText) {
            return;
        }

        lgtmText.setFontWeight($bold.is(':checked') ? 'bold' : null);
        canvas.renderAll();
    });

    $italic.on('change', function() {
        if (!lgtmText) {
            return;
        }

        lgtmText.setFontStyle($italic.is(':checked') ? 'italic' : null);
        canvas.renderAll();
    });



    var setImage = function(file) {
        if (!file) {
            return;
        }
        var $canvasWrapper = $('.l-canvas-contents');
        //var maxHeight = $canvasWrapper.height();
        var maxWidth = $canvasWrapper.width();
        var maxHeight = $canvasWrapper.height();

        var imageReader = new FileReader;

        imageReader.onload = function(e) {
            //var image = new Image;
            var image = new Image;
            //image.setAttribute('crossOrigin', 'anonymous');
            //image.src = imgSrc;

            image.onload = function() {
                var fabricImage = new fabric.Image(image);
                fabricImage.set({ selectable: false });
                var aspect = fabricImage.width / fabricImage.height;
                var width = Math.min(image.width, maxWidth);
                var height = width / aspect;
                if (height > maxHeight) {
                    width = image.width * (maxHeight / image.height);
                    height = maxHeight;
                }

                fabricImage.set({
                    hasBorders: false,
                    hasControls: false,
                    hasRotatingPoint: false,
                    selectable: false,
                    width: width,
                    height: height
                });

                canvas.setWidth(fabricImage.width);
                canvas.setHeight(fabricImage.height);

                lgtmText = new fabric.Text('LGTM');
                lgtmText.set({
                    selectable: true,
                    fontSize: 64,
                    fontFamily: 'impact', //$fontFamily.val(),
                    stroke: '#000',
                    strokeWidth: 2,
                    fill: '#fff',
                    left: (fabricImage.width - lgtmText.width) / 2,
                    top: (fabricImage.height - lgtmText.height) / 2,
                    cornerSize: 6,
                    cornerColor: '#6699ff',
                    transparentCorners: false,
                    fontWeight: ($bold.is(':checked') ? 'bold' : null),
                    fontStyle: ($italic.is(':checked') ? 'italic' : null)
                });

                canvas.clear()
                canvas.add(fabricImage);
                canvas.add(lgtmText);
            };
            console.log(e.target.result);
            image.src = e.target.result;
        };

        imageReader.readAsDataURL(file);

        $download.attr('download', 'LGTM.png');
    };



    // function addTexts() {

    //     lgtmText = new fabric.Text('LGTM');
    //     lgtmText.set({
    //         selectable: true,
    //         fontSize: 64,
    //         fontFamily: 'impact',//$fontFamily.val(),
    //         stroke: '#000',
    //         strokeWidth: 2,
    //         fill: '#fff',
    //         left: (fabricImage.width - lgtmText.width) / 2,
    //         top: (fabricImage.height - lgtmText.height) / 2,
    //         cornerSize: 6,
    //         cornerColor: '#6699ff',
    //         transparentCorners: false,
    //         fontWeight: ($bold.is(':checked') ? 'bold' : null),
    //         fontStyle: ($italic.is(':checked') ? 'italic' : null)
    //     });


    //     //canvas.add(fabricImage);
    //     canvas.add(lgtmText);
    // }

    canvas.clear();
    setImage();
    //addTexts();
});
