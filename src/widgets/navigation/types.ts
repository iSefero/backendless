export interface NavigationListItem {
  id: string;
  title: string;
  order: number;
  path: string;
}

export interface INavigation {
  navigationList: NavigationListItem[] | null;
}
