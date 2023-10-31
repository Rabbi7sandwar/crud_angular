import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  pageData: any
  constructor( private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.list()
  }

  goBack(){
    this.router.navigate(['/']);
  }

  list(){
    this.pageData = this.dataService.data()
  }



}
