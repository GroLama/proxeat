import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  current='';
  constructor(private RouterService:RouterServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.previous = this.RouterService.getPreviousUrl();
    this.current = this.route.snapshot.data['title']
  }
  public onReturn():void{
    this.router.navigate(['/'+this.previous])
  }
}