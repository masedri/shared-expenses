export type Payment = {
  id: string;
  getPayments: () => void;
  getPaymentById: (id: string) => PaymentDetail;
  add: Function;
  remove: Function;
  sortPaymentsByDate(date: string): void;
};

export type PaymentDetail = {
  date: string;
  description: string;
  value: number;
  userName: string;
};
