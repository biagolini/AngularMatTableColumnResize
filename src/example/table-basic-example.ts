import { Component, Renderer2 } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableResizeService } from './table-resize.service';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(
    private renderer: Renderer2,
    private tableResizeService: TableResizeService
  ) {}

  // Increases the column width by 10px. The Renderer2 safely manipulates the DOM to adjust the style.
  increaseWidth(element: HTMLElement) {
    const currentWidth = element.offsetWidth;
    const newWidth = currentWidth + 10;
    this.renderer.setStyle(element, 'width', `${newWidth}px`);
    // Optionally communicates the new width for global awareness
    this.tableResizeService.resizeColumn(newWidth);
  }

  // Decreases the column width by 10px, with a minimum limit to prevent the column from disappearing.
  decreaseWidth(element: HTMLElement) {
    const currentWidth = element.offsetWidth;
    const newWidth = Math.max(currentWidth - 10, 50); // Ensures the column doesn't get too narrow
    this.renderer.setStyle(element, 'width', `${newWidth}px`);
    // Optionally communicates the new width for global awareness
    this.tableResizeService.resizeColumn(newWidth);
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
