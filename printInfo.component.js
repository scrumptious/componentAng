function PrintInfoCtrl() {

}

angular.module('appName', []).component('printInfo', {
	template: '<p>Hello {{$ctrl.spawn.name}}!</p>',
	controller: 'PrintInfoCtrl'
});