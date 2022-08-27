export interface Update{
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