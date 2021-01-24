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
  template: `
    <h3>Choose a Block Group</h3>

    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <mat-label>Block Group</mat-label>
        <mat-select formControlName="blockGroup">
          <mat-option *ngFor="let group of blockGroups" [value]="group">
            {{ group }}
          </mat-option>
        </mat-select>
        <mat-hint>{{ blockGroups?.length }} Block Groups Available</mat-hint>
      </mat-form-field>
    </form>
  `,
  styles: [
    `
      :host {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
      }
      form {
        width: 100%;
      }
      mat-form-field {
        width: 100%;
      }
      h3 {
        margin-bottom: 0.25rem;
        margin-top: -13px;
      }
    `,
  ],
})
export class FormWidgetComponent implements OnInit, OnDestroy {
  @Input() public blockGroups: string[];

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
