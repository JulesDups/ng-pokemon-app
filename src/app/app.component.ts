import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  color:string;
  ngOnInit(): void {
    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
  }
}
