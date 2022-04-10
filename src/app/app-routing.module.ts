import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFriendshipComponent } from './components/Friends/allfriendshiplist.component';
import { FriendByUserListComponent } from './components/Friends/friendbyuserlist.component';
import { LessonListComponent } from './components/Lessons/lessonlist.component';
import { UserListComponent } from './components/users/userlist.components';

const routes: Routes = [
  { path: '', redirectTo: 'userList', pathMatch: 'full' },
  { path: 'userList', component: UserListComponent },
  { path: 'lessonsList/:id/:userName', component: LessonListComponent },
  { path: 'friendsList/:id/:userName', component: FriendByUserListComponent },
  { path: 'allFriendshipList', component: AllFriendshipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
