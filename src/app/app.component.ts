import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = {
    title : 'Angular Core Deep Dive',
    subtitle : 'Angular 10'
  }

  clickImg () {
    alert('Hello World')
  }

  onKeyUp (newTitle:string) {
    this.data.subtitle = newTitle;
  }

}
