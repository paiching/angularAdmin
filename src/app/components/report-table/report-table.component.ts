import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';
import { FormControl, FormGroup } from '@angular/forms';

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
  { "id": 2234524, "name": "賓賓連", "workingHours": 16, "timestamp": "2023-01-12T09:00:00" },
  { "id": 2234514, "name": "月亮林", "workingHours": 16, "timestamp": "2023-01-12T09:00:00" },
  { "id": 2244534, "name": "克里斯杜", "workingHours": 16, "timestamp": "2023-01-12T09:00:00" },
  { "id": 2214564, "name": "凱伊蘇", "workingHours": 16, "timestamp": "2023-01-12T09:00:00" },
  // ... more data ...
];

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements AfterViewInit{


  displayedColumns: string[] = ['id', 'name', 'workingHours', 'timestamp'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  filter = new FormControl('');

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchForm!: FormGroup;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.filter.valueChanges.subscribe((value) => {
      this.dataSource.filter = value ? value.trim().toLowerCase() : '';

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    });
  }

  exportToExcel(): void {
    //const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.filteredData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'Report.xlsx');
  }
  search() {
    alert(1);
    let workyearElement = document.getElementById('work_year') as HTMLInputElement;
    if (workyearElement) {
      let workyear = workyearElement.value;
      alert(workyear);
    }

    }

    onSubmit(): void {
      console.log(this.searchForm.value);
      // Perform the search operation based on the form values
    }

}
