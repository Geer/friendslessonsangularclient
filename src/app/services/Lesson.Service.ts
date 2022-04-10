
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { HandleErrorService } from './handleerror.service';
import { MessageErrorService } from './message.service';
import Lesson from '../model/Lesson';

@Injectable({providedIn: 'root'})
export class LessonService extends HandleErrorService {
    private baseUrl = 'https://localhost:44377/api'

    constructor(private http: HttpClient, messageService: MessageErrorService) {
      super(messageService)
    }


    getLessonsByUserId(id: number) {
    return this.http.get<Lesson[]> (`${this.baseUrl}/lesson/${id}`)
    .pipe(
        map(elem => elem as Lesson[]),
        tap( _ => console.log('Lessons list by user id')),
        catchError(this.handleError<Lesson[]>('', new Array<Lesson>() )));
    }
}