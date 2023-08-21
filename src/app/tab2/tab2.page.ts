import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookService } from '../core/services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { CellClickedEvent, ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { Book } from '../core/classes/books.classes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,HttpClientModule, AgGridModule ],
  providers:[BookService]
})
export class Tab2Page implements OnInit {
  
// Each Column Definition results in one Column.
public columnDefs: ColDef[] = [
  { field: 'Book Name'},
  { field: 'Book Type'},
];
bookGrid!: GridApi;
gridApi !: ColumnApi;


// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
};

// Data that gets displayed in the grid
public rowData:Book[] = [];
// For accessing the Grid's API

constructor(private book:BookService) {}

ngOnInit() {
  this.book.getAllBooks().subscribe((res)=>{{
    console.log('res', res)
  }})
}

@ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.bookGrid = params.api;
    this.gridApi = params.columnApi
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
}
