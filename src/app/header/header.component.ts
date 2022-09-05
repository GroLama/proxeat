import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeftLong, faGear } from '@fortawesome/free-solid-svg-icons';
import { RouterServiceService } from '../router-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faGear = faGear;
  faArrowLeft = faArrowLeftLong;
  previous:string ='';

  constructor(private RouterService:RouterServiceService, private router:Router) { }

  ngOnInit(): void {
    this.previous = this.RouterService.getPreviousUrl();
  }
  public onReturn():void{
    this.router.navigate(['/'+this.previous])
  }
}
