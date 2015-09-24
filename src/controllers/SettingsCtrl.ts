/// <reference path="../../typings/tsd.d.ts"/>

module converter {
    "use strict";

    interface IInfo {
        type: string;
        value: string;
    }

    class Contact {
        constructor(public name: string, public info: IInfo[]) {}
    }

    export class SettingsCtrl {
        public contact: Contact;

        constructor() {
            this.contact = new Contact("Patricio", [
                {type: "phone", value: "+56 9999 8888"},
                {type: "email", value: "email@host.com"}
            ]);
        }

        public greet() {
            alert(this.contact.name);
        }

        public addInfo() {
            this.contact.info.push({type: "email", value: "example@uc.cl"});
        }

        public cleanInfo(info: IInfo) {
            info.type = "phone";
            info.value = "";
        }

        public removeInfo(info: IInfo) {
            // ...
        }
    }
}
