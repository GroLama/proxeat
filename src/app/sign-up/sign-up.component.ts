import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  faCircle = faCircle;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToLogin(){
    this.router.navigate(['/login'])
  }
}
