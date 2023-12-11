export type User = {
  id: string;
  addFriend: () => void;
  addPayment: () => void;
  removePayment: (params: Record<'id', string>) => void;
  groupIds: string[];
};
