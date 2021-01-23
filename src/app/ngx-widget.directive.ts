import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appNgxWidget]',
})
export class NgxWidgetDirective implements OnInit, OnDestroy {
  private readonly _destroy$ = new Subject<null>();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
