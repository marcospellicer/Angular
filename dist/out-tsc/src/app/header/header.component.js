import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route) {
        this.route = route;
        this.nombreHeroe = document.getElementById("nombre");
    }
    HeaderComponent.prototype.buscarHeroe = function (nombre) {
        console.log(nombre);
        this.route.navigate(["/buscador".nombre]);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map