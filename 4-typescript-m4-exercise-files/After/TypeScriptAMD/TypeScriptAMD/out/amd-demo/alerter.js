define(["require", "exports", "./dataservice"], function (require, exports, ds) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dataservice = new ds.DataService();
    var Alerter = /** @class */ (function () {
        function Alerter() {
            this.name = 'John';
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataservice.getMessage();
            alert(msg + ', ' + this.name);
        };
        ;
        return Alerter;
    }());
    exports.Alerter = Alerter;
});
//# sourceMappingURL=alerter.js.map