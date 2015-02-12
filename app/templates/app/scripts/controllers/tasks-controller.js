'use strict';

angular.module('App.Controllers')

.controller('taskController', ['$log', '$scope',

    function ($log, $scope) {
        $log.debug('taskController loading');

        $scope.addTask = function () {
            $scope.tasks.push({
                name: $scope.newTask,
                done: false
            });

            /* Using Restangular method */
            $scope.tasks.put();
        };
    }]);
