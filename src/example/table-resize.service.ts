import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableResizeService {
  // Creates a Subject to emit column width changes. This serves as the source of truth for width adjustments.
  private columnResizeSource = new Subject<number>();

  // Public Observable that components or directives can subscribe to. This Observable broadcasts the width changes.
  columnResized$ = this.columnResizeSource.asObservable();

  constructor() {}

  // Method to emit a column resizing event. This is called to notify subscribers of a change in column width.
  // @param width The new width of the column, in pixels.
  resizeColumn(width: number) {
    this.columnResizeSource.next(width);
  }
}
