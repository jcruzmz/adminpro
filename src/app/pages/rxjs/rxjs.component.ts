import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnDestroy {
  suscription: Subscription;
  constructor() {
    // this.returnObservable().pipe(
    //   retry(2)
    // ).subscribe(valor => console.log('subs:', valor),
    //   error => console.log(error),
    //   () => console.log('obs terminado'));
    this.suscription = this.returnInterval().subscribe(result => {
      console.log(result);
    });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          i = -1;
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
  }

  returnInterval() {
    return interval(1000).pipe(
      take(100),
      map(valor => {
        return valor + 1;
      }),
      filter(valor => valor % 2 === 0 ? true : false)
    );
  }
}
