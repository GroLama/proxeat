import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
  uid:string='';
  userData:User ={
    uid: "",
   email: "",
   displayName: "",
   photoURL: "",
   emailVerified:false,
   phone:""
  };
  constructor(private dbService:DbServiceService) { }

  ngOnInit(): void {
    this.uid = this.dbService.getUserUID();
    let userInfo = this.dbService.getUserInfo(this.uid)
    userInfo.forEach(item=>{
      this.userData = item.data() as User;
      console.log(this.userData);

    })


  }
  sendData(username:string,email:string,password:string,phone:string){
    console.log("dede");

    this.dbService.setUserInfo(this.uid,username,email,password,phone);
  }
}
