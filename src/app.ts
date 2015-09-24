/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="./controllers/ConvertionController.ts"/>
/// <reference path="./controllers/FormulaController.ts"/>

module converter {
    "use strict";

    const app = angular.module("converter-ts", ["ngRoute"]);

    app.controller("ConvertionController", ConvertionController);
    app.controller("FormulaController", FormulaController);

    app.config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider
            .when("/", {
                controller: "ConvertionController",
                controllerAs: "convertionCtrl",
                templateUrl: "src/partials/main_menu.html",
            })
            .when("/formula", {
                controller: "FormulaController",
                templateUrl: "src/partials/formula.html",
            })
            .otherwise({
                redirectTo: "/"
            });
    });
}
