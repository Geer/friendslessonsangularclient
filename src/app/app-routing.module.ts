import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFriendshipComponent } from './components/Friends/allfriendshiplist.component';
import { FriendByUserListComponent } from './components/Friends/friendbyuserlist.component';
import { LessonListComponent } from './components/Lessons/lessonlist.component';
import { UserListComponent } from './components/users/userlist.components';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id/lessons/:userName', component: LessonListComponent },
  { path: 'users/:id/friends/:userName', component: FriendByUserListComponent },
  { path: 'users/friendships', component: AllFriendshipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
