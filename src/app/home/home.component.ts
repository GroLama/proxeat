import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbServiceService } from '../db-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private dbService:DbServiceService) { }

  ngOnInit(): void {
  }
  navigateToSignUp(){
    this.router.navigate(['/signup']);
  }
}
