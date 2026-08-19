import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ApiService {
  readonly httpClient = inject(HttpClient);

  get(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/template');
  }
}