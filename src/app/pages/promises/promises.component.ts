import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { promise } from 'protractor';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promise = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promise.then(result => {
    //   console.log(result);
    // }).catch(result => {
    //   console.log(result);
    // });
    // console.log('Fin del init');
    this.getUsers().then( result => console.log(result));
  }

  getUsers() {
    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(result => result.json())
      .then(body => console.log(body.data));
    });
    return promesa;
  }

}
