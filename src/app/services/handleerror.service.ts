import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageErrorService } from './message.service';


@Injectable()
export class HandleErrorService {
  constructor(private messageService: MessageErrorService) { }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  log(message: string) {
    this.messageService.add(`${message}`);
  }
  
}