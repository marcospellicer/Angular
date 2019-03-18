import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeatureRoutingModule } from './app.routes';
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './heroe/heroe.component';
import { BuscadorComponent } from './buscador/buscador.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                FooterComponent,
                HeroesComponent,
                HomeComponent,
                AboutComponent,
                HeroeComponent,
                BuscadorComponent
            ],
            imports: [
                BrowserModule,
                FeatureRoutingModule
            ],
            providers: [
                HeroesService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map