angular.module('app', [])
.controller('MyController', function($scope) {
    $scope.submitName = function() {
        $scope.user = {
            name: $scope.newName
        };
    };
});

function initMap() {autocomplete = new google.maps.places.Autocomplete((document.getElementById('city')),
                { types: ['geocode'] });}

                $(function () {
                    // add input listeners
                    window.addEventListener( "load", function (event) {
                      var city = new google.maps.places.Autocomplete(
                        document.getElementById("city")
                      );
                      google.maps.event.addListener(
                        city,
                        "place_changed",
                        function () {
                          var from_place = city.getPlace();
                          var from_address = from_place.formatted_address;
                          $("#origin").val(from_address);
                        }
                      );
                    });
                })