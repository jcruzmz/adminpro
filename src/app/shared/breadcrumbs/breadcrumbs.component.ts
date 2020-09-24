import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo = '';
  public titleSubs$: Subscription;
  constructor(private router: Router) {
    this.titleSubs$ = this.getRoutes().subscribe(data => {
      this.titulo = data.titulo;
      document.title = `AdminPro - ${this.titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getRoutes() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}
