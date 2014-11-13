var app = angular.module('ResulvIT',[]);

app.controller('ResulvITController',function($scope) {
        $scope.planets = [];
        $scope.plnames = "";
        $scope.planetTmp = [];
        $scope.planetList = [];

        $scope.planet_data = [
                {'id':0,'name':'MERCURY'},
                {'id':1,'name':'VENUS'},
                {'id':2,'name':'EARTH'},
                {'id':3,'name':'MARS'},
                {'id':4,'name':'JUPITER'},
                {'id':5,'name':'SATURN'},
                {'id':6,'name':'URANUS'},
                {'id':7,'name':'NEPTUNE'},
                {'id':8,'name':'PLUTO'}
        ];

        $scope.save = function() {

                $scope.planetTmp = $scope.planet_data.filter(function (p) {
                        return p.name == $scope.planetname.toUpperCase();
                });

                $scope.planetList = $scope.planetList.concat({name: $scope.planetname});
                $scope.planets = $scope.planets.concat([{id:$scope.planetTmp[0].id,name: $scope.planetname}]);
                $scope.planetname = "";
        };
});