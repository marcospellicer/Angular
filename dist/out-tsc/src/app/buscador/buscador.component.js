import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import { HeroesService } from '../servicios/heroes.service';
import { Router } from '@angular/router';
var BuscadorComponent = /** @class */ (function () {
    function BuscadorComponent(activateRoute) {
        this.activateRoute = activateRoute;
    }
    BuscadorComponent.prototype.ngOnInit = function () {
        this.activateRoute.params.suscribirse(function (params) {
            console.log(params['nombre']);
        });
    };
    BuscadorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-buscador',
            templateUrl: './buscador.component.html',
            styleUrls: ['./buscador.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], BuscadorComponent);
    return BuscadorComponent;
}());
export { BuscadorComponent };
//# sourceMappingURL=buscador.component.js.map