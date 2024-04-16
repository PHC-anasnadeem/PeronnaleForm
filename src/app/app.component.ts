import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model: any = {};
  public totalRecords: any = 0;
  public Listing_: any[] = [];
  formData: any = {};
  collapsed = false;
  public total: number=0;
  public dataError: string = 'Data Loading...';

  constructor() {}



  departments: Department[] = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Sales' }
  ];

 subDepartments: SubDepartment[] = [
  { id: 1, name: 'HR1', departmentId: 1 },
  { id: 2, name: 'HR2', departmentId: 1 },
  { id: 3, name: 'Finance1', departmentId: 2 },
  { id: 4, name: 'Finance2', departmentId: 2 },
  { id: 5, name: 'IT1', departmentId: 3 },
  { id: 6, name: 'IT2', departmentId: 3 },
  { id: 7, name: 'Sales1', departmentId: 4 },
  { id: 8, name: 'Sales2', departmentId: 4 }
];


  contentReady = (e : any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(["EnviroCare"]);
    }
    this.total = e.component.totalCount();
    if (this.total == 0) {
      this.dataError = 'Data is Not Available';
    }
  };



public SaveCollectionCenters() {

  this.Listing_.push(this.model);
  const listingLength = this.Listing_.length;
  this.totalRecords = listingLength;

  this.clearFormFileds();

}

public clearFormFileds(){
this.model = {};
}

public onExporting(event : any) {
  event.component.beginUpdate();
  event.component.columnOption("Sr.#", "visible", false);
}

printGrid() {
  const options = {
    fileName: 'Personnel Form',
    format: 'PDF' 
  };
  // exportDataGrid(options, this.dataGrid.instance);
  }
  


  customizeTooltip = (arg: any) => {
    return {
      text: 'Custom tooltip text',
      color: '#FF0000'
    };
  };

  onToolbarPreparing(event: any) {
    event.toolbarOptions.items.unshift(
      {
        location: 'before',
        template: 'TotalRecords'
      },
    );
  }

}

interface Department {
  id: number;
  name: string;
}

interface SubDepartment {
  id: number;
  name: string;
  departmentId: number;
}
