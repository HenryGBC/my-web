import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sidebarContent: any;
  showSidebar: boolean;
  constructor() { 

    this.sidebarContent = {
      posts: false,
      code: false,
      mentor: false,
      who: false
    }
  }

  ngOnInit() {
  }

  closeSidebar(){
    this.showSidebar = false;
  }

  activeSidebar(value){
    this.showSidebar = true;
    this.sidebarContent = {
      posts: false,
      code: false,
      mentor: false,
      who: false
    }
    this.sidebarContent[value] = true;
  }
}
