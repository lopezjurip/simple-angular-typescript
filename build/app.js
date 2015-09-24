/// <reference path="../../typings/tsd.d.ts"/>
var converter;
(function (converter) {
    "use strict";
})(converter || (converter = {}));
/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="./controllers/SettingsCtrl.ts"/>
var converter;
(function (converter) {
    "use strict";
    var app = angular.module("converter-ts", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
            controller: "ConvertionController",
            templateUrl: "partials/main_menu.html"
        })
            .when("/formula", {
            controller: "FormulaController",
            templateUrl: "partials/formula.html"
        })
            .otherwise({
            redirectTo: "/"
        });
    });
})(converter || (converter = {}));
