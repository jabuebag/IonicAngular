app.controller('MainCtrl', function($scope) {
    $scope.toggle = function() {
        alert('This is a click event');
    };
});

app.controller('IndexCtrl', function($scope, PanoDataService, $ionicPopover, $state) {
    $scope.panoData = PanoDataService.getAll();
    $ionicPopover.fromTemplateUrl('template/popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.goPage = function(index) {
        $state.go('panoview', { id: index });
        $scope.popover.hide();
    };
});

app.controller('PanoCtrl', function($scope, $stateParams, PanoDataService, $ionicHistory) {
    $scope.goBack = function() {
        $ionicHistory.goBack();
    };
    $scope.$on('$ionicView.loaded', function(event) {
        $scope.panoUrl = PanoDataService.getByIndex($stateParams.id).panoUrl
        var viewFrame = angular.element(document.querySelector('#PanoView'));
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "js/pano.js";
        viewFrame.append(s);
    });
});