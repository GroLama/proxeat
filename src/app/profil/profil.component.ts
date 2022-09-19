import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DbServiceService } from '../db-service.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  uid:string='';
  userData:User ={
    uid: "",
   email: "",
   displayName: "",
   photoURL: "",
   emailVerified:false,
   phone:""
  };
  constructor(private dbService:DbServiceService,private authService:AuthService) { }
  ngOnInit(): void {
    this.uid = this.dbService.getUserUID();
    let userInfo = this.dbService.getUserInfo(this.uid)
    userInfo.forEach(item=>{
      this.userData = item.data() as User;

    })

  }

}
