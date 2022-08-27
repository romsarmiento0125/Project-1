import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUD} from 'src/app/models/crud';
import { CRUDService } from 'src/app/services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Update } from 'src/app/inteferface/home-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource = new MatTableDataSource<CRUD>();
  displayedColumns: string[] = ['Id', 'Name', 'Action'];
  cou: string = "create";
  in: Update = { id: 0, name: ""};

  constructor( private crudService: CRUDService) { }

  @ViewChild(MatPaginator) paginator:any = MatPaginator;

  ngOnInit(): void {
    // this.crudService
    // .getRead()
    // .subscribe((result: CRUD[]) => (this.crud = result, console.log(result)));
    this.crudService
    .getRead()
    .subscribe((result: CRUD[]) => (
      this.dataSource.data = result, 
      this.dataSource.paginator = this.paginator
    ));
  }
  

  toupdate(data: Update) {
    console.log(data)
    this.cou = "update";
    this.in.id = data.id;
    this.in.name = data.name;
  }

  tocreate() {
    this.in.id = 0;
    this.cou = "create";
  }

  createCRUD() {
    this.crudService.createCrud(this.in).subscribe((result: CRUD[]) => (
      this.dataSource.data = result, 
      this.dataSource.paginator = this.paginator
    ));
  }

  updateCRUD() {
    this.crudService.updateCrud(this.in).subscribe((result: CRUD[]) => (
      this.dataSource.data = result, 
      this.dataSource.paginator = this.paginator
    ));
  }

  deleteCRUD(data: Update) {
    this.crudService.deleteCrud(data).subscribe((result: CRUD[]) => (
      this.dataSource.data = result, 
      this.dataSource.paginator = this.paginator
    ));
  }

}
