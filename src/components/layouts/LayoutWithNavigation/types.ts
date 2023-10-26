import { ReactNode } from "react";

interface NavigationListItem {
  id: string;
  title: string;
  order: number;
  path: string;
}

export interface ILayoutWithNavigation {
  navigationList: NavigationListItem[] | null;
  children: ReactNode;
}
