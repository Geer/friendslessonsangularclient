import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import User from "src/app/model/User";
import { UserService } from "src/app/services/User.Service";

@Component({
    selector: 'all-friendship-list',
    templateUrl: './allfriendshiplist.component.html',
    styleUrls: ['./allfriendshiplist.component.css']
    })
export class AllFriendshipComponent implements OnInit {
    
    friends: Map<string, User[]> = new Map<string, User[]>();

    constructor(private userService: UserService) { }


    ngOnInit(): void {
        this.loadAllFriendshipList();
    }
    
    
    loadAllFriendshipList() {
    let self = this;
    if (self.friends.size === 0) 
    { 
        self.userService.getAllFriendshipList()   
        .subscribe(response =>
        self.friends = response);
        console.log('users:' + this.friends);
    }
  }
  getValues(): Array<User[]> {
    return Array.from(this.friends.values());
  }
}