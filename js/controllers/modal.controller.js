angular.module('test').controller('modalController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance){
    console.log('imnc;');
    $scope.submit = function (_name, _price) {
        $uibModalInstance.close({
            name : _name,
            price : _price,
            date : new Date().toString().split(' GMT')[0]
        });
    };

    $scope.cancel = function(){
        $uibModalInstance.dismiss('cancel');
    };
}]);