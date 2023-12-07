export type Group = {
  id: string;
  create: () => void;
  addUser: () => void;
  remove: (params: Record<'id', string>) => void;
  usersIds: string[];
};
