import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appNgxWidget]',
})
export class NgxWidgetDirective implements OnInit, OnDestroy {
  private readonly _destroy$ = new Subject<null>();

  private hasView = false;
  private viewElement: HTMLElement | undefined = undefined;

  // Use rxjs to handle `@Input`s reactively
  // Use the selector as the input name to accept as the default input to the directive.
  @Input() public set appNgxWidget(val: __esri.MapView) {
    this._view.next(val);
  }

  @Input() public set appNgxWidgetPosition(val: __esri.UIAddPosition) {
    this._position.next(val);
  }

  private readonly _view = new BehaviorSubject<__esri.MapView>(undefined);
  private readonly view$ = this._view.asObservable();

  private readonly _position = new BehaviorSubject<__esri.UIAddPosition>({
    position: 'bottom-left',
    index: 0,
  });
  private readonly position$ = this._position.asObservable();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    combineLatest([this.view$, this.position$])
      .pipe(takeUntil(this._destroy$))
      .subscribe((params) => this.handleWidget(...params));
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private handleWidget(
    view: __esri.MapView,
    position: __esri.UIAddPosition
  ): void {
    if (this.hasView) {
      this.clear(view);
    }

    if (view != null && position != null) {
      this.viewElement = this.render();
      view.ui.add(this.viewElement, position);
    }
  }

  private render(): any {
    const embeddedView = this.viewContainerRef.createEmbeddedView(
      this.templateRef
    );

    const element = embeddedView.rootNodes[0];

    this.hasView = true;

    return element;
  }

  private clear(view?: __esri.MapView): void {
    if (view && this.viewElement) {
      view.ui.remove(this.viewElement);
    }
    this.viewContainerRef.clear();
    this.hasView = false;
  }
}
