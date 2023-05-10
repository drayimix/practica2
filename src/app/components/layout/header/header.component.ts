import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[]=[];
  ngOnInit(): void {
    this.items=[
      {
        label:'Login',
        icon:''
      },
      {
        label:'Settings',
        icon:''
      },
      {
        label:'Help',
        icon:''
      },
    ]
  }
}