 /*
    Copyright (c) 2015 GFT Appverse, S.L., Sociedad Unipersonal.
    This Source Code Form is subject to the terms of the Appverse Public License
    Version 2.0 (“APL v2.0”). If a copy of the APL was not distributed with this
    file, You can obtain one at http://www.appverse.mobi/licenses/apl_v2.0.pdf. [^]
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the conditions of the AppVerse Public License v2.0
    are met.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. EXCEPT IN CASE OF WILLFUL MISCONDUCT OR GROSS NEGLIGENCE, IN NO EVENT
    SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
    INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
    WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE)
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    POSSIBILITY OF SUCH DAMAGE.
    */
 'use strict';

 /*
  * Controller <%=name%>Controller
  * Pay attention to injection of dependencies (factories, entities and Angular objects).
  */
 angular.module('App.Controllers')

 .controller('<%=name%>GridController', ['$scope',
     function ($scope) {
         $scope.name = '<%=name%>';
         $scope.myData = [];
         <% mockentity.forEach(function(e) {
           %> $scope.myData.push({id:<%=e.id%>, name:"<%=e.name%>"})
         <% });%>

         function getColumnDefs() {
            if ($scope.myData) {
                var cols = [],
                    names = [];
                $scope.myData.forEach(function(e) {
                    for (var name in e) {
                        if (names.indexOf(name) == -1) {
                            var def = {
                                headerName: name,
                                field: name,
                                filter: 'text',
                                suppressMenu: true,
                                suppressSorting: true
                            }
                            names.push(name);
                            cols.push(def);
                        }
                    }
                });
                return cols;
            } else { return undefined }
        };

        $scope.gridOptions = {
             enableColResize: true,
             enableSorting: true,
             enableFilter: true,
             headerHeight: 48,
             rowHeight: 48,
             minColWidth: 70,
             angularCompileRows: true,
             suppressLoadingOverlay: true,
             onGridSizeChanged: function() {
                 $scope.gridOptions.api.sizeColumnsToFit();
             },
             columnDefs: getColumnDefs(),
             rowData: $scope.myData,
         };

         $scope.filter<%=name%> = function () {
             $scope.gridOptions.api.setQuickFilter($scope.filterText);
         };
}]);
