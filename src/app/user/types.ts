export type User = {
  addFriend: () => void;
  addPayment: () => void;
  removePayment: (params: Record<'id', string>) => void;
  groupIds: string[];
};
