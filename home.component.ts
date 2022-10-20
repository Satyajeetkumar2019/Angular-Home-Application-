import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
public msg='Wellcome to Angular 14';



  constructor() { }

  ngOnInit(): void {
  }

}
