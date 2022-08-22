import { Component, OnInit } from '@angular/core';
import { CRUD } from 'src/app/models/crud';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  crud: CRUD[] = [];

  constructor( private crudService: CRUDService) { }

  ngOnInit(): void {
    this.crudService
    .getRead()
    .subscribe((result: CRUD[]) => (this.crud = result, console.log(result)));
  }

}
