import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUD } from 'src/app/models/crud';
import { CRUDService } from 'src/app/services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {
  Update,
  CarouselRes,
  cardItem,
} from 'src/app/inteferface/home-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource = new MatTableDataSource<CRUD>();
  displayedColumns: string[] = ['Id', 'Name', 'Action'];
  cou: string = 'create';
  in: Update = { id: 0, name: '' };
  carouselItem: CRUD[] = [];
  responsiveOptions: CarouselRes[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  items: cardItem[] = [
    {
      id: 0,
      name: 'Brocoli',
      description: 'lorem ipsum dor amet sil ipsum loremamet sil dolor',
      subDescription: 'Very good quality',
      price: 150,
      unit: 'kl',
      picture: 'brocoli.jpg',
    },
    {
      id: 1,
      name: 'Chili',
      description: 'lorem ipsum dor amet sil ipsum loremamet sil dolor',
      subDescription: 'Very good quality',
      price: 100,
      unit: 'kl',
      picture: 'chili.jpg',
    },
    {
      id: 2,
      name: 'Onion',
      description: 'lorem ipsum dor amet sil ipsum loremamet sil dolor',
      subDescription: 'Very good quality',
      price: 50,
      unit: 'kl',
      picture: 'onion.jpg',
    },
    {
      id: 3,
      name: 'Potato',
      description: 'lorem ipsum dor amet sil ipsum loremamet sil dolor',
      subDescription: 'Very good quality',
      price: 120,
      unit: 'kl',
      picture: 'potato.jpg',
    },
    {
      id: 4,
      name: 'Red Bell Pepper',
      description: 'lorem ipsum dor amet sil ipsum loremamet sil dolor',
      subDescription: 'Very good quality',
      price: 90,
      unit: 'kl',
      picture: 'redbellpepper.jpg',
    },
    {
      id: 5,
      name: 'Egg Plant',
      description: 'lorem ipsum dor amet sil ipsum loremamet sil dolor',
      subDescription: 'Very good quality',
      price: 90,
      unit: 'kl',
      picture: 'talong.jpg',
    },
  ];

  constructor(private crudService: CRUDService) {}

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit(): void {
    // this.crudService
    // .getRead()
    // .subscribe((result: CRUD[]) => (this.crud = result, console.log(result)));
    this.crudService
      .getRead()
      .subscribe(
        (result: CRUD[]) => (
          (this.dataSource.data = result),
          (this.dataSource.paginator = this.paginator),
          (this.carouselItem = result)
        )
      );
  }

  toupdate(data: Update) {
    console.log(data);
    this.cou = 'update';
    this.in.id = data.id;
    this.in.name = data.name;
  }

  tocreate() {
    this.in.id = 0;
    this.cou = 'create';
  }

  createCRUD() {
    this.crudService
      .createCrud(this.in)
      .subscribe(
        (result: CRUD[]) => (
          (this.dataSource.data = result),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  updateCRUD() {
    this.crudService
      .updateCrud(this.in)
      .subscribe(
        (result: CRUD[]) => (
          (this.dataSource.data = result),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }

  deleteCRUD(data: Update) {
    this.crudService
      .deleteCrud(data)
      .subscribe(
        (result: CRUD[]) => (
          (this.dataSource.data = result),
          (this.dataSource.paginator = this.paginator)
        )
      );
  }
}
