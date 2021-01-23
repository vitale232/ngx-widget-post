import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-widget',
  templateUrl: './form-widget.component.html',
  styleUrls: ['./form-widget.component.css'],
})
export class FormWidgetComponent implements OnInit, OnDestroy {
  @Input() public blockGroups: string[] = undefined;

  @Output() public valueChange = new EventEmitter<string>();

  public form = this.fb.group({
    blockGroup: new FormControl({ value: '' }),
  });

  private _destroy$ = new Subject<null>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form
      .get('blockGroup')
      .valueChanges.pipe(takeUntil(this._destroy$))
      .subscribe((val) => this.valueChange.emit(val));
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
