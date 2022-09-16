import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroServise {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getStartHeroes(): Observable<any> {
    return this.httpClient.get('https://superheroapi.com/api.php/2903842069760948/search/a');
  }
}
