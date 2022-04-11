import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { HandleErrorService } from './handleerror.service';
import { MessageErrorService } from './message.service';
import User from '../model/User';
import Lesson from '../model/Lesson';
import { Friendship } from '../model/Friendship';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UserService extends HandleErrorService {
  
  private baseUrl = `${environment.API_URL}/api`

  constructor(private http: HttpClient, messageService: MessageErrorService) {
    super(messageService)

    }


  getUsersList() {
    return this.http.get<User[]> (`${this.baseUrl}/users`)
      .pipe(
        map(elem => elem as User[]),
        tap( _ => console.log('Users list')),
        catchError(this.handleError<User[]>('', new Array<User>() ))
      );
  }

  getFriendsByUserId(id: number) {
    return this.http.get<User[]> (`${this.baseUrl}/users/${id}/friendships`)
    .pipe(
        map(elem => elem as User[]),
        tap( _ => console.log('Friends list by user id')),
        catchError(this.handleError<User[]>('', new Array<User>() )));
    }

  getAllFriendshipList() {
    return this.http.get<Friendship[]> (`${this.baseUrl}/friendships`)
    .pipe(
        map(elem => elem as Friendship[]),
        tap( _ => console.log('All friendship list')),
        catchError(this.handleError<Friendship[]>('', Array<Friendship>() )));
  }

  getLessonsByUserId(id: number) {
    return this.http.get<Lesson[]> (`${this.baseUrl}/users/${id}/lessons`)
    .pipe(
        map(elem => elem as Lesson[]),
        tap( _ => console.log('Lessons list by user id')),
        catchError(this.handleError<Lesson[]>('', new Array<Lesson>() )));
    }
}