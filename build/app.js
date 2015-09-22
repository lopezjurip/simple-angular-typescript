/// <reference path="../typings/tsd.d.ts"/>
var converter;
(function (converter) {
    "use strict";
    converter.app = angular.module("converter-ts", []);
})(converter || (converter = {}));
/// <reference path="../../typings/tsd.d.ts"/>
var converter;
(function (converter) {
    "use strict";
    var Contact = (function () {
        function Contact(name, info) {
            this.name = name;
            this.info = info;
        }
        return Contact;
    })();
    var SettingsCtrl = (function () {
        function SettingsCtrl() {
            this.contact = new Contact("Patricio", [
                { type: "phone", value: "+56 9999 8888" },
                { type: "email", value: "patiwi@uc.cl" }
            ]);
        }
        SettingsCtrl.prototype.greet = function () {
            alert(this.contact.name);
        };
        SettingsCtrl.prototype.addInfo = function () {
            this.contact.info.push({ type: "email", value: "example@uc.cl" });
        };
        SettingsCtrl.prototype.cleanInfo = function (info) {
            info.type = "phone";
            info.value = "";
        };
        SettingsCtrl.prototype.removeInfo = function (info) {
        };
        return SettingsCtrl;
    })();
    converter.SettingsCtrl = SettingsCtrl;
    converter.app.controller("SettingsCtrl", SettingsCtrl);
})(converter || (converter = {}));
/// <reference path="src/app.ts"/>
/// <reference path="src/controllers/SettingsCtrl.ts"/>
