import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../../servises/hero.services";
import {switchMap} from "rxjs";
import {IPayloadResponse} from "../../../interface/app.interface";

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrls: ['./hero-detail-page.component.scss']
})
export class HeroDetailPageComponent implements OnInit {
  public hero: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((data) => this.heroService.getHeroById(data['id']))
        )
      .subscribe((hero: IPayloadResponse) => {
      // this.heroService.getHeroById(data.id);
      console.log(hero);
    })


  }
}
