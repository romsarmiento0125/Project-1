export interface Update {
  id: number;
  name: string;
}

export interface NavList {
  name: string;
  children?: NavList[];
}

export interface NavListControl {
  expandable: boolean;
  name: string;
  level: number;
}

export interface CarouselRes {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}

export interface cardItem {
  id: number;
  name: string;
  description: string;
  subDescription: string;
  price: number;
  unit: string;
  picture: string;
}
