$(function() {
    'use strict';
    //Ajust Slider Height
    var winH    = $(window).height(),
        navH    = $('.navbar').innerHeight();

    $('offre').height(winH - navH);

});