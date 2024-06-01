import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';

export interface Report {
  id: number;
  name: string;
  workingHours: number;
  timestamp: string;
}

const ELEMENT_DATA: Report[] = [
  { "id": 2334571, "name": "亨利賴", "workingHours": 28, "timestamp": "2023-01-01T08:00:00" },
  { "id": 2234567, "name": "傑克楊", "workingHours": 36, "timestamp": "2023-01-11T09:00:00" },
  { "id": 2234534, "name": "派翠沙", "workingHours": 16, "timestamp": "2023-01-12T09:00:00" },
  // ... more data ...
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  // standalone: true,
  // imports: [MatSortModule]
})
export class DataTableComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'workingHours', 'timestamp'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'Report.xlsx');
  }

}

