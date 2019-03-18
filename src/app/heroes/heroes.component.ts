import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes;
  constructor(private _heroesService:HeroesService) {
    this.heroes=this._heroesService.getHeroes();
  }
  getHeroes() {
    return this.heroes;
  }
  
  ngOnInit() {
  }

}
