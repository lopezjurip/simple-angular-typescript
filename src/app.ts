/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="./controllers/SettingsCtrl.ts"/>

module converter {
    "use strict";

    const app = angular.module("converter-ts", []);

    app.controller("SettingsCtrl", SettingsCtrl);
}
