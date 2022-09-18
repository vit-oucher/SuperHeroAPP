import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPayloadResponse} from "../interface/app.interface";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getStartHeroes(): Observable<IPayloadResponse> {
    return this.httpClient.get<IPayloadResponse>(`https://www.superheroapi.com/api.php/2903842069760948/search/a`);
  }

  public getSearchedHeroes(heroName: string): Observable<IPayloadResponse> {
    return this.httpClient.get<IPayloadResponse>(`https://www.superheroapi.com/api.php/2903842069760948/search/${heroName}`);
  }

  public getHeroById(heroId: any): Observable<any> {
    return this.httpClient.get<any>(`https://www.superheroapi.com/api.php/2903842069760948/search/${heroId}`)
  }
}
