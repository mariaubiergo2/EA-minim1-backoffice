import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { SharedDataService } from 'src/service/challenge.sharedservices';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent {

constructor(private userService: UserService, private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    this.obtenerFriends();
  }

  friends: String [] = [];

  obtenerFriends(){
    this.userService.getUserFriends("6440f149196480d380a79ff9") //id de prova    
  }


}

