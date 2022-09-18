import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../../servises/hero.services";
import {FormControl} from "@angular/forms";
import {IPayloadResponse} from "../../../interface/app.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public heroes: any[] = [];

  public searchControl: FormControl = new FormControl('');

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroService.getStartHeroes().subscribe((data:IPayloadResponse) => {
      this.heroes = data.results;
      console.log(data.results)
    });
  }


  public searchHeroes(): void {
    if (this.searchControl.value) {
      this.heroService.getSearchedHeroes(this.searchControl.value).subscribe((searchedHeroes:IPayloadResponse) => {
        this.heroes = searchedHeroes.results;
        console.log(searchedHeroes.results)
      });
    }
  }

  public goToDetailsHero(hero: any): void {
    console.log(hero);
    if (hero.id) {
      this.router.navigate([`/Hero-detail`, hero.id])
    }
  }
}
