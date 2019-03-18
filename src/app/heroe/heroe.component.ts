import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  id:number;
  heroe:any ={};

  constructor(private activatedRoute:ActivatedRoute , private _heroesService:HeroesService) {
      this.activatedRoute.params.subscribe(params => {
        this.id=params['id']
      })
      this.heroe=this._heroesService.getHeroe(this.id);
   }

  ngOnInit() {
  }

}
