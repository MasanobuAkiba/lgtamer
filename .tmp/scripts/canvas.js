'use strict';$(function () {
    $('.ui.checkbox').
    checkbox();
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

var maxWidth = 1000;

$(function () {
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

    $(document).on('dragover', function (e) {
        e.preventDefault();}).
    on('drop', function (e) {
        e.preventDefault();
        setImage(e.originalEvent.dataTransfer.files[0]);});


    $file.on('change', function (e) {
        setImage(e.target.files[0]);});


    $download.on('click', function () {
        canvas.deactivateAll().renderAll();
        $download.attr('href', canvas.getElement().toDataURL());});


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

    $strokeColor.on('change', function () {
        if (!lgtmText) {
            return;}


        lgtmText.setStroke($strokeColor.val());
        canvas.renderAll();});


    $fillColor.on('change', function () {
        if (!lgtmText) {
            return;}


        lgtmText.setFill($fillColor.val());
        canvas.renderAll();});


    $fontFamilies.on('change', function () {
        $fontFamily.val($fontFamilies.val());
        if (!lgtmText) {
            return;}


        lgtmText.setFontFamily($fontFamilies.val());
        canvas.renderAll();});


    $fontFamily.on('change', function () {
        if (!lgtmText) {
            return;}


        lgtmText.setFontFamily($fontFamily.val());
        canvas.renderAll();});


    $bold.on('change', function () {
        if (!lgtmText) {
            return;}


        lgtmText.setFontWeight($bold.is(':checked') ? 'bold' : null);
        canvas.renderAll();});


    $italic.on('change', function () {
        if (!lgtmText) {
            return;}


        lgtmText.setFontStyle($italic.is(':checked') ? 'italic' : null);
        canvas.renderAll();});




    var setImage = function setImage(file) {
        if (!file) {
            return;}

        var $canvasWrapper = $('.l-canvas-contents');
        //var maxHeight = $canvasWrapper.height();
        var maxWidth = $canvasWrapper.width();
        var maxHeight = $canvasWrapper.height();

        var imageReader = new FileReader();

        imageReader.onload = function (e) {
            //var image = new Image;
            var image = new Image();
            //image.setAttribute('crossOrigin', 'anonymous');
            //image.src = imgSrc;

            image.onload = function () {
                var fabricImage = new fabric.Image(image);
                fabricImage.set({ selectable: false });
                var aspect = fabricImage.width / fabricImage.height;
                var width = Math.min(image.width, maxWidth);
                var height = width / aspect;
                if (height > maxHeight) {
                    width = image.width * (maxHeight / image.height);
                    height = maxHeight;}


                fabricImage.set({ 
                    hasBorders: false, 
                    hasControls: false, 
                    hasRotatingPoint: false, 
                    selectable: false, 
                    width: width, 
                    height: height });


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
                    fontWeight: $bold.is(':checked') ? 'bold' : null, 
                    fontStyle: $italic.is(':checked') ? 'italic' : null });


                canvas.clear();
                canvas.add(fabricImage);
                canvas.add(lgtmText);};

            console.log(e.target.result);
            image.src = e.target.result;};


        imageReader.readAsDataURL(file);

        $download.attr('download', 'LGTM.png');};




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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiYUFBQSxFQUFFLFlBQVc7QUFDVCxNQUFFLGNBQUY7QUFDSyxZQURMOzs7O0FBS0EsUUFBSSxTQUFTLHVGQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkgsQ0E5QkQ7O0FBZ0NBLElBQUksV0FBVyxJQUFmOztBQUVBLEVBQUUsWUFBVztBQUNULFFBQUksU0FBUyxzRUFBYjtBQUNBLFFBQUksU0FBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixRQUFsQixDQUFiO0FBQ0EsUUFBSSxZQUFZLEVBQUUsV0FBRixDQUFoQjtBQUNBLFFBQUksUUFBUSxFQUFFLE9BQUYsQ0FBWjtBQUNBLFFBQUksZUFBZSxFQUFFLGVBQUYsQ0FBbkI7QUFDQSxRQUFJLGFBQWEsRUFBRSxhQUFGLENBQWpCO0FBQ0EsUUFBSSxXQUFXLElBQWY7QUFDQSxRQUFJLFFBQVEsRUFBRSxrQkFBRixDQUFaO0FBQ0EsUUFBSSxnQkFBZ0IsRUFBRSxnQkFBRixDQUFwQjtBQUNBLFFBQUksY0FBYyxFQUFFLGNBQUYsQ0FBbEI7QUFDQSxRQUFJLFFBQVEsRUFBRSxPQUFGLENBQVo7QUFDQSxRQUFJLFVBQVUsRUFBRSxTQUFGLENBQWQ7OztBQUdBLE1BQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxVQUFmLEVBQTJCLFVBQVMsQ0FBVCxFQUFZO0FBQ25DLFVBQUUsY0FBRixHQUNILENBRkQ7QUFFRyxNQUZILENBRU0sTUFGTixFQUVjLFVBQVMsQ0FBVCxFQUFZO0FBQ3RCLFVBQUUsY0FBRjtBQUNBLGlCQUFTLEVBQUUsYUFBRixDQUFnQixZQUFoQixDQUE2QixLQUE3QixDQUFtQyxDQUFuQyxDQUFULEVBQ0gsQ0FMRDs7O0FBT0EsVUFBTSxFQUFOLENBQVMsUUFBVCxFQUFtQixVQUFTLENBQVQsRUFBWTtBQUMzQixpQkFBUyxFQUFFLE1BQUYsQ0FBUyxLQUFULENBQWUsQ0FBZixDQUFULEVBQ0gsQ0FGRDs7O0FBSUEsY0FBVSxFQUFWLENBQWEsT0FBYixFQUFzQixZQUFXO0FBQzdCLGVBQU8sYUFBUCxHQUF1QixTQUF2QjtBQUNBLGtCQUFVLElBQVYsQ0FBZSxNQUFmLEVBQXVCLE9BQU8sVUFBUCxHQUFvQixTQUFwQixFQUF2QixFQUNILENBSEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsaUJBQWEsRUFBYixDQUFnQixRQUFoQixFQUEwQixZQUFXO0FBQ2pDLFlBQUksQ0FBQyxRQUFMLEVBQWU7QUFDWCxtQkFDSDs7O0FBRUQsaUJBQVMsU0FBVCxDQUFtQixhQUFhLEdBQWIsRUFBbkI7QUFDQSxlQUFPLFNBQVAsR0FDSCxDQVBEOzs7QUFTQSxlQUFXLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFlBQVc7QUFDL0IsWUFBSSxDQUFDLFFBQUwsRUFBZTtBQUNYLG1CQUNIOzs7QUFFRCxpQkFBUyxPQUFULENBQWlCLFdBQVcsR0FBWCxFQUFqQjtBQUNBLGVBQU8sU0FBUCxHQUNILENBUEQ7OztBQVNBLGtCQUFjLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkIsWUFBVztBQUNsQyxvQkFBWSxHQUFaLENBQWdCLGNBQWMsR0FBZCxFQUFoQjtBQUNBLFlBQUksQ0FBQyxRQUFMLEVBQWU7QUFDWCxtQkFDSDs7O0FBRUQsaUJBQVMsYUFBVCxDQUF1QixjQUFjLEdBQWQsRUFBdkI7QUFDQSxlQUFPLFNBQVAsR0FDSCxDQVJEOzs7QUFVQSxnQkFBWSxFQUFaLENBQWUsUUFBZixFQUF5QixZQUFXO0FBQ2hDLFlBQUksQ0FBQyxRQUFMLEVBQWU7QUFDWCxtQkFDSDs7O0FBRUQsaUJBQVMsYUFBVCxDQUF1QixZQUFZLEdBQVosRUFBdkI7QUFDQSxlQUFPLFNBQVAsR0FDSCxDQVBEOzs7QUFTQSxVQUFNLEVBQU4sQ0FBUyxRQUFULEVBQW1CLFlBQVc7QUFDMUIsWUFBSSxDQUFDLFFBQUwsRUFBZTtBQUNYLG1CQUNIOzs7QUFFRCxpQkFBUyxhQUFULENBQXVCLE1BQU0sRUFBTixDQUFTLFVBQVQsSUFBdUIsTUFBdkIsR0FBZ0MsSUFBdkQ7QUFDQSxlQUFPLFNBQVAsR0FDSCxDQVBEOzs7QUFTQSxZQUFRLEVBQVIsQ0FBVyxRQUFYLEVBQXFCLFlBQVc7QUFDNUIsWUFBSSxDQUFDLFFBQUwsRUFBZTtBQUNYLG1CQUNIOzs7QUFFRCxpQkFBUyxZQUFULENBQXNCLFFBQVEsRUFBUixDQUFXLFVBQVgsSUFBeUIsUUFBekIsR0FBb0MsSUFBMUQ7QUFDQSxlQUFPLFNBQVAsR0FDSCxDQVBEOzs7OztBQVdBLFFBQUksV0FBVyxTQUFYLFFBQVcsQ0FBUyxJQUFULEVBQWU7QUFDMUIsWUFBSSxDQUFDLElBQUwsRUFBVztBQUNQLG1CQUNIOztBQUNELFlBQUksaUJBQWlCLEVBQUUsb0JBQUYsQ0FBckI7O0FBRUEsWUFBSSxXQUFXLGVBQWUsS0FBZixFQUFmO0FBQ0EsWUFBSSxZQUFZLGVBQWUsTUFBZixFQUFoQjs7QUFFQSxZQUFJLGNBQWMsSUFBSSxVQUFKLEVBQWxCOztBQUVBLG9CQUFZLE1BQVosR0FBcUIsVUFBUyxDQUFULEVBQVk7O0FBRTdCLGdCQUFJLFFBQVEsSUFBSSxLQUFKLEVBQVo7Ozs7QUFJQSxrQkFBTSxNQUFOLEdBQWUsWUFBVztBQUN0QixvQkFBSSxjQUFjLElBQUksT0FBTyxLQUFYLENBQWlCLEtBQWpCLENBQWxCO0FBQ0EsNEJBQVksR0FBWixDQUFnQixFQUFFLFlBQVksS0FBZCxFQUFoQjtBQUNBLG9CQUFJLFNBQVMsWUFBWSxLQUFaLEdBQW9CLFlBQVksTUFBN0M7QUFDQSxvQkFBSSxRQUFRLEtBQUssR0FBTCxDQUFTLE1BQU0sS0FBZixFQUFzQixRQUF0QixDQUFaO0FBQ0Esb0JBQUksU0FBUyxRQUFRLE1BQXJCO0FBQ0Esb0JBQUksU0FBUyxTQUFiLEVBQXdCO0FBQ3BCLDRCQUFRLE1BQU0sS0FBTixJQUFlLFlBQVksTUFBTSxNQUFqQyxDQUFSO0FBQ0EsNkJBQVMsU0FBVCxDQUNIOzs7QUFFRCw0QkFBWSxHQUFaLENBQWdCO0FBQ1osZ0NBQVksS0FEQTtBQUVaLGlDQUFhLEtBRkQ7QUFHWixzQ0FBa0IsS0FITjtBQUlaLGdDQUFZLEtBSkE7QUFLWiwyQkFBTyxLQUxLO0FBTVosNEJBQVEsTUFOSSxFQUFoQjs7O0FBU0EsdUJBQU8sUUFBUCxDQUFnQixZQUFZLEtBQTVCO0FBQ0EsdUJBQU8sU0FBUCxDQUFpQixZQUFZLE1BQTdCOztBQUVBLDJCQUFXLElBQUksT0FBTyxJQUFYLENBQWdCLE1BQWhCLENBQVg7QUFDQSx5QkFBUyxHQUFULENBQWE7QUFDVCxnQ0FBWSxJQURIO0FBRVQsOEJBQVUsRUFGRDtBQUdULGdDQUFZLFFBSEgsRTtBQUlULDRCQUFRLE1BSkM7QUFLVCxpQ0FBYSxDQUxKO0FBTVQsMEJBQU0sTUFORztBQU9ULDBCQUFNLENBQUMsWUFBWSxLQUFaLEdBQW9CLFNBQVMsS0FBOUIsSUFBdUMsQ0FQcEM7QUFRVCx5QkFBSyxDQUFDLFlBQVksTUFBWixHQUFxQixTQUFTLE1BQS9CLElBQXlDLENBUnJDO0FBU1QsZ0NBQVksQ0FUSDtBQVVULGlDQUFhLFNBVko7QUFXVCx3Q0FBb0IsS0FYWDtBQVlULGdDQUFhLE1BQU0sRUFBTixDQUFTLFVBQVQsSUFBdUIsTUFBdkIsR0FBZ0MsSUFacEM7QUFhVCwrQkFBWSxRQUFRLEVBQVIsQ0FBVyxVQUFYLElBQXlCLFFBQXpCLEdBQW9DLElBYnZDLEVBQWI7OztBQWdCQSx1QkFBTyxLQUFQO0FBQ0EsdUJBQU8sR0FBUCxDQUFXLFdBQVg7QUFDQSx1QkFBTyxHQUFQLENBQVcsUUFBWCxFQUNILENBM0NEOztBQTRDQSxvQkFBUSxHQUFSLENBQVksRUFBRSxNQUFGLENBQVMsTUFBckI7QUFDQSxrQkFBTSxHQUFOLEdBQVksRUFBRSxNQUFGLENBQVMsTUFBckIsQ0FDSCxDQXBERDs7O0FBc0RBLG9CQUFZLGFBQVosQ0FBMEIsSUFBMUI7O0FBRUEsa0JBQVUsSUFBVixDQUFlLFVBQWYsRUFBMkIsVUFBM0IsRUFDSCxDQXBFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnR0EsV0FBTyxLQUFQO0FBQ0E7O0FBRUgsQ0F4TUQiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgICAkKCcudWkuY2hlY2tib3gnKVxuICAgICAgICAuY2hlY2tib3goKTtcbiAgICAvLyAgICB2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2MnKTtcbiAgICAvLyAgICAgdmFyIGltYWdlO1xuXG4gICAgdmFyIHNyY0ltZyA9IFwiaHR0cDovL2thbmtvcmUuc2VyaWZ1bWF0b21lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wOC8wMjBfJUU1JThDJTk3JUU0JUI4JThBLnBuZ1wiO1xuICAgIC8vIHZhciBwZXJzb24gPSB7fTtcbiAgICAvLyBwZXJzb24uZCA9IFt7VVJMOiBzcmNJbWcsIFBvc1g6IE1hdGgucmFuZG9tKCkqNTAwLCBQb3NZOiBNYXRoLnJhbmRvbSgpKjUwMH0sXG4gICAgLy8gICAgICAgICAgICAgIHtVUkw6IHNyY0ltZywgUG9zWDogTWF0aC5yYW5kb20oKSo1MDAsIFBvc1k6IE1hdGgucmFuZG9tKCkqNTAwfSxcbiAgICAvLyAgICAgICAgICAgICAge1VSTDogc3JjSW1nLCBQb3NYOiBNYXRoLnJhbmRvbSgpKjUwMCwgUG9zWTogTWF0aC5yYW5kb20oKSo1MDB9LFxuICAgIC8vICAgICAgICAgICAgICB7VVJMOiBzcmNJbWcsIFBvc1g6IE1hdGgucmFuZG9tKCkqNTAwLCBQb3NZOiBNYXRoLnJhbmRvbSgpKjUwMH0sXG4gICAgLy8gICAgICAgICAgICAgIHtVUkw6IHNyY0ltZywgUG9zWDogTWF0aC5yYW5kb20oKSo1MDAsIFBvc1k6IE1hdGgucmFuZG9tKCkqNTAwfV07XG5cbiAgICAvLyB2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2NhbnZhcycpO1xuICAgIC8vIHZhciBpO1xuICAgIC8vIGZvciAoaSA9IDA7IGkgPCBwZXJzb24uZC5sZW5ndGg7IGkrKylcbiAgICAvLyB7XG4gICAgLy8gICAvL3ZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIC8vICAgLy9pbWFnZS5zcmMgPSBwZXJzb24uZFtpXS5VUkw7XG4gICAgLy8gICB2YXIgVVJMID0gcGVyc29uLmRbaV0uVVJMO1xuICAgIC8vICAgdmFyIFBvc1ggPSBwZXJzb24uZFtpXS5Qb3NYO1xuICAgIC8vICAgdmFyIFBvc1kgPSBwZXJzb24uZFtpXS5Qb3NZO1xuXG4gICAgLy8gICBmYWJyaWMuSW1hZ2UuZnJvbVVSTChzcmNJbWcsIGZ1bmN0aW9uIChvSW1nKSB7XG4gICAgLy8gICAgIG9JbWcuc2V0KCdsZWZ0JywgUG9zWCkuc2V0KCd0b3AnLFBvc1kpO1xuICAgIC8vICAgICBjYW52YXMuYWRkKG9JbWcpO1xuICAgIC8vICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgLy8gICB9LCB7XCJsZWZ0XCI6IFBvc1gsIFwidG9wXCI6IFBvc1ksIFwic2NhbGVYXCI6IDAuMjUsIFwic2NhbGVZXCI6IDAuMjV9KTtcbiAgICAvLyB9XG59KTtcblxudmFyIG1heFdpZHRoID0gMTAwMFxuXG4kKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbWdTcmMgPSAnaHR0cDovL2ltYWdlLml0bWVkaWEuY28uanAvYml6aWQvYXJ0aWNsZXMvMTAwMy8wOS90c19kdW1teV9pbWFnZS5naWYnO1xuICAgIHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygnY2FudmFzJyk7XG4gICAgdmFyICRkb3dubG9hZCA9ICQoJyNkb3dubG9hZCcpO1xuICAgIHZhciAkdGV4dCA9ICQoJyN0ZXh0Jyk7XG4gICAgdmFyICRzdHJva2VDb2xvciA9ICQoJyNzdHJva2UtY29sb3InKTtcbiAgICB2YXIgJGZpbGxDb2xvciA9ICQoJyNmaWxsLWNvbG9yJyk7XG4gICAgdmFyIGxndG1UZXh0ID0gbnVsbDtcbiAgICB2YXIgJGZpbGUgPSAkKCdpbnB1dFt0eXBlPWZpbGVdJyk7XG4gICAgdmFyICRmb250RmFtaWxpZXMgPSAkKCcjZm9udC1mYW1pbGllcycpO1xuICAgIHZhciAkZm9udEZhbWlseSA9ICQoJyNmb250LWZhbWlseScpO1xuICAgIHZhciAkYm9sZCA9ICQoJyNib2xkJyk7XG4gICAgdmFyICRpdGFsaWMgPSAkKCcjaXRhbGljJyk7XG4gICAgLy92YXIgJHVybCA9ICQoJyN1cmwnKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdkcmFnb3ZlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSkub24oJ2Ryb3AnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRJbWFnZShlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzWzBdKTtcbiAgICB9KTtcblxuICAgICRmaWxlLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9KTtcblxuICAgICRkb3dubG9hZC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FudmFzLmRlYWN0aXZhdGVBbGwoKS5yZW5kZXJBbGwoKVxuICAgICAgICAkZG93bmxvYWQuYXR0cignaHJlZicsIGNhbnZhcy5nZXRFbGVtZW50KCkudG9EYXRhVVJMKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gJHVybC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGlmICghbGd0bVRleHQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGltZ1NyYyA9ICR1cmwudmFsKCk7XG5cbiAgICAvLyAgICAgY2FudmFzLmNsZWFyKCk7XG4gICAgLy8gICAgIHNldEltYWdlKCk7XG4gICAgLy8gICAgIC8vYWRkVGV4dHMoKTtcbiAgICAvLyAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIC8vIH0pO1xuXG4gICAgJHN0cm9rZUNvbG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFsZ3RtVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGd0bVRleHQuc2V0U3Ryb2tlKCRzdHJva2VDb2xvci52YWwoKSk7XG4gICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9KTtcblxuICAgICRmaWxsQ29sb3Iub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWxndG1UZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZ3RtVGV4dC5zZXRGaWxsKCRmaWxsQ29sb3IudmFsKCkpO1xuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSk7XG5cbiAgICAkZm9udEZhbWlsaWVzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJGZvbnRGYW1pbHkudmFsKCRmb250RmFtaWxpZXMudmFsKCkpO1xuICAgICAgICBpZiAoIWxndG1UZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZ3RtVGV4dC5zZXRGb250RmFtaWx5KCRmb250RmFtaWxpZXMudmFsKCkpO1xuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSk7XG5cbiAgICAkZm9udEZhbWlseS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghbGd0bVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxndG1UZXh0LnNldEZvbnRGYW1pbHkoJGZvbnRGYW1pbHkudmFsKCkpO1xuICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSk7XG5cbiAgICAkYm9sZC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghbGd0bVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxndG1UZXh0LnNldEZvbnRXZWlnaHQoJGJvbGQuaXMoJzpjaGVja2VkJykgPyAnYm9sZCcgOiBudWxsKTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0pO1xuXG4gICAgJGl0YWxpYy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghbGd0bVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxndG1UZXh0LnNldEZvbnRTdHlsZSgkaXRhbGljLmlzKCc6Y2hlY2tlZCcpID8gJ2l0YWxpYycgOiBudWxsKTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0pO1xuXG5cblxuICAgIHZhciBzZXRJbWFnZSA9IGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyICRjYW52YXNXcmFwcGVyID0gJCgnLmwtY2FudmFzLWNvbnRlbnRzJyk7XG4gICAgICAgIC8vdmFyIG1heEhlaWdodCA9ICRjYW52YXNXcmFwcGVyLmhlaWdodCgpO1xuICAgICAgICB2YXIgbWF4V2lkdGggPSAkY2FudmFzV3JhcHBlci53aWR0aCgpO1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gJGNhbnZhc1dyYXBwZXIuaGVpZ2h0KCk7XG5cbiAgICAgICAgdmFyIGltYWdlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXI7XG5cbiAgICAgICAgaW1hZ2VSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy92YXIgaW1hZ2UgPSBuZXcgSW1hZ2U7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2U7XG4gICAgICAgICAgICAvL2ltYWdlLnNldEF0dHJpYnV0ZSgnY3Jvc3NPcmlnaW4nLCAnYW5vbnltb3VzJyk7XG4gICAgICAgICAgICAvL2ltYWdlLnNyYyA9IGltZ1NyYztcblxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZhYnJpY0ltYWdlID0gbmV3IGZhYnJpYy5JbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgZmFicmljSW1hZ2Uuc2V0KHsgc2VsZWN0YWJsZTogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGFzcGVjdCA9IGZhYnJpY0ltYWdlLndpZHRoIC8gZmFicmljSW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IE1hdGgubWluKGltYWdlLndpZHRoLCBtYXhXaWR0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0O1xuICAgICAgICAgICAgICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBpbWFnZS53aWR0aCAqIChtYXhIZWlnaHQgLyBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmFicmljSW1hZ2Uuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuc2V0V2lkdGgoZmFicmljSW1hZ2Uud2lkdGgpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5zZXRIZWlnaHQoZmFicmljSW1hZ2UuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGxndG1UZXh0ID0gbmV3IGZhYnJpYy5UZXh0KCdMR1RNJyk7XG4gICAgICAgICAgICAgICAgbGd0bVRleHQuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDY0LFxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW1wYWN0JywgLy8kZm9udEZhbWlseS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnIzAwMCcsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IChmYWJyaWNJbWFnZS53aWR0aCAtIGxndG1UZXh0LndpZHRoKSAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogKGZhYnJpY0ltYWdlLmhlaWdodCAtIGxndG1UZXh0LmhlaWdodCkgLyAyLFxuICAgICAgICAgICAgICAgICAgICBjb3JuZXJTaXplOiA2LFxuICAgICAgICAgICAgICAgICAgICBjb3JuZXJDb2xvcjogJyM2Njk5ZmYnLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAoJGJvbGQuaXMoJzpjaGVja2VkJykgPyAnYm9sZCcgOiBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAoJGl0YWxpYy5pcygnOmNoZWNrZWQnKSA/ICdpdGFsaWMnIDogbnVsbClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNhbnZhcy5jbGVhcigpXG4gICAgICAgICAgICAgICAgY2FudmFzLmFkZChmYWJyaWNJbWFnZSk7XG4gICAgICAgICAgICAgICAgY2FudmFzLmFkZChsZ3RtVGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBpbWFnZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuXG4gICAgICAgICRkb3dubG9hZC5hdHRyKCdkb3dubG9hZCcsICdMR1RNLnBuZycpO1xuICAgIH07XG5cblxuXG4gICAgLy8gZnVuY3Rpb24gYWRkVGV4dHMoKSB7XG5cbiAgICAvLyAgICAgbGd0bVRleHQgPSBuZXcgZmFicmljLlRleHQoJ0xHVE0nKTtcbiAgICAvLyAgICAgbGd0bVRleHQuc2V0KHtcbiAgICAvLyAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgLy8gICAgICAgICBmb250U2l6ZTogNjQsXG4gICAgLy8gICAgICAgICBmb250RmFtaWx5OiAnaW1wYWN0JywvLyRmb250RmFtaWx5LnZhbCgpLFxuICAgIC8vICAgICAgICAgc3Ryb2tlOiAnIzAwMCcsXG4gICAgLy8gICAgICAgICBzdHJva2VXaWR0aDogMixcbiAgICAvLyAgICAgICAgIGZpbGw6ICcjZmZmJyxcbiAgICAvLyAgICAgICAgIGxlZnQ6IChmYWJyaWNJbWFnZS53aWR0aCAtIGxndG1UZXh0LndpZHRoKSAvIDIsXG4gICAgLy8gICAgICAgICB0b3A6IChmYWJyaWNJbWFnZS5oZWlnaHQgLSBsZ3RtVGV4dC5oZWlnaHQpIC8gMixcbiAgICAvLyAgICAgICAgIGNvcm5lclNpemU6IDYsXG4gICAgLy8gICAgICAgICBjb3JuZXJDb2xvcjogJyM2Njk5ZmYnLFxuICAgIC8vICAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcbiAgICAvLyAgICAgICAgIGZvbnRXZWlnaHQ6ICgkYm9sZC5pcygnOmNoZWNrZWQnKSA/ICdib2xkJyA6IG51bGwpLFxuICAgIC8vICAgICAgICAgZm9udFN0eWxlOiAoJGl0YWxpYy5pcygnOmNoZWNrZWQnKSA/ICdpdGFsaWMnIDogbnVsbClcbiAgICAvLyAgICAgfSk7XG5cblxuICAgIC8vICAgICAvL2NhbnZhcy5hZGQoZmFicmljSW1hZ2UpO1xuICAgIC8vICAgICBjYW52YXMuYWRkKGxndG1UZXh0KTtcbiAgICAvLyB9XG5cbiAgICBjYW52YXMuY2xlYXIoKTtcbiAgICBzZXRJbWFnZSgpO1xuICAgIC8vYWRkVGV4dHMoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
