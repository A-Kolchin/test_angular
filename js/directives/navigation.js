angular.module('test').directive('navMenu', function ($window) {
    return {
        restrict: 'EA',
        link : function (scope, element, attr) {
            scope.showResponsive = (this.innerWidth < 640);

            angular.element($window).bind('resize', function(){
                scope.showResponsive = (this.innerWidth < 640);
                scope.$apply();
            });
        }
    };
});