import {inject, Injectable} from "@angular/core";
import {shareReplay} from "rxjs";
import { ApiService } from "./api.service";

@Injectable({providedIn: 'root'})
export class FacadeService {
  readonly apiService = inject(ApiService);

  getTemplate() {
    return this.apiService.get().pipe(shareReplay());
  }
}