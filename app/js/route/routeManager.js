 

var managemodule =angular.module('managemodule',
		['ngRoute', 'manageModuleController','manageModuleService', 'uploadModuleController',
            'seacrchModuleController', 'systemInfoController', 'systemInfoService',
            'mainController', 'mainService', 'taskViewController', 'addNewTaskController']);

managemodule.config(function($httpProvider){
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

managemodule.config(['$routeProvider',
                    function ($routeProvider) {
                      $routeProvider.
                        when('/module-show', {
                          templateUrl: 'js/moduleView/viewModules.html',
                          controller: 'ModuleListCtrl',
                        }).
                        when('/view-search', {
                          templateUrl: 'js/moduleSearch/searchModules.html',
                            controller: 'searchModuleCtrl'
                        }).
                      when('/view-search-module-details/:UUID', {
                          templateUrl: 'js/moduleSearch/searchModulesViewDetails.html',
                            controller: 'searchModuleCtrl'
                        }).
                        when('/upload-module', {
                        	templateUrl: 'js/moduleUpload/uploadModule.html',
                            controller: 'uploadModuleCtrl'
                        }).
                         when('/upload-module-normal', {
                          templateUrl: 'js/moduleUpload/uploadModuleNormal.html',
                            controller: 'ModuleUploadCtrl'
                        }).
                        when('/module-show/:classUUID', {
                        	templateUrl: 'js/moduleView/viewModuleDetails.html',
                        	controller: 'ModuleListCtrl',
                        }).
                        when('/check-for-module-updates', {
                        	templateUrl: 'js/moduleUpdate/moduleUpdateDetails.html',
                        	controller: 'ModuleListCtrl',
                        }).
                        when('/system-info', {
                          templateUrl: 'js/systeminfo/systemInfo.html',
                          controller: 'systeminfoCtrl',
                        }).
                      when('/task-view', {
                          templateUrl: 'js/taskView/taskView.html',
                          controller: 'taskViewCtrl',
                      }).
                      when('/task-view/:classUUID', {
                          templateUrl: 'js/taskManage/addNewTask.html',
                          controller: 'addNewTaskCtrl',
                      }).
                      when('/add-new-task', {
                          templateUrl: 'js/taskManage/addNewTask.html',
                          controller: 'addNewTaskCtrl',
                      }).

                      when('/add-ons-test', {
                          templateUrl: 'js/moduleView/testDelete.html',
                          controller: 'ModuleListCtrl',
                      }).
                        otherwise({
                          //redirectTo: '/module-show'
                          templateUrl: 'js/main/home.html',
                          controller: 'mainHomeCtrl',
                        
                        });
                    }]);


