import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HeroesService } from '../servicios/heroes.service';
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(_heroesService) {
        this._heroesService = _heroesService;
        this.heroes = this._heroesService.getHeroes();
    }
    HeroesComponent.prototype.getHeroes = function () {
        return this.heroes;
    };
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HeroesService])
    ], HeroesComponent);
    return HeroesComponent;
}());
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map