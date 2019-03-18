import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  private heroes;
  constructor(private activateRoute:ActivatedRoute,private _heroesService:HeroesService) {
   }
   getHeroes() {
    return this.heroes;
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params =>{
      this.heroes=this._heroesService.buscarHeroe(params['nombre']);
    })

  }

}
