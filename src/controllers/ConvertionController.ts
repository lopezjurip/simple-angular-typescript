/// <reference path="../../typings/tsd.d.ts"/>

module converter {
    "use strict";

    interface IUnit {
        type: string;
    }

    export class ConvertionController {
        units: IUnit[];
        current: IUnit;

        constructor() {
            this.units = [
                {type: "lenght"},
                {type: "mass"},
                {type: "time"},
            ];
            this.current = this.units[0];
        }
    }
}
