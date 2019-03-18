import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../servicios/heroes.service';
var HeroeComponent = /** @class */ (function () {
    function HeroeComponent(activatedRoute, _heroesService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._heroesService = _heroesService;
        this.heroe = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.heroe = this._heroesService.getHeroe(this.id);
    }
    HeroeComponent.prototype.ngOnInit = function () {
    };
    HeroeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-heroe',
            templateUrl: './heroe.component.html',
            styleUrls: ['./heroe.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, HeroesService])
    ], HeroeComponent);
    return HeroeComponent;
}());
export { HeroeComponent };
//# sourceMappingURL=heroe.component.js.map