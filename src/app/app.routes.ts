import { Routes,RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { BuscadorComponent } from './buscador/buscador.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'buscador/:nombre', component: BuscadorComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', component: HomeComponent },

];

export const FeatureRoutingModule =  RouterModule.forRoot(routes);
