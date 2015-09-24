/// <reference path="../../typings/tsd.d.ts"/>
var converter;
(function (converter) {
    "use strict";
    var ConvertionController = (function () {
        function ConvertionController() {
            this.units = [
                { type: "lenght" },
                { type: "mass" },
                { type: "time" },
            ];
            this.current = this.units[0];
        }
        ConvertionController.prototype.setCurrent = function () {
            alert(this.current);
        };
        return ConvertionController;
    })();
    converter.ConvertionController = ConvertionController;
})(converter || (converter = {}));
/// <reference path="../../typings/tsd.d.ts"/>
var converter;
(function (converter) {
    "use strict";
    var FormulaController = (function () {
        function FormulaController() {
        }
        return FormulaController;
    })();
    converter.FormulaController = FormulaController;
})(converter || (converter = {}));
/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="./controllers/ConvertionController.ts"/>
/// <reference path="./controllers/FormulaController.ts"/>
var converter;
(function (converter) {
    "use strict";
    var app = angular.module("converter-ts", ["ngRoute"]);
    app.controller("ConvertionController", converter.ConvertionController);
    app.controller("FormulaController", converter.FormulaController);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
            controller: "ConvertionController",
            controllerAs: "convertionCtrl",
            templateUrl: "src/partials/main_menu.html"
        })
            .when("/formula", {
            controller: "FormulaController",
            templateUrl: "src/partials/formula.html"
        })
            .otherwise({
            redirectTo: "/"
        });
    });
})(converter || (converter = {}));
