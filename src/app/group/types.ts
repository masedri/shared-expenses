import { Observable } from 'rxjs';

export type Group = {
  id: string;
  create: () => void;
  addUser: () => void;
  getGroups: () => Observable<groupById[]>;
  getGroupById: () => Observable<groupById>;
  remove: (params: Record<'id', string>) => void;
  usersIds: string[];
  getBalance: () => void;
};

export type groupById = {
  id: string;
  name: string;
};
