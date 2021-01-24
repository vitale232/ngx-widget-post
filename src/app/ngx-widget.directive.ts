import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import Expand from '@arcgis/core/widgets/Expand';

import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appNgxWidget]',
})
export class NgxWidgetDirective implements OnInit, OnDestroy {
  private readonly _destroy$ = new Subject<null>();

  private hasView = false;
  private _viewEl: HTMLElement | Expand = undefined;

  // Use rxjs to handle `@Input`s reactively
  // Use the selector as the input name to accept as the default input to the directive.
  @Input() public set appNgxWidget(val: __esri.MapView) {
    this._view.next(val);
  }

  @Input() public set appNgxWidgetPosition(val: __esri.UIAddPosition) {
    this._position.next(val);
  }

  @Input() public set appNgxWidgetExpand(val: boolean) {
    this._expand.next(val);
  }

  @Input() public set appNgxWidgetExpanded(val: boolean) {
    this._expanded.next(val);
  }

  @Input() public set appNgxWidgetExpandTooltip(val: string) {
    this._expandTooltip.next(val);
  }

  @Input() public set appNgxWidgetExpandIconClass(val: string) {
    this._expandIconClass.next(val);
  }

  @Input() public set appNgxWidgetChangeDetection(
    val: ChangeDetectionStrategy
  ) {
    this._changeDetection.next(val);
  }

  private readonly _changeDetection = new BehaviorSubject<ChangeDetectionStrategy>(
    ChangeDetectionStrategy.Default
  );
  private readonly changeDetection$ = this._changeDetection.asObservable();

  private readonly _view = new BehaviorSubject<__esri.MapView>(undefined);
  private readonly view$ = this._view.asObservable();

  private readonly _position = new BehaviorSubject<__esri.UIAddPosition>({
    position: 'bottom-left',
    index: 0,
  });
  private readonly position$ = this._position.asObservable();

  private readonly _expand = new BehaviorSubject<boolean>(false);
  private readonly expand$ = this._expand.asObservable();

  private readonly _expanded = new BehaviorSubject<boolean>(false);
  private readonly expanded$ = this._expanded.asObservable();

  private readonly _expandIconClass = new BehaviorSubject<string>(
    'esri-icon-expand'
  );
  private readonly expandIconClass$ = this._expandIconClass.asObservable();

  private readonly _expandTooltip = new BehaviorSubject<string>(
    'Expand the widget'
  );
  private readonly expandTooltip$ = this._expandTooltip.asObservable();

  constructor(
    private cdr: ChangeDetectorRef,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.view$,
      this.position$,
      this.expand$,
      this.expanded$,
      this.expandIconClass$,
      this.expandTooltip$,
      this.changeDetection$,
    ])
      .pipe(takeUntil(this._destroy$))
      .subscribe((params) => this.handleWidget(...params));
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private handleWidget(
    view: __esri.MapView,
    position: __esri.UIAddPosition,
    expand: boolean,
    expanded: boolean,
    expandIconClass: string,
    expandTooltip: string,
    changeDetectionStrategy: ChangeDetectionStrategy
  ): void {
    if (this.hasView) {
      this.clear(view);
    }

    if (view != null && position != null) {
      if (expand === true) {
        this._viewEl = new Expand({
          expanded,
          expandIconClass,
          expandTooltip,
          view,
          content: this.render(),
        });
        view.ui.add(this._viewEl, position);
      } else {
        this._viewEl = this.render();
        view.ui.add(this._viewEl, position);
      }
    }

    this.markForCheck(changeDetectionStrategy);
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
    if (view) {
      view.ui.remove(this._viewEl);
    }

    this.viewContainerRef.clear();
    this.hasView = false;
    this._viewEl = null;
  }

  private markForCheck(changeDetectionStrategy: ChangeDetectionStrategy): void {
    if (changeDetectionStrategy === ChangeDetectionStrategy.OnPush) {
      setTimeout(() => this.cdr.markForCheck());
    }
  }
}
