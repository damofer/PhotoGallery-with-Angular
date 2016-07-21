angular.module('app', [])


.controller('mediaController', function($scope) {


$scope.photos = [
    {"name":"face", "year":"2015","img":"img/media/face.png"},
    {"name":"balloons", "year":"2014","img":"img/media/balloons.png"},
    {"name":"city", "year":"2009","img":"img/media/city.png"},
    {"name":"bike", "year":"2005","img":"img/media/bike.png"},
    {"name":"radio", "year":"2012","img":"img/media/radio.png"},
    {"name":"bus", "year":"2005","img":"img/media/bus.png"},
    {"name":"bass", "year":"2005","img":"img/media/bass.png"},
    {"name":"face2", "year":"2005","img":"img/media/face2.png"},
    {"name":"face3", "year":"2005","img":"img/media/face3.png"}


    ];


});