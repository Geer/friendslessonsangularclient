import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { HandleErrorService } from './handleerror.service';
import { MessageErrorService } from './message.service';
import User from '../model/User';

@Injectable({providedIn: 'root'})
export class UserService extends HandleErrorService {
  private baseUrl = 'https://localhost:44377/api'

  constructor(private http: HttpClient, messageService: MessageErrorService) {
    super(messageService)

    }


  getUsersList() {
    return this.http.get<User[]> (`${this.baseUrl}/user`)
      .pipe(
        map(elem => elem as User[]),
        tap( _ => console.log('Users list')),
        catchError(this.handleError<User[]>('', new Array<User>() ))
      );
  }

  getFriendsByUserId(id: number) {
    return this.http.get<User[]> (`${this.baseUrl}/User/friendship/${id}`)
    .pipe(
        map(elem => elem as User[]),
        tap( _ => console.log('Friends list by user id')),
        catchError(this.handleError<User[]>('', new Array<User>() )));
    }

  getAllFriendshipList() {
    return this.http.get<Map<string, User[]>> (`${this.baseUrl}/User/friendship`)
    .pipe(
        map(elem => elem as Map<string, User[]>),
        tap( _ => console.log('All friendship list')),
        catchError(this.handleError<Map<string, User[]>>('', new Map<string, User[]>() )));
  }
}