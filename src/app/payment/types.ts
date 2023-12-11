export type Payment = {
  id: string;
  getPayments: () => PaymentDetail[];
  getPaymentById: ({ id }: { id: string }) => PaymentDetail;
  add(payment: PaymentDetail): void;
  remove: ({ id }: { id: string }) => void;
  sortPaymentsByDate(date: string): void;
};

export type PaymentDetail = {
  id: string;
  date: string;
  description: string;
  value: number;
  userName: string;
};
