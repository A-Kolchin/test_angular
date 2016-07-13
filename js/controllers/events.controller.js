angular.module('test').controller('eventsController', ['$scope', '$uibModal', function ($scope, $uibModal) {
    $scope.sum = 0;
    $scope.showAlert = {};
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.alerts = [
        { type: 'danger', msg: 'All events successfully removed from storage.' },
        { type: 'success', msg: 'Event added!' }
    ];

    $scope.priceSum = function(_price){
        if(_price){
            $scope.sum += _price;
        }
        else{
            angular.forEach($scope.events, function(value){
                $scope.sum += value.price;
            });
        }
    };

    $scope.addEvent = function(){
        var modal = $uibModal.open({
            animation: true,
            templateUrl: './templates/modal.tpl.html',
            controller:'modalController',
            size: 'small'
        });

        modal.result.then(function(_event){
            $scope.events.push(_event);
            window.localStorage.setItem('events', JSON.stringify($scope.events));
            $scope.priceSum(_event.price);
            $scope.showAlert[0] = false;
            $scope.showAlert[1] = true;
        });
    };

    $scope.resetEvents = function(){
        $scope.events = [];
        window.localStorage.clear();
        $scope.showAlert[1] = false;
        $scope.showAlert[0] = true;
    };

    $scope.getEvents = function(){
        return $scope.events = window.localStorage.getItem('events');
    };

    $scope.goHome = function(){
        $scope.currentPage = 1;
    };

    $scope.closeAlert = function(index) {
        $scope.showAlert[index] = null;
    };

    $scope.events = ($scope.getEvents()) ? JSON.parse($scope.getEvents()) : [];

    $scope.priceSum();
}]);