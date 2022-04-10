import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './components/users/userlist.components';
import { LessonListComponent } from './components/Lessons/lessonlist.component';
import { FriendByUserListComponent } from './components/Friends/friendbyuserlist.component';
import { AllFriendshipComponent } from './components/Friends/allfriendshiplist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LessonListComponent,
    FriendByUserListComponent,
    AllFriendshipComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//FormsModule,
