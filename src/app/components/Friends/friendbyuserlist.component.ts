import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import User from "src/app/model/User";
import { UserService } from "src/app/services/User.Service";

@Component({
    selector: 'friend-by-user-list',
    templateUrl: './friendbyuserlist.component.html',
    styleUrls: ['./friendbyuserlist.component.css']
    })

export class FriendByUserListComponent implements OnInit {

    friends: User[] = [];
    id: any;
    sub: any;
    userName: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.id = params.get('id'); 
       this.userName = params.get('userName'); 
       this.loadfriendsList();
   });
  }
  
  
  loadfriendsList() {
      let self = this;
      if (self.friends.length === 0) {
        var id = parseInt(self.id);
        if (!isNaN(id)) {
          self.userService.getFriendsByUserId(id)
          .subscribe(response =>
            self.friends = response);
        }
      }
  }

}