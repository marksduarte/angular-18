import {HttpClient} from "@angular/common/http";
import {ErrorHandler, Injectable, NgZone, inject} from "@angular/core";

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

  private readonly httpClient = inject(HttpClient);
  private readonly zone = inject(NgZone);

  handleError(error: unknown): void {
    // the NgZone guarantee that the error handler is called in the angular zone
    this.zone.run(() => {
      // log error, send it to backend or something...
      console.warn('Custom Error Handler: ', error)
    });
  }

}
