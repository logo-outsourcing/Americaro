$(document).on('click', 'a', function (event) {

    event.preventDefault();

});
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 6;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
$(".brands__item").on('click', function () {
    $('.brands__item').removeClass("brands__item--active");
    $('.brands__item .brands__item--link').removeClass("brands__active");
    $(this).addClass("brands__item--active");
    $(this).children().addClass("brands__active");
});
(function () {

    var selectTabs = $('.select-tabs');
    selectTabs.on('change', function (e) {
        $('.brands__list li a').eq($(this).val()).tab('show');
    });

})();
$(".video__play").on("click", function () {
    $(".video__modal").toggleClass("video__modal--hide");
        $(".video__modal .video__item").html('<iframe class="video__item--wrap" src="https://www.youtube-nocookie.com/embed/Q8Cj5kog1_Y" allowfullscreen></iframe>')});
$(".video__close").on("click", function () {
    $(".video__modal").toggleClass("video__modal--hide");
    $(".video__modal .video__item").html('');
});