import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  item = [{
    nama: 'jeruk',
    harga: 15000
  },{
    nama: 'kue',
    harga: 20000
  }];

  itemArr = [1,2,3,4];

  show: boolean = true;

  user ={
    nama : 'abc'
  };

}